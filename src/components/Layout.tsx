import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import { RootState } from "../store/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { direction } = useSelector((state: RootState) => state.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [direction, i18n.language]);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        direction === "rtl" ? "rtl" : "ltr"
      }`}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
