import BearLogo from "../BearLogo";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <div className="flex items-cente space-x-4">
      <BearLogo />
      <div className="flex items-center space-x-2">
        <HeaderLink title="Projects" href="#projects" />
        <HeaderLink title="Work" href="#work" />
        <HeaderLink title="Contact" href="./contact" />
      </div>
    </div>
  );
};

export default Header;
