
interface LogoProps{
    classNames:string,
    width: number,
    height: number,
    variant:string
}

export default function Logo({classNames,width,height,variant} : LogoProps){
    return (
        <div className={"romario-logo " + classNames}>
            {(variant == 'original') &&
                <a href="/"><img src="/logo-original.png" width={width} height={height} alt="logo-main-original"/></a>
            }
        </div>
    )
}