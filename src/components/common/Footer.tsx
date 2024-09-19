import LinkButton from "./LinkButton";
import Resume from "../../assets/Jay_Srinivasan_Resume_0805.pdf";
import { useMatch } from "react-router-dom";

const Footer = () => {
  const matchCredit = useMatch("/credit");
  const matchContact = useMatch("/contact");

  const anyMatchedRoutes = matchCredit || matchContact;

  return (
    <div
      className={`absolute bottom-0 w-full px-[5%] pb-[1%] left-0 flex space-x-2 justify-center ${
        anyMatchedRoutes ? "" : "md:justify-start"
      } items-center pointer-events-auto`}
    >
      <LinkButton title="Credit" href="/credit" />
      <LinkButton title="Resume" href={Resume} />
    </div>
  );
};

export default Footer;
