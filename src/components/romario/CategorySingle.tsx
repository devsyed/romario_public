
import 'swiper/css';
import Link from 'next/link';
import { ROUTES } from '@lib/routes';
export default function CategorySingle({category}){
    const {name, slug} = category;
    return (
        <Link href={{
            pathname: ROUTES.SEARCH,
            query: { category: slug },
        }}>
            <div className="category-single rounded-full w-[185px] mx-auto h-[185px] bg-cover bg-center border" style={{backgroundImage: `url(${category?.image?.[0]?.original ?? 'https://placehold.co/600x400'})`}}></div>
            <h5 className='text-center mt-4 font-bold text-black'>{category.name}</h5>
        </Link>
    )
}