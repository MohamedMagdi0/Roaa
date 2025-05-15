import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { RootState } from "../store/store";
import { toggleTheme } from "../store/slices/themeSlice";
import { setLanguage } from "../store/slices/languageSlice";
import logo from "../assets/logo.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const { currentLanguage } = useSelector((state: RootState) => state.language);

  const handleLanguageChange = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
  };

  const navLinkStyle =
    "font-['Poppins'] text-[18px] font-normal leading-normal transition-colors";
  const activeStyle = "text-[#E65F53]";
  const inactiveStyle = "text-gray-700 dark:text-white hover:text-gray-900";

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src={logo} alt="Roaa" />
            </Link>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/"
              className={`${navLinkStyle} ${
                location.pathname === "/" ? activeStyle : inactiveStyle
              }`}
            >
              {t("nav.home")}
            </Link>

            <Menu as="div" className="relative">
              <Menu.Button
                className={`${navLinkStyle} ${
                  location.pathname.includes("/category")
                    ? activeStyle
                    : inactiveStyle
                }`}
              >
                {t("nav.categories")}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/category/1"
                          className={`${
                            active ? "bg-gray-100 dark:bg-gray-600" : ""
                          } block px-4 py-2 text-sm font-['Poppins'] text-gray-700 dark:text-white`}
                        >
                          {t("home.category")} 1
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative">
              <Menu.Button
                className={`${navLinkStyle} ${
                  location.pathname.includes("/service")
                    ? activeStyle
                    : inactiveStyle
                }`}
              >
                {t("nav.services")}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/service-reservation-1"
                          className={`${
                            active ? "bg-gray-100 dark:bg-gray-600" : ""
                          } block px-4 py-2 text-sm font-['Poppins'] text-gray-700 dark:text-white`}
                        >
                          {t("home.service")} 1
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              onClick={handleLanguageChange}
              className={`${navLinkStyle} ${inactiveStyle}`}
            >
              {t("nav.language")}
            </button>

            <button
              onClick={() => dispatch(toggleTheme())}
              className={`${inactiveStyle}`}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
