import data from "@/data/content/layout.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<{ open: boolean }>({ open: false });
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setSidebar({ open: false });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header>
      <div className="sr-only">
        <h1>{data.header.title}</h1>
        <a href="#main">Skip Nav</a>
      </div>
      <div className="absolute top-0 left-0 z-[-1]">
        <img
          src={data.shared.assets.pattern}
          alt=""
          className={`max-w-none w-[48rem] aspect-square relative ${
            location.pathname === "/"
              ? `left-[calc(50vw-24.375rem)] top-[-31.5625rem] md:w-[59.3125rem] md:left-[calc(50vw-29.6563rem)]
                xl:w-[48rem] xl:left-[50rem] xl:top-[-10.75rem]    `
              : "top-[-40.25rem] left-[4.625rem] md:top-[-31.5rem] md:left-[31.5625rem] xl:top-[-32.9375rem] xl:left-[50rem]"
          }`}
        />
      </div>
      <nav className="mt-10">
        <div className="container flex items-center justify-between">
          <Link to="/" aria-label="Homepage">
            <img src={data.shared.assets.logo} alt="" />
          </Link>
          <button
            aria-label="open menu"
            className="py-1 px-2 md:hidden"
            onClick={() => {
              setSidebar({ open: true });
            }}
          >
            <img src={data.header.assets.menu} alt="" />
          </button>
          {sidebar.open && (
            <div
              className="fixed inset-0 z-[99998] md:hidden"
              onClick={() => {
                setSidebar({ open: false });
              }}
            ></div>
          )}
          <div
            className={`fixed top-0 bg-neutral-900 h-screen w-[min(18.75rem,100%)] pt-12 px-6 flex flex-col
              z-[99999] md:contents
              ${sidebar.open ? "right-0 transition-all" : "right-[-18.75rem]"}
            `}
          >
            <button
              aria-label="close menu"
              className="py-1 px-2 self-end md:hidden"
              onClick={() => {
                setSidebar({ open: false });
              }}
            >
              <img src={data.header.assets.close} alt="" />
            </button>
            <div className="mt-6 w-full h-0 border-b border-neutral-100/20 md:hidden"></div>
            <ul className="mt-11 flex flex-col items-center gap-8 md:flex-row md:mt-0 md:w-max md:grow md:ml-16">
              {data.shared.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="navbar-text">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 w-full md:w-max md:mt-0">
              <Link to={data.header.cta.to} className="primary-button">
                {data.header.cta.text}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
