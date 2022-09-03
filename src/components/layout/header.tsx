import data from "@/data/content/layout.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<{ open: boolean }>({ open: false });
  const location = useLocation();

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
      <nav className="mt-10">
        <div className="container flex items-center justify-between">
          <Link to="/" aria-label="Homepage">
            <img src={data.header.assets.logo} alt="" />
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
              {data.header.links.map((link, i) => (
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
