import { Project } from "../../data/types";
import SkillBadge from "../common/SkillBadge";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, date, description, techStack, link, repoLinks, thumbnail } =
    props.project;

  const techStackIcons = techStack.map((tech) => (
    <SkillBadge skill={tech} isTech />
  ));

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
      <div className="hidden md:ml-4 md:w-1/3 px-3 py-2 flex-0 md:flex justify-center items-center">
        <img
          className="max-w-48 max-h-40 bg-js-white px-6 py-5"
          src={thumbnail}
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-12 px-3 flex flex-col">
        <div className="flex items-end">
          <div className="font-semibold flex-1">{name}</div>
          <div>{date}</div>
        </div>
        <hr className="border-js-brown py-1" />
        <div className="grow">{description}</div>
        <div className="flex ">
          <div className="flex items-end grow">
            <div className="flex items-end flex-wrap gap-2 mt-6">{techStackIcons}</div>
          </div>
          <div className="flex justify-end items-end grow">
            <div className="flex items-end mb-[-6px]">
              {[...repoIcons, liveLink]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
