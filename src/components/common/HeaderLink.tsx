import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

const HeaderLink = (props: { title: string; href: string }) => {
  const { title, href } = props;
  const navigate = useNavigate();

  const goToLink = (event: MouseEvent) => {
    if (!href) return;
    event.preventDefault();

    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      className="border-box cursor-pointer block text-xl text-js-brown px-2 hover:blue-shadow-sm"
      href={href}
      onClick={goToLink}
    >
      {title}
    </a>
  );
};

export default HeaderLink;
