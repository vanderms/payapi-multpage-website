import data from "@/data/content/layout.json";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Icon: React.FC<{
  icon: string;
  className: string;
}> = ({ icon, className }) => {
  switch (icon) {
    case "facebook":
      return <FaFacebookSquare className={className} />;
    case "twitter":
      return <FaTwitter className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
  }
  throw Error("icon not found");
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-10 pb-14 relative md:py-[1.9375rem] overflow-hidden">
      <div className="top-0 left-0 absolute flex flex-col items-center w-full md:items-end ">
        <img
          src={data.shared.assets.pattern}
          alt=""
          className="relative max-w-none w-[48.75rem] aspect-square  top-[11.0625rem] md:top-[-8.5rem]
          md:right-[-24.375rem]"
        />
      </div>
      <div
        className="container flex flex-col items-center gap-10 relative z-10 md:flex-row md:justify-between
      md:gap-0"
      >
        <Link to="/" aria-label="homepage">
          <img
            src={data.shared.assets.logo}
            alt=""
            className="[filter:brightness(0)_invert(100%)]"
          />
        </Link>
        <ul className="flex flex-col items-center gap-8 md:flex-row md:grow md:ml-16">
          {data.shared.links.map((link, i) => (
            <li key={i}>
              <Link to={link.to} className="footer-text">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-6">
          {Object.values(data.footer.socialLinks).map((link, i) => (
            <li key={i}>
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={link.name}
                  className="w-6 h-6 text-neutral-50 hover:text-primary-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
