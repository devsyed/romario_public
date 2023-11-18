import Link from "next/link";
import { ROUTES } from '@lib/routes';

export default function BrandSingle({brand}){
    const { slug, name, images } = brand;
    const backgroundImage = images?.[0]?.image[0]?.original || '';
    const brandLogo = images?.[1]?.image[0]?.original || '';

    return (
        <Link
        href={{
            pathname: ROUTES.SEARCH,
            query: { brand: slug },
        }}>
            <div className={`brand-single bg-cover bg-center bg-no-repeat  border border-black rounded flex items-center justify-center h-[250px]`} style={{backgroundImage: `url(${backgroundImage})`}}>
               <img src={brandLogo} alt="brand-logo" />
            </div>
       </Link>
    )
}
