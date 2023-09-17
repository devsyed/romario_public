import Container from "@components/ui/container"

interface CTAProps{
    backgroundImage: string,
    height: number,
    backgroundPosition: string,
    content: React.ReactNode
}

export default function CTA({backgroundImage, backgroundPosition, height,content} : CTAProps){
    return (
        <div className={`romario-cta-wrapper bg-cover bg-${backgroundPosition} h-[${height}px]`} style={{backgroundImage: `url(${backgroundImage})`}}>
            {content}
        </div>
    )
}