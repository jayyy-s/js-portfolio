import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";
import JobCard from "./JobCard";

type SectionProps = {
  title: string;
  children: ReactElement<typeof ProjectCard>[] | ReactElement<typeof JobCard>[];
};

const Section = (props: SectionProps) => {
  const { title, children } = props;

  return (
    <div className="w-full">
      <div className="my-10 font-ostrich text-6xl">{title}</div>
      <div className="space-y-6">{children}</div>
    </div>
  );
};

export default Section;
