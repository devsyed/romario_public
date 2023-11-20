import Logo from "../romario/Logo";
import Menu from "../romario/Menu";
import SearchBar from "../romario/SearchBar";
import AngleDown from '../icons/AngleDown';
import Account from '../icons/Account';
import CartIcon from '../icons/CartIcon';
import HeartIcon from '../icons/HeartIcon';
import LanguageSwitcher from '@components/ui/language-switcher';
import React, { useRef } from "react";
import SearchIcon from "@components/icons/search-icon";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@lib/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { menu } from "@data/static/menus";
import HeaderMenu from "@components/layout/header/header-menu";
import { useCart } from "@store/quick-cart/cart.context";
import Container from "@components/ui/container";
import { useState } from "react";
import { useCategories } from "@framework/categories";


const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});
const headerMenuList = [
    {
        "id":2,
        "label":"FAQ",
        "href":"/faq"
    },
    {
        "id":2,
        "label":"Contact",
        "href":"/contact-us"
    },
]

export default function Header(){
    const {
		openSidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
        openCart
	} = useUI();
    const [ isAuthorize ] = useAtom(authorizationAtom);
    const { t } = useTranslation("common");
    const { totalItems } = useCart();
    function handleCartOpen() {
        return openCart();
    }

    function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
    const isMultiLangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    function handleToggleDropdown() {
      setIsDropdownOpen((prevState) => !prevState);
    }

    const { data: brands, isLoading: loading, error} = useCategories({ limit: 5 });

    return (
        <div className="romario-header-main mt-2 py-2 ">
          <Container>
            <div className="flex items-center pb-4">
              <Logo classNames="header-logo" variant="original" width={80} height={80} />
              <Menu classNames="hidden lg:flex header-menu ml-5 w-1/4 px-4" fontClasses="text-md"
                orientation={"horizontal"} menuData={headerMenuList} />
              <SearchBar classNames="w-1/2 ms-5 lg:block rounded" background={true} onClick={openSearch} />
              <div className="user-actions w-1/4 flex justify-end">
                <button data-count={totalItems} onClick={handleCartOpen}
                  className="relative mt-1 cart-drawer-btn flex items-center justify-center">
                  <CartIcon />Cart</button>
              </div>
            </div>
          </Container>
          <div className="primary-navigation hidden lg:block border-t-2">
            <Container>
            <div className="flex mt-4 items-center w-full relative">
            <button
              onClick={handleToggleDropdown} // Step 5: Attach the click event handler
              className="bg-primary px-5 py-3 mr-5 text-white w-56 rounded all-categories-button flex items-center justify-center"
            >
            Menu <AngleDown  />
            
          </button>
          {isDropdownOpen && (
                <div
                  ref={dropdownRef} // Step 3: Use useRef to create a reference to the dropdown element
                  className="romario-dropdown-content" // Add appropriate styles for the dropdown
                >
                  <ul>
                    {headerMenuList.map((item) => (
                      <li key={item.id} className="hover:text-black">
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!loading && (
                <div className={"romario-menu-list hidden lg:flex header-menu main-menu ml-5 w-1/2 px-4" }>
                <nav>
                    <ul className="flex gap-10">
                      <li><a href="/search?category=mens">Mens</a></li>
                      <li><a href="/search?category=mens">Women</a></li>
                      <li><a href="/search?category=mens">Children</a></li>
                      <li><a href="/search?category=mens">Football</a></li>
                      <li><a href="/search?category=mens">Basketball</a></li>
                      <li><a href="/search?category=mens">Baseball</a></li>
                    {/* {brands.data.map((brand) => (
                        <li key={brand.id}>
                            <a href={`/search?category=${brand.slug}`} className="hover:text-black transition-color">{brand.name}</a>
                        </li>
                    ))} */}
                    </ul>
                </nav>
                
              </div>
              )}
              <div className="w-1/2 flex align-end justify-end">
                <button className="flex">
                  <Account />&nbsp;&nbsp;
                  <AuthMenu isAuthorized={isAuthorize} href={ROUTES.ACCOUNT}
                    className="text-sm xl:text-base text-heading font-semibold" btnProps={{
									className:
										"text-sm xl:text-base text-heading font-semibold focus:outline-none",
									children: t("text-sign-in"),
									onClick: handleLogin,
								}}>
                    {t("text-page-my-account")}
                  </AuthMenu>
                </button>
                {isMultiLangEnable ? (
                <div className="flex-shrink-0 ltr:ml-auto rtl:mr-auto md:hidden flex">
                  <LanguageSwitcher />
                </div>
                ) : (
                ''
                )}

              </div>
            </div>
            
            </Container>
            
          </div>
        </div>
    )
}