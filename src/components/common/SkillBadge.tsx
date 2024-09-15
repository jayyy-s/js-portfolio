import { technology } from "../../data/types";

type SkillBadgeProps = {
  tech: string;
};

const SkillBadge = (props: SkillBadgeProps) => {
  const { tech } = props;

  return (
    <div className="flex px-2 py-[2px] rounded items-center bg-slate-300 mr-2 mt-2 text-slate-700">
      <i
        className={`devicon-${tech.toLowerCase().replace(/[^0-9a-z]/gi, "")}-${
          tech === technology.express ? "original" : "plain"
        } mr-1 text-leg`}
      ></i>
      <div>{tech}</div>
    </div>
  );
};

export default SkillBadge;
