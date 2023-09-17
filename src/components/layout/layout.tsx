import Header from '@components/romario/Header';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import Topbar from "@components/romario/Topbar";

const topbarData = [
  <p className="text-md font-light m-0">Free Delivery over AED 500 worth of Shopping</p>
]

const SiteLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar data={topbarData}/>
      <Header />
      <main
        className="relative flex-grow mt-3"
        style={{
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation />
      <Search />
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);

export default SiteLayout;
