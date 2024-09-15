import BearLogo from "../components/BearLogo";
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
    <div className="px-[5%] pt-8 pb-10">
      <BearLogo />
      <Header />
      <AboutInfo />
      <hr className="my-4 bg-black" />
      <Section title={"Projects"} children={projectsSectionChildren} />
      <Section title={"Work Experience"} children={workSectionChildren} />
    </div>
  );
};

export default LandingPage;
