import SectionHeader from '@components/common/section-header';
import ProductOverlayCard from '@components/product/product-overlay-card';
import { useProducts } from '@framework/products';
import Alert from '@components/ui/alert';
import { Product } from '@type/index';
import Spinner from '@components/ui/loaders/spinner/spinner';
import { siteSettings } from '@settings/site.settings';
import { useTranslation } from 'next-i18next';
import isEmpty from 'lodash/isEmpty';
import NotFoundItem from '@components/404/not-found-item';
import ProductCard from '@components/product/product-card';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: 'flat' | 'left' | 'center' | 'combined' | 'fashion';
  limit?: number;
}

const HomeFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'left',
  limit = 10,
}) => {
  const { t } = useTranslation();

  const featuredProductsSettings =
    siteSettings?.homePageBlocks?.featuredProducts;
  const {
    data: products,
    isLoading: loading,
    error,
  } = useProducts({
    limit,
    tags: featuredProductsSettings?.slug,
  });

  if (!loading && isEmpty(products)) {
    return <NotFoundItem text={t('text-no-featured-products-found')} />;
  }
  return (
    <div className={className}>
      {error && <Alert message={error.message} />}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8">
        {' '}
        {loading ? (
          <Spinner showText={false} />
        ) : (
          <>
            {products?.map((product: Product, idx: number) => (
              <>
                <ProductCard
                  key={`product--key${product.id}`}
                  product={product}
                  variant="gridSlim"
                />
              </>
              // <ProductOverlayCard
              //   key={`product--key${product.id}`}
              //   product={product}
              //   variant={variant}
              //   index={idx}
              // />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeFeatured;
