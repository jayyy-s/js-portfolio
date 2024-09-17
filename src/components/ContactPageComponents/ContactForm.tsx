import { useState, ChangeEvent, useEffect } from "react";
import ContactInput from "./ContactInput";
import * as emailjs from "@emailjs/browser";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  useEffect(() => {
    emailjs.init({
      publicKey: "qIvk8dUocEsNlT3CJ",
    });
  }, []);

  const [emailData, setEmailData] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = () => {
    if (
      emailData.name === "" ||
      emailData.email === "" ||
      emailData.message === ""
    ) {
      setShowError(true);
      return;
    }

    setShowError(false);

    emailjs
      .send("contact_service", "contact_form", {
        from_name: emailData.name,
        from_email: emailData.email,
        message: emailData.message,
      })
      .then(
        () => {
          console.log("success");
        },
        (error) => console.log("failed...", error)
      );
  };

  return (
    <div className="bg-js-white border-2 border-js-brown blue-shadow p-10 pb-6 space-y-5 flex flex-col">
      <ContactInput
        inputLabel="Name"
        name="name"
        value={emailData.name}
        onChange={handleChange}
        required
      />
      <ContactInput
        inputLabel="Email"
        name="email"
        value={emailData.email}
        onChange={handleChange}
        required
      />
      <ContactInput
        inputLabel="Message"
        name="message"
        value={emailData.message}
        onChange={handleChange}
        isTextArea
        required
      />
      <div className="flex items-center">
        <div className={`px-3 text-js-red ${showError ? "" : "invisible"}`}>
          Please complete all fields!
        </div>
        <div
          className="bg-js-white border-2 border-js-brown px-3 py-2 w-fit hover:bg-js-red cursor-pointer self-end"
          onClick={handleSend}
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
