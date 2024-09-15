import { Job } from "../../data/types";
import SkillBadge from "../common/SkillBadge";

type JobCardProps = {
  job: Job;
};

const JobCard = (props: JobCardProps) => {
  const {
    company,
    logo,
    dateStart,
    dateEnd,
    techStack,
    description,
    companyLink,
    title,
  } = props.job;

  const techStackIcons = techStack.map((tech) => <SkillBadge tech={tech} />);

  const companyLiveLink = (
    <a href={companyLink} target="_blank">
      <i className="bi-arrow-up-right-circle ml-2 text-lg text-gray-400 hover:text-js-hover"></i>
    </a>
  );

  return (
    <div className="landing-page-card">
      <div className="hidden md:w-1/3 px-3 py-2 flex-0 md:flex justify-center items-center">
        <img className="rounded-sm max-w-52 max-h-40" src={logo} />
      </div>
      <div className="md:w-2/3 md:pl-12 px-3 flex flex-col">
        <div className="flex flex-col xl:flex-row">
          <div className="font-semibold flex-1">
            {company}: {title}
          </div>
          <div>
            {dateStart} - {dateEnd}
          </div>
          <div></div>
        </div>
        <hr className="border-js-white py-1" />
        <div className="grow">{description}</div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-end grow">
            <div className="flex items-end flex-wrap">{techStackIcons}</div>
          </div>
          <div className="flex justify-end items-end grow">
            {<div className="flex items-end">{companyLiveLink}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;