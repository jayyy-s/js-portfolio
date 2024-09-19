import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

const LinkButton = (props: { title: string; href: string }) => {
  const { title, href } = props;
  const navigate = useNavigate();

  const goToLink = (event: MouseEvent) => {
    if (!href) return;
    event.preventDefault();

    // Internal links, not PDF
    if (href.startsWith("/") && !href.endsWith(".pdf")) {
      navigate(href);
      return;
    }

    // Anchor link
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // PDF
    if (href.endsWith(".pdf") && href.startsWith("/")) {
      window.location.href = href;
    }
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

export default LinkButton;
