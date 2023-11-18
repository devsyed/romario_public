import Container from "@components/ui/container";

function Slide1(){
    return (
        <div className="mx-auto h-full flex flex-col items-start justify-center">
            <Container>
            <h3 className=" text-white lg:text-[60px] lg:leading-[60px] sm:text-[38px] leading-[45px]">Unleash Your Potential <br/> with Romario.</h3>
            <p className="sm:text-[18px] sm:w-full lg:w-1/2 mt-5 mb-5 text-white text-[20px] font-light opacity-2">Welcome to our Sports Shop, where champions are born and dreams take flight! We are your ultimate destination for all things sports, providing top-quality gear, apparel, and equipment for athletes of every caliber.</p>
            <button className="text-black py-3 px-5 mt-5 w-40 bg-white text-[16px] hover:bg-primary hover:text-white transition-colors">View Now</button>
            </Container>
        </div>
    )
}




export {Slide1};
