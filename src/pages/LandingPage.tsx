import Header from "../components/common/Header";
import AboutInfo from "../components/LandingPageComponents/AboutInfo";
import JobCard from "../components/LandingPageComponents/JobCard";
import ProjectCard from "../components/LandingPageComponents/ProjectCard";
import Section from "../components/LandingPageComponents/Section";
import { jobs } from "../data/jobs";
import { projects } from "../data/projects";

const LandingPage = () => {
  const projectsSectionChildren = projects.map((project) => (
    <ProjectCard project={project} />
  ));

  const workSectionChildren = jobs.map((job) => <JobCard job={job} />);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="px-[5%] pt-8 pb-10 md:pb-40 w-full md:w-5/6 lg:w-2/3 pointer-events-auto">
        <Header />
        <div className="font-ostrich text-8xl">Jay Srinivasan</div>
        <AboutInfo />
        <hr className="my-4 bg-black" />
        <Section
          title={"Projects"}
          children={projectsSectionChildren}
          id="projects"
        />
        <Section
          title={"Work Experience"}
          children={workSectionChildren}
          id="work"
        />
      </div>
      <div className="md:block md:w-1/6 lg:w-1/3 text-center h-96 md:h-fit">
        CLICK HERE!
      </div>
    </div>
  );
};

export default LandingPage;
