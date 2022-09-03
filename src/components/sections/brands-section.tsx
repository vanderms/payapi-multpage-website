import homeData from "@/data/content/home.json";
import layoutData from "@/data/content/layout.json";
import { Link } from "react-router-dom";

export const BrandsSection: React.FC = () => {
  return (
    <section
      className="mt-20 bg-neutral-900 py-20 overflow-hidden relative [isolation:isolate]
      md:py-[5.5rem] xl:py-[6.25rem] xl:mt-[4.6875rem]"
    >
      <div className="absolute top-0 left-0 w-full flex justify-center z-[-1] xl:justify-start">
        <img
          src={layoutData.shared.assets.pattern}
          alt=""
          className="max-w-none aspect-square w-[48.75rem] relative top-[-37.625rem] md:top-[-34.25rem]
          xl:top-[-22.4375rem] xl:left-[-14.6875rem]"
        />
      </div>
      <div
        className="container grid grid-cols-1 gap-14 md:gap-16 xl:grid-cols-[27.8125rem,33.5rem] 
        xl:justify-between"
      >
        <ul
          className="grid grid-cols-[7.5rem,7.5rem] grid-rows-[1.625rem,1.375rem,1.6875rem] gap-y-10 
        justify-between px-6 md:grid-cols-[8.1875rem,9.0625rem,8.75rem] md:grid-rows-[1.9375rem,2.0625rem]
        md:w-[33.5rem] mx-auto md:px-0 xl:order-1 xl:h-max xl:self-center"
        >
          {homeData.brands.brands.map((brand, i) => (
            <li key={i} className="w-full h-full">
              <img
                src={brand.logo}
                alt={brand.name}
                className="[filter:brightness(0)_invert(100%)] object-contain object-center w-full h-full"
              />
            </li>
          ))}
        </ul>
        <header className="text-neutral-50 md:w-[28.5625rem] md:mx-auto xl:w-[27.8125rem]">
          <h2 className="heading-md text-center xl:text-left">
            {homeData.brands.title}
          </h2>
          <p className="mt-4 text-center opacity-70 paragraph-md md:mt-6 xl:text-left">
            {homeData.brands.text}
          </p>
          <div className="mt-12 md:mt-8">
            <Link
              to={homeData.brands.link.to}
              className="secondary-button dark w-max mx-auto xl:mx-0"
            >
              {homeData.brands.link.text}
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
};
