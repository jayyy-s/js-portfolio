import ConnectWithMe from "../components/ContactPageComponents/ConnectWithMe";
import ContactForm from "../components/ContactPageComponents/ContactForm";
import ContactPageSection from "../components/ContactPageComponents/ContactPageSection";

const ContactPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center py-20">
      <div className="w-auto space-y-6 px-[5%] pointer-events-auto">
        <ContactPageSection title="Contact" children={[<ContactForm />]} />
        <ContactPageSection title="Connect" children={[<ConnectWithMe />]} />
      </div>
    </div>
  );
};

export default ContactPage;
