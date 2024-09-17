import { MouseEvent } from "react";

const HeaderLink = (props: { title: string; href: string }) => {
  const { title, href } = props;

  const goToLink = (event: MouseEvent) => {
    if (!href || !href.startsWith("#")) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      className="cursor-pointer block text-xl text-js-brown px-2 bg-js-white border-2 border-js-brown hover:blue-shadow-sm"
      href={href}
      onClick={goToLink}
    >
      {title}
    </a>
  );
};

export default HeaderLink;
