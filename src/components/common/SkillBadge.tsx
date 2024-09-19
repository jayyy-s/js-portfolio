import { technology } from "../../data/types";

type SkillBadgeProps = {
  skill: string;
  isTech?: boolean;
};

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill, isTech } = props;
  const originalExtensionList: string[] = [
    technology.express,
    technology.threejs,
  ];

  const devIcon = `devicon-${skill.toLowerCase().replace(/[^0-9a-z]/gi, "")}-${
    originalExtensionList.includes(skill) ? "original" : "plain"
  }`;

  return (
    <div className="flex px-2 py-[2px] rounded items-center bg-slate-300 text-slate-700">
      {isTech && <i className={`${devIcon} mr-1`}></i>}
      <div>{skill}</div>
    </div>
  );
};

export default SkillBadge;
