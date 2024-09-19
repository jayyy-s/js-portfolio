type PageSectionProps = {
  children: JSX.Element[];
  title: string;
};

const PageSection = (props: PageSectionProps) => {
  const { title, children } = props;

  return (
    <div className="space-y-2 justify-start w-full">
      <div className="font-ostrich text-6xl text-slate-900">{title}</div>
      {children}
    </div>
  );
};

export default PageSection;
