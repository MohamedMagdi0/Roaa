import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import introImage from "../assets/introImage.jpg";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      {/* <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("home.welcome")}
            </h1>
            <p className="text-xl mb-8">{t("home.subtitle")}</p>
            <Link
              to="/categories"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("home.exploreNow")}
            </Link>
          </div>
        </div>
      </section> */}
      <div className="flex w-[1140px] items-center justify-between relative">
        <div className="flex flex-col w-[550px] items-start gap-14 relative">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-csk-124147950 text-[65px] tracking-[0] leading-[85px]">
              Precision <br />
              Engineered
              <br />
              for Excellence
            </div>

            <p className="relative w-[457px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#889899] text-[25px] tracking-[0] leading-[37.5px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>

          <div className="flex w-[289px] items-center justify-center gap-2 px-5 py-4 relative flex-[0_0_auto] bg-csk-124147500 rounded-lg">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Explore Our Products
            </div>
          </div>
        </div>
        <img src={introImage} alt="introImage" />
        {/* <Component
          className="!ml-[-99px] !relative"
          frameClassName="bg-[url(/frame-297-3.png)]"
          property1="frame-405"
          propertyAvantClassName="bg-[url(/AVANT-845-GT-STUDIO-1-4-2.png)]"
          studio="e527-studio-092023-1-10-3.png"
          studioClassName="!left-[-1251px] !top-[-158px]"
        /> */}
      </div>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          {t("home.featuredCategories")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`/category-${category}.jpg`}
                  alt={`${t("home.category")} ${category}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {t("home.category")} {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t("home.ourServices")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((service) => (
            <div
              key={service}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`/service-${service}.jpg`}
                  alt={`${t("home.service")} ${service}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t("home.service")} {service}
                </h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  to={`/service-reservation-${service}`}
                  className="text-primary font-semibold hover:text-primary-dark"
                >
                  {t("home.learnMore")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
