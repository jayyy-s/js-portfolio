import { MouseEvent } from "react";

const HeaderLink = (props: { title: string; section?: string }) => {
  const { title, section } = props;

  const goToLink = (event: MouseEvent) => {
    event.preventDefault();
    if (!section) return;
    const target = document.querySelector(section);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      className="cursor-pointer block text-xl text-js-brown px-2 bg-js-white border-2 border-js-brown hover:blue-shadow-sm"
      href={section}
      onClick={goToLink}
    >
      {title}
    </a>
  );
};

export default HeaderLink;
