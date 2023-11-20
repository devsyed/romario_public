import Container from "@components/ui/container"
import { useSettings } from "@framework/settings";

interface CTAProps{
    backgroundImage: string,
    height: number,
    backgroundPosition: string,
    content: React.ReactNode
}

export default function CTA({backgroundImage, backgroundPosition, height,content} : CTAProps){
    const {data} = useSettings();
    return (
        <div className={`romario-cta-wrapper bg-cover bg-${backgroundPosition} h-[${height}px]`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col h-full items-start justify-center px-[300px] pb-4">
            <h3 className="text-[56px] text-black">"ROMARIO15"</h3>
            <p>{data?.options?.promoCodeText}</p>
    </div>
        </div>
    )
}