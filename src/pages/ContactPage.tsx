import ConnectWithMe from "../components/ContactPageComponents/ConnectWithMe";
import ContactForm from "../components/ContactPageComponents/ContactForm";
import PageSection from "../components/common/PageSection";

const ContactPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center py-20">
      <div className="w-auto space-y-6 px-[5%] pointer-events-auto">
        <PageSection title="Contact" children={[<ContactForm />]} />
        <PageSection title="Connect" children={[<ConnectWithMe />]} />
      </div>
    </div>
  );
};

export default ContactPage;
