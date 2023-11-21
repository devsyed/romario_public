import { getLayout } from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { termsAndServices } from "@settings/terms-settings";
import { Link, Element } from "react-scroll";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import client from '@framework/utils/index'
import { useSettings } from '@framework/settings';

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}

export default function TermsPage() {
  const { t } = useTranslation("terms");
  const {data} = useSettings();
  console.log(data)
  return (
    <>
      <PageHeader pageHeader="text-page-terms-of-service" />
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
        <Container>
          <div className="flex flex-col md:flex-row">
           

            <div className="text-lg">
            <>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >

  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Introduction
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Welcome to www.romariosports.com, service provided by Romario Sports Co.,
      LLC. In using this service provided by Romario Sports Co., LLC, you are
      deemed to have accepted the terms and conditions listed below. The Website
      is provided as a service to you and is intended to allow you and other
      users to browse and order products and other goods or services
      ("Products") offered for sale on the Website ("Services"). Romario Sports
      reserves the right to delete, modify, or supplement the content of the
      Website at any time for any reason without prior notification, and will
      use reasonable efforts to include up-to-date and accurate information on
      the Website.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      All products/services and information displayed on www.romariosports.com
      constitute an "invitation to offer". Your order for purchase constitutes
      your "offer" which shall be subject to the terms and conditions as listed
      below. www.romariosports.com reserves the right to accept or reject your
      offer. If you have supplied us with your valid email address, we will
      notify you by email as soon as possible to confirm receipt of your order
      and email you again to confirm details and therefore process the order.
      Our acceptance of your order will take place upon dispatch of the
      product(s) ordered. No act or omission of www.romariosports.com prior to
      the actual dispatch of the product(s) ordered will constitute acceptance
      of your order.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        ACCOUNT &amp; REGISTERED USER
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      In order to purchase any Products on the Website, you may either register
      and create an account secured by a password (the "Account") or submit your
      order without creating the Account i.e. as a "Guest". Any Account so
      created is personal to you, and you may not transfer it to another person.
      Your registration or order (in case of Guest) shall be complete after you
      accept the Terms. The Terms will apply each time you submit an order for
      any Products on the Website.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      If you register and create an Account, you are a "Registered User". To
      become a Registered User or to submit an order for any Products on the
      Website as a Guest, you must be at least 21 years of age, and must provide
      true, accurate, current, and complete in all respects information about
      yourself (including name, date of birth, email address, credit card
      details, and other details) as requested during the Account creation
      process or at the time of submission of the order on the Website as a
      Guest. If you are under the age of 21 years, you may use this Website only
      under the supervision of a parent or legal guardian who agrees to be bound
      by these Terms. If you are a parent or legal guardian agreeing to these
      Terms on behalf of a person under the age of 21 years, you are fully
      responsible for his or her use of this Website, including all financial
      charges and legal liability that he or she may incur. Romario Sports
      reserves the right to refuse service, terminate Accounts, or cancel orders
      at their sole discretion.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      By registering and using the Website, you warrant that the information
      provided by you in the course of the registration process or in the course
      of submission of order for any Products on the Website as a Guest is true
      accurate, current, and complete in all respects and you undertake to
      ensure that such information is kept up-to-date and agree that such
      information shall be treated as per the Privacy Policy.
    </span>
  </p>
  <p style={{ marginBottom: "0.0000pt", background: "rgb(255,255,255)" }}>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You are responsible for maintaining the confidentiality of your Account
      and password and for restricting access to your personal computer or
      electronic or other mobile or wireless device, and you agree to accept
      responsibility for all activities that occur under your Account or
      password. Romario Sports assumes no liability to any person for any loss
      or damage which may arise as a result of any failure by you in protecting
      your password or Account. If Romario Sports has reason to believe that
      there is likely to be a breach of security or misuse of the Website, we
      may require you to change your password or we may suspend your account
      without any liability to us.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      &nbsp;
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      The Site is not available to persons whose membership has been suspended
      or terminated by www.romariosports.com for any reason whatsoever. If you
      are registering as a business entity, it represents that you have the
      authority to bind the entity to this User Agreement. Those who choose to
      access this Site from outside UAE are responsible to comply with local
      laws to the extent local laws are applicable. www.romariosports.com will
      deliver the products only within its jurisdiction and will not be liable
      for any claims relating to any products ordered from outside its
      jurisdiction.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Except for product where additional terms and conditions are provided
      which are product specific, these terms and conditions supersede all
      previous representations, understandings, or agreements and shall prevail
      notwithstanding any variance with any other terms of any order submitted.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      By using the services of www.romariosports.com you agree to be bound by
      the Terms and Conditions.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      "Your Information" is defined as any information you provide to us in the
      registration, buying or listing process, in the feedback area or through
      any email feature. We will protect Your Information in accordance with our
      Privacy Policy. If you use the Site, you are responsible for maintaining
      the confidentiality of Your Account and Password and for restricting
      access to your computer, and you agree to accept responsibility for all
      activities that occur under your Account or Password.
      www.romariosports.com shall not be liable to any person for any loss or
      damage which may arise as a result of any failure by you to protect your
      password or account. If you know or suspect that someone else knows your
      password you should notify us by contacting us immediately through the
      address provided below. If www.romariosports.com has reason to believe
      that there is likely to be a breach of security or misuse of the
      Www.romariosports.com Site, we may require you to change your password or
      we may suspend your account without any liability to
      Www.romariosports.com.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 11
        }}
      >
        You also agree to:
      </span>
    </strong>
  </p>
  <ul style={{ listStyleType: "undefined", marginLeft: 8 }}>
    <li>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        1.&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Provide true, accurate, current, and complete information about yourself
        as prompted by Romario Sport Co., registration form (such information
        being the "Registration Data")
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        2.&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Maintain and promptly update the Registration Data to keep it true,
        accurate, current, and complete.
      </span>
    </li>
  </ul>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      If you provide any information that is untrue, inaccurate, incomplete, or
      not current or if www.romariosports.com has reasonable grounds to suspect
      that such information is untrue, inaccurate, and not current or not in
      accordance with the User Agreement, www.romariosports.com has the right to
      indefinitely suspend or terminate your membership and refuse to provide
      you with access to the Site.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Pricing Information
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      While www.romariosports.com strives to provide accurate product and
      pricing information, pricing or typographical errors may occur. Therefore,
      www.romariosports.com cannot confirm the price of a product until after
      you order.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You agree to pay the full amount payable for the Product as indicated
      during the order process, including any shipping costs or charges incurred
      with that order. All prices are displayed in United Arab Emirate dirhams.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Romario Sports may not accept your order for Products if (a) the item/s
      is/are out of stock; (b) Romario Sports is unable to obtain authorization
      for your payment; (c) shipping restrictions apply to a particular Product;
      (d) Romario Sports finds a Product or pricing error; or (e) for any other
      reason at Romario Sports’ sole discretion. In any of these situations,
      Romario Sports will inform you that your order has not been accepted, will
      not process your payment and will not be liable to you or any third party
      by reason of our decision to decline processing an order, or unwinding or
      suspending any transaction after processing has begun.&nbsp;
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Unless the product ordered by you has been dispatched, your offer will not
      be deemed accepted and www.romariosports.com will have the right to modify
      the price of the product and contact you for further instructions using
      the e-mail address provided by you during the time of registration, or
      cancel the order and notify you of such cancellation.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      We strive to provide you with the best prices possible on
      www.romariosports.com as well as in all our stores under Romario Sports
      Co., LLC. However, sometimes a price online does not match the price in a
      store. In our effort to be the lowest price provider in your particular
      geographic region, store pricing will sometimes differ from online prices.
      Prices and availability are subject to change without prior notice.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      All amounts published at checkout are inclusive of VAT, which means you
      will not have to pay anything additional. Your delivery charge or Cash on
      Delivery charge, if any, will also include VAT.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Cancellation by www.romariosports.com
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Please note that there may be certain orders that we are unable to accept
      and must cancel. We reserve the right, at our sole discretion, to refuse
      or cancel any order for any reason. Some situations that may result in
      your order being canceled include limitations on quantities available for
      purchase, inaccuracies or errors in product or pricing information, or
      problems identified by our credit and fraud avoidance department. We may
      also require additional verifications or information before accepting any
      order. We will contact you if all or any portion of your order is canceled
      or if additional information is required to accept your order. If your
      order is cancelled after your credit card has been charged, the said
      amount will be reversed back in your Card Account. No cash disbursement
      shall be made under any condition whatsoever.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Cancellations by the Customer
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      In case we receive a cancellation notice and the order has not been
      processed/approved by us, we shall cancel the order and refund the entire
      amount. We will not be able to cancel orders that have already been
      processed and shipped out by us. www.romariosports.com has the full right
      to decide whether an order has been processed or not. The customer agrees
      not to dispute the decision made by www.romariosports.com and accept
      www.romariosports.com's decision regarding the cancellation.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Credit Card Details
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You agree, understand and confirm that the credit/debit card details
      provided by you for availing of services on www.romariosports.com will be
      correct and accurate and you shall not use the credit/debit card which is
      not lawfully owned by you, i.e. in a credit card transaction, you must use
      your own credit card. You further agree and undertake to provide the
      correct and valid credit/debit card details to www.romariosports.com.
      Further the said information will not be utilized and shared by
      www.romariosports.com with any of the third parties unless required for
      fraud verifications or by law, regulation, or court order.
      www.romariosports.com will not be liable for any credit card fraud. The
      liability for use of a card fraudulently will be on you and the onus to
      'prove otherwise' shall be exclusively on you.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Fraudulent /Declined Transactions
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      www.romariosports.com reserves the right to recover the cost of goods,
      collection charges and lawyers fees from persons using the Site
      fraudulently. www.romariosports.com reserves the right to initiate legal
      proceedings against such persons for fraudulent use of the Site and any
      other unlawful acts or acts or omissions in breach of these terms and
      conditions.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Electronic Communications
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      When you visit the Site or send emails to us, you are communicating with
      us electronically. You consent to receive communications from us
      electronically. We will communicate with you by email or by posting
      notices on the Site. You agree that all agreements, notices, disclosures,
      and other communications that we provide to you electronically satisfy any
      legal requirement that such communications be in writing.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Romario Sports may use cookies, or other technologies, on this Website.
      Cookies are small files or records that Romario Sports may place on your
      web browser for collecting information about your activities on the
      Website, preparing reports, assessing trends, and otherwise monitoring the
      way in which the Website is being used. This is intended to enhance
      convenience for you, and to assist Romario Sports to run an efficient
      operation. By accepting these Terms, you confirm your consent to Romario
      Sports’ use of cookies, and other such technologies, for these purposes.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      &nbsp;
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        You Agree and Confirm
      </span>
    </strong>
  </p>
  <ul style={{ listStyleType: "undefined", marginLeft: 8 }}>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        That in the event that a non-delivery occurs on account of a mistake by
        you (i.e. wrong name or address or any other wrong information) any
        extra cost incurred by www.romariosports.com for redelivery shall be
        claimed from you.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        That you will use the services provided by www.romariosports.com, its
        affiliates, consultants, and contracted companies, for lawful purposes
        only and comply with all applicable laws and regulations while using the
        Site and transacting on the Site.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        You will provide authentic and true information in all instances where
        such information is requested of you. www.romariosports.com reserves the
        right to confirm and validate the information and other details provided
        by you at any point of time. If upon confirmation your details are found
        not to be true (wholly or partly), www.romariosports.com has the right
        in its sole discretion to reject the registration and debar you from
        using the Services of www.romariosports.com and / or other affiliated
        websites without prior intimation whatsoever.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        That you are accessing the services available on this Site and
        transacting at your sole risk and are using your best and prudent
        judgment before entering into any transaction through this Site
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        That the address at which delivery of the product ordered by you is to
        be made will be correct and proper in all respects.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        That before placing an order you will check the product description
        carefully. By placing an order for a product, you agree to be bound by
        the conditions of sale included in the item's description.
      </span>
    </li>
  </ul>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        You may not use the Site for any of the following purposes:
      </span>
    </strong>
  </p>
  <ul style={{ listStyleType: "undefined", marginLeft: 8 }}>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Disseminating any unlawful, harassing, libelous, abusive, threatening,
        harmful, vulgar, obscene, or otherwise objectionable material.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Transmitting material that encourages conduct that constitutes a
        criminal offence results in civil liability or otherwise breaches any
        relevant laws, regulations, or code of practice.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Gaining unauthorized access to other computer systems.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Interfering with any other person's use or enjoyment of the Site.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Breaching any applicable laws.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Interfering or disrupting networks or web sites connected to the Site.
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: "Symbol", fontSize: 13, color: "rgb(63,63,63)" }}
      >
        ·&nbsp;
      </span>
      <span
        style={{ fontFamily: "Verdana", fontSize: 11, color: "rgb(63,63,63)" }}
      >
        Making, transmitting, or storing electronic copies of materials
        protected by copyright without the permission of the owner.
      </span>
    </li>
  </ul>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Colors
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      We have made every effort to display the colors of our products that
      appear on the Site as accurately as possible. However, as the actual
      colors you see will depend on your monitor, we cannot guarantee that your
      monitor's display of any color will be accurate.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Modification of Terms &amp; Conditions of Service
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      www.romariosports.com may at any time modify the Terms &amp; Conditions of
      Use of the site without any prior notification to you. You can access the
      latest version of the User Agreement at any given time on
      www.romariosports.com. You should regularly review the Terms &amp;
      Conditions on www.romariosports.com. In the event the modified Terms &amp;
      Conditions is not acceptable to you, you should discontinue using the
      service. However, if you continue to use the service you shall be deemed
      to have agreed to accept and abide by the modified Terms &amp; Conditions
      of Use of this site.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Governing Law and Jurisdiction
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      This User Agreement shall be construed in accordance with the applicable
      laws of UAE. The Courts at Dubai shall have exclusive jurisdiction in any
      proceedings arising out of this agreement. Any dispute or difference
      either in interpretation or otherwise, of any terms of this User Agreement
      between the parties hereto, the same shall be referred to an independent
      arbitrator who will be appointed by Romario Sports Co., LLC. and his
      decision shall be final and binding on the parties hereto. The arbitration
      shall be held in Dubai. The laws of UAE shall be applicable in such
      aspects.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 11
        }}
      >
        Reviews, Feedback, Submissions
      </span>
    </strong>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      <br />
    </span>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      All reviews, comments, feedback, postcards, suggestions, ideas, and other
      submissions disclosed, submitted or offered to www.romariosports.com on or
      by this Site or otherwise disclosed, submitted or offered in connection
      with your use of this Site (collectively, the "Comments") shall be and
      remain www.romariosports.com property. Such disclosure, submission or
      offer of any Comments shall constitute an assignment to
      www.romariosports.com of all worldwide rights, titles and interests in all
      copyrights and other intellectual properties in the Comments. Thus,
      www.romariosports.com owns exclusively all such rights, titles and
      interests and shall not be limited in any way in its use, commercial or
      otherwise, of any Comments. www.romariosports.com will be entitled to use,
      reproduce, disclose, modify, adapt, create derivative works from, publish,
      display and distribute any comments you submit for any purpose whatsoever,
      without restriction and without compensating you in any way.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      www.romariosports.com is and shall be under no obligation (1) to maintain
      any Comments in confidence; (2) to pay you any compensation for any
      Comments; or (3) to respond to any Comments.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You agree that any Comments submitted by you to the Site will not violate
      this policy or any right of any third party, including copyright,
      trademark, privacy or other personal or proprietary right(s), and will not
      cause injury to any person or entity. Further you agree that no Comments
      submitted by you to the Site will be or contain libelous or otherwise
      unlawful, threatening, abusive or obscene material, or contain software
      viruses, political campaigning, commercial solicitation, chain letters,
      mass mailings or any form of "spam". Www.romariosports.com does not
      regularly review posted Comments, but does reserve the right (but not the
      obligation) to monitor and edit or remove any Comments submitted to the
      Site.
    </span>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      <br />
    </span>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      <br />
    </span>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You grant www.romariosports.com the right to use the name that you submit
      in connection with any Comments. You agree not to use a false email
      address, impersonate any person or entity, or otherwise mislead as to the
      origin of any Comments you submit. www.romariosports.com and its
      affiliates take no responsibility and assume no liability for any Comments
      submitted by you or any third party.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You are and shall remain solely responsible for the content of any
      Comments you make, and you agree to indemnify www.romariosports.com and
      its affiliates for all claims resulting from any Comments you submit.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Copyright &amp; Trademark
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      www.romariosports.com, its suppliers and licensors expressly reserve all
      intellectual property rights in all text, programs, products, processes,
      technology, content, and other materials, which appear on this Site.
      Access to this Site does not confer and shall not be considered as
      conferring upon anyone any license under any of www.romariosports.com or
      any third party's intellectual property rights. All rights, including
      copyright, in this website are owned by or licensed to
      www.romariosports.com. Any use of this website or its contents, including
      copying or storing it or them in whole or part, other than for your own
      personal, non-commercial use is prohibited without the permission of
      www.romariosports.com. You may not modify, distribute or re-post anything
      on this website for any purpose.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      The www.romariosports.com names and logos and all related product and
      service names, design marks and slogans are the trademarks or service
      marks of Romario Sports Co., LLC. All other marks are the property of
      their respective companies. No trademark or service mark license is
      granted in connection with the materials contained on this Site. Access to
      this Site does not authorize anyone to use any name, logo, or mark in any
      manner.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      References on this Site to any names, marks, products or services of third
      parties or hypertext links to third party sites or information are
      provided solely as a convenience to you and do not in any way constitute
      or imply www.romariosports.com endorsement, sponsorship or recommendation
      of the third party, information, product or service. www.romariosports.com
      is not responsible for the content of any third party sites and does not
      make any representations regarding the content or accuracy of material on
      such sites. If you decide to link to any such third-party websites, you do
      so entirely at your own risk.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      All materials, including images, text, illustrations, designs, icons,
      photographs, programs, music clips or downloads, video clips and written
      and other materials that are part of this Site (collectively, the
      "Contents") are intended solely for personal, non-commercial use. You may
      download or copy the Contents and other downloadable materials displayed
      on the Site for your personal use only.&nbsp;No right, title or interest
      in any downloaded materials or software is transferred to you as a result
      of any such downloading or copying.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You may not reproduce (except as noted above), publish, transmit,
      distribute, display, modify, create derivative works from, sell or
      participate in any sale of or exploit in any way, in whole or in part, any
      of the Contents, the Site or any related software.&nbsp;
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      All software used on this Site is the property of www.romariosports.com or
      its suppliers and protected by international copyright laws. The Contents
      and software on this Site may be used only as a shopping resource. Any
      other use, including the reproduction, modification, distribution,
      transmission, republication, display, or performance, of the Contents on
      this Site is strictly prohibited. Unless otherwise noted, all Contents are
      copyrights, trademarks, trade dress and/or other intellectual property
      owned, controlled or licensed by www.romariosports.com, one of its
      affiliates or by third parties who have licensed their materials to
      Www.romariosports.com and are protected by international copyright laws.
      The compilation (meaning the collection, arrangement, and assembly) of all
      Contents on this Site is the exclusive property of www.romariosports.com
      and is also protected by international copyright laws.
    </span>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 11
        }}
      >
        Objectionable Material
      </span>
    </strong>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      <br />
    </span>
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You understand that by using this Site or any services provided on the
      Site, you may encounter Content that may be deemed by some to be
      offensive, indecent, or objectionable, which Content may or may not be
      identified as such. You agree to use the Site and any service at your sole
      risk and that to the fullest extent permitted under applicable law,
      www.romariosports.com and its affiliates shall have no liability to you
      for Content that may be deemed offensive, indecent, or objectionable to
      you.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Indemnity
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      You agree to defend, indemnify and hold harmless www.romariosports.com,
      its employees, directors, officers, agents and their successors and
      assigns from and against any and all claims, liabilities, damages, losses,
      costs and expenses, including attorney's fees, caused by or arising out of
      claims based upon your actions or inactions, which may result in any loss
      or liability to www.romariosports.com or any third party including but not
      limited to breach of any warranties, representations or undertakings or in
      relation to the non-fulfillment of any of your obligations under this User
      Agreement or arising out of the your violation of any applicable laws,
      regulations including but not limited to Intellectual Property Rights,
      payment of statutory dues and taxes, claim of libel, defamation, violation
      of rights of privacy or publicity, loss of service by other subscribers
      and infringement of intellectual property or other rights. This clause
      shall survive the expiry or termination of this User Agreement.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Termination
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      This User Agreement is effective unless and until terminated by either you
      or www.romariosports.com. You may terminate this User Agreement at any
      time, provided that you discontinue any further use of this Site.
      www.romariosports.com may terminate this User Agreement at any time and
      may do so immediately without notice, and accordingly deny you access to
      the Site, Such termination will be without any liability to
      www.romariosports.com. Upon any termination of the User Agreement by
      either you or www.romariosports.com, you must promptly destroy all
      materials downloaded or otherwise obtained from this Site, as well as all
      copies of such materials, whether made under the User Agreement or
      otherwise. www.romariosports.com's right to any Comments shall survive any
      termination of this User Agreement. Any such termination of the User
      Agreement shall not cancel your obligation to pay for the product already
      ordered from the Site or affect any liability that may have arisen under
      the User Agreement.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        E- Communications
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      When you visit the Website or send emails to www.romariosports.com, you
      are communicating with us electronically. You consent to receive
      communications from us electronically. We will communicate with you by
      email or by posting notices on the Website. You agree that all agreements,
      notices, disclosures, and other communications that we provide to you
      electronically satisfy any legal requirement that such communications be
      in writing.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Entire Agreement
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      If any part of this agreement is determined to be invalid or unenforceable
      pursuant to applicable law including, but not limited to, the warranty
      disclaimers and liability limitations set forth above, then the invalid or
      unenforceable provision will be deemed to be superseded by a valid,
      enforceable provision that most closely matches the intent of the original
      provision and the remainder of the agreement shall continue in effect.
      Unless otherwise specified herein, this agreement constitutes the entire
      agreement between you and www.romariosports.com with respect to the
      www.romariosports.com sites/services and it supersedes all prior or
      contemporaneous communications and proposals, whether electronic, oral or
      written, between you and www.romariosports.com with respect to the
      www.romariosports.com sites/services. www.romariosports.com's failure to
      act with respect to a breach by you or others does not waive its right to
      act with respect to subsequent or similar breaches.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Privacy Policy
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      We do not sell or rent your personal information to third parties for
      their marketing purposes without your explicit consent and we only use
      your information as described in the Privacy Policy. We view protection of
      your privacy as a very important community principle. We understand
      clearly that you and Your Information is one of our most important assets.
      We store and process Your Information on computers located in Dubai that
      are protected by physical as well as technological security devices. We
      use third parties to verify and certify our privacy principles. If you
      object to your Information being transferred or used in this way please do
      not use the Site.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Transaction Currency:
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      The standard transaction currency on our e-commerce portal is UAE Dirham
      (AED). If the customer is using a credit card supplied by banks other than
      those in the UAE, the amount on the credit card bill may differ due to
      exchange rate fluctuations and any charges that the card issuer/bank may
      have debited.
    </span>
  </p>
  <p
    style={{
      marginBottom: "0.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <strong>
      <span
        style={{
          fontFamily: "Verdana",
          color: "rgb(63,63,63)",
          fontWeight: "bold",
          fontSize: 12
        }}
      >
        Country of Merchant Domicile:
      </span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "5.0000pt",
      marginBottom: "5.0000pt",
      lineHeight: "12.0000pt",
      background: "rgb(255,255,255)"
    }}
  >
    <span
      style={{ fontFamily: "Verdana", color: "rgb(63,63,63)", fontSize: 11 }}
    >
      Romario Sports Co., LLC is a Limited Liability Company registered in
      Dubai, UAE.
    </span>
  </p>
  <p>
    <span style={{ fontFamily: "Calibri", fontSize: 15 }}>&nbsp;</span>
  </p>
</>

            </div>
            {/* End of content */}
          </div>
        </Container>
      </div>
    </>
  );
}

TermsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, () => client.settings.findAll());

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "menu",
        "forms",
        "footer",
        "terms",
      ])),
    },
  };
};
