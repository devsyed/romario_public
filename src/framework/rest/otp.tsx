import Button from '@components/ui/button';
import { useSendOtpCode, useVerifyOtpCodeMutation } from '@framework/auth';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Alert from '@components/ui/alert';
import MobileOtpInput from 'react-otp-input';
import Label from '@components/ui/label';
import { useTranslation } from 'next-i18next';
import 'react-phone-input-2/lib/bootstrap.css';
import { getDirection } from '@utils/get-direction';
import { useRouter } from 'next/router';
import axios from 'axios';
interface OTPProps {
  defaultValue: string | undefined;
  onVerify: (phoneNumber: string) => void;
}
export const OTP: React.FC<OTPProps> = ({ defaultValue, onVerify }) => {
  const { t } = useTranslation('common');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [number, setNumber] = useState(defaultValue ?? '');
  const [otp, setOtp] = useState('');
  // const [hasOTP, setHasOTP] = useState(false);
  // const [otpId, setOtpId] = useState("");

  const router = useRouter();
  const dir = getDirection(router.locale);
  const laravel_api = process.env.NEXT_PUBLIC_LARAVEL_API;
  const { mutate: verifyOtpCode, isLoading: otpVerifyLoading } =
    useVerifyOtpCodeMutation();
  const {
    mutate: sendOtpCode,
    isLoading: loading,
    hasOTP,
    otpId,
    setHasOTP,
  } = useSendOtpCode();

  const api_endpoint = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
  console.log(api_endpoint);

  // function onSendCodeSubmission() {
  //   sendOtpCode(
  //     {
  //       phone_number: number,
  //     },
  //     {
  //       onSuccess: (data: any) => {
  //         if (data?.success) {
  //           setErrorMessage(null);
  //           setHasOTP(true);
  //           setOtpId(data?.sendOtpCode?.id!);
  //         }
  //         if (!data?.success) {
  //           console.log("text-otp-failed");
  //           setErrorMessage(data?.message);
  //         }
  //       },
  //       onError: (error: any) => {
  //         setErrorMessage(error?.response?.data?.message);
  //       },
  //     }
  //   );
  // }

  function onSendCodeSubmission() {
    sendOtpCode({
      phone_number: number,
    });
  }

  function addContact() {
    axios
      .get(api_endpoint + 'add-contact?phone_number=' + number)
      .then((res) => {
        if (res.data.success === true) {
          onVerify(number);
          setErrorMessage(null);
        } else {
          setErrorMessage(res.data.message);
        }
      });
  }

  function onVerifyCodeSubmission() {
    verifyOtpCode(
      {
        phone_number: number,
        code: otp,
        otp_id: otpId,
      },
      {
        onSuccess: (data) => {
          if (data) {
            setErrorMessage(null);
            onVerify(number);
          }
          setHasOTP(false);
        },
        onError: (error: any) => {
          setErrorMessage(error?.response?.data?.message);
        },
      }
    );
  }

  return (
    <>
      {!hasOTP ? (
        <div
          className={`flex items-center ${
            dir === 'rtl' ? 'rtl-view' : 'ltr-view'
          }`}
        >
          <PhoneInput
            country={'us'}
            value={number}
            onChange={(phone) => setNumber(`+${phone}`)}
            inputClass="!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 ltr:!border-r-0 rtl:!border-l-0 !rounded ltr:rounded-r-none rtl:rounded-l-none focus:!border-black !h-12"
            dropdownClass="focus:!ring-0 !border !border-gray-300 !shadow-350"
          />
          <Button
            loading={loading}
            disabled={loading}
            onClick={addContact}
            className="ltr:rounded-l-none rtl:rounded-r-none flex-shrink-0 capitalize !h-12 !px-6"
          >
            {t('text-send-otp')}
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row md:items-center md:space-x-5">
          <Label className="md:mb-0">{t('text-otp-code')}</Label>

          <MobileOtpInput
            value={otp}
            onChange={(value: string) => setOtp(value)}
            numInputs={6}
            separator={
              <span className="hidden sm:inline-block sm:mx-2">-</span>
            }
            containerStyle="justify-center space-x-2 sm:space-x-0 mb-5 md:mb-0"
            inputStyle="flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-100 rounded focus:border-heading h-12"
            disabledStyle="!bg-gray-100"
          />
          <Button
            loading={otpVerifyLoading}
            disabled={otpVerifyLoading}
            onClick={onVerifyCodeSubmission}
          >
            {t('text-verify-code')}
          </Button>
        </div>
      )}

      {errorMessage && (
        <Alert
          variant="error"
          message={t(errorMessage)}
          className="mt-4"
          closeable={true}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
};
