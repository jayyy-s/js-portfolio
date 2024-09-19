import BearLogo from "../BearLogo";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <div className="flex items-cente space-x-4">
      <BearLogo />
      <div className="flex items-center space-x-2">
        <LinkButton title="Projects" href="#projects" />
        <LinkButton title="Work" href="#work" />
        <LinkButton title="Contact" href="/contact" />
      </div>
    </div>
  );
};

export default Header;
