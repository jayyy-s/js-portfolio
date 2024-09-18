type ConnectButtonProps = {
  link: string;
  iconClass: string;
};

const ConnectButton = (props: ConnectButtonProps) => {
  const { link, iconClass } = props;

  return (
    <a
      className="border-box cursor-pointer block text-js-brown px-2 py-1 hover:blue-shadow-sm"
      href={link}
      target="_blank"
    >
      <i className={`${iconClass} text-4xl`}></i>
    </a>
  );
};

const ConnectWithMe = () => {
  return (
    <div className="flex space-x-4">
      <ConnectButton
        link="https://www.linkedin.com/in/jay-srinivasan/"
        iconClass="devicon-linkedin-plain"
      />
      <ConnectButton
        link="https://github.com/jayyy-s"
        iconClass="devicon-github-original"
      />
    </div>
  );
};

export default ConnectWithMe;
