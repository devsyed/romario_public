
interface Categories{
    data: CategoryProps[]
}
interface CategoryProps{
    backgroundImage: string, 
    title: string,
    buttonText: string,
    buttonLink:string
}

export default function CategoryGrids({data} : Categories){
    return (
        <div className="category-props-wrapper grid grid-cols-2 gap-4 mt-5 mb-5">
            {data.map((categorySingle:CategoryProps, index) => (
                <a href={categorySingle.buttonLink} className="category-single h-[400px] rounded bg-cover bg-center" style={{backgroundImage:`url(${categorySingle.backgroundImage})`}}>
                    <div className="block-content h-full px-4 items-start justify-end pb-[50px] pl-[50px] flex flex-col">
                        <h3 className="text-white text-[36px]">{categorySingle.title}</h3>
                        <a className="bg-white px-5 py-2 mt-4 font-semibold text-black hover:bg-[#d9d9d9] transition-color" href={categorySingle.buttonLink}>{categorySingle.buttonText}</a>
                    </div>
                </a>
            ))}
        </div>
    )
}