import { Project } from "../../data/types";
import SkillBadge from "../common/SkillBadge";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, date, description, techStack, link, repoLinks, pictures } =
    props.project;

  const techStackIcons = techStack.map((tech) => <SkillBadge tech={tech} />);

  const repoIcons = repoLinks.map((link) => (
    <a href={link} target="_blank" className="ml-2">
      <i className="bi-github text-lg text-gray-400 hover:text-js-hover"></i>
    </a>
  ));

  const liveLink = (
    <a href={link} target="_blank">
      <i className="bi-arrow-up-right-circle ml-2 text-lg text-gray-400 hover:text-js-hover"></i>
    </a>
  );

  return (
    <div className="landing-page-card">
      <div className="hidden md:flex md:w-1/3 items-start px-3 flex-0">
        <img className="rounded-sm" src={pictures[0]} />
      </div>
      <div className="md:w-2/3 md:pl-12 px-3 flex flex-col">
        <div className="flex">
          <div className="font-semibold flex-1">{name}</div>
          <div>{date}</div>
        </div>
        <hr className="border-js-white py-1" />
        <div className="grow">{description}</div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-end grow">
            <div className="flex items-end flex-wrap">{techStackIcons}</div>
          </div>
          <div className="flex justify-end items-end grow">
            <div className="flex items-end">{[...repoIcons, liveLink]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
