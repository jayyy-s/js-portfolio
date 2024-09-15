import BearLogo from "../BearLogo";

const Header = () => {
  return (
    <div className="flex items-cente space-x-4">
      <BearLogo />
      <div className="flex items-center space-x-5 text-xl">
        <div>Projects</div>
        <div>Work</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Header;
