import Container from "@components/ui/container";
import { useSettings } from "@framework/settings";

function Slide1(){
    const {data} = useSettings();
    return (
        <div className="mx-auto h-full flex flex-col items-start justify-center">
            <Container>
            <h3 className=" text-white lg:text-[60px] lg:leading-[60px] sm:text-[38px] leading-[45px]">{data?.options?.sliderTitle}</h3>
            <p className="sm:text-[18px] sm:w-full lg:w-1/2 mt-5 mb-5 text-white text-[20px] font-light opacity-2">{data?.options?.sliderText}</p>
            <button className="text-black py-3 px-5 mt-5 w-40 bg-white text-[16px] hover:bg-primary hover:text-white transition-colors">{data?.options?.sliderButtonText}</button>
            </Container>
        </div>
    )
}




export {Slide1};
