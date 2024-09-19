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

  const errorMessages = {
    incompleteFields: "Please complete all fields!",
    emailFailed: "Something went wrong.",
  };

  const [emailData, setEmailData] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [emailSuccess, setEmailSuccess] = useState(false);

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
      setErrorMessage(errorMessages.incompleteFields);
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
          setEmailSuccess(true);
          setEmailData({ name: "", email: "", message: "" });
          console.log("success");
        },
        (error) => {
          setErrorMessage(errorMessages.emailFailed);
          console.log("failed...", error);
        }
      );
  };

  return (
    <div className="border-box blue-shadow p-10 pb-6 space-y-5 flex flex-col w-72 sm:w-96">
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
      {emailSuccess && (
        <div className="text-center">
          <div>Thanks for the message!</div>
          <div>I'll respond as soon as possible.</div>
        </div>
      )}
      {!emailSuccess && (
        <div className="flex items-center">
          <div
            className={`flex-1 px-3 text-js-red ${
              showError ? "" : "invisible"
            }`}
          >
            {errorMessage}
          </div>
          <div
            className="border-box px-3 py-2 w-fit hover:bg-js-red cursor-pointer self-end"
            onClick={handleSend}
          >
            Send
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
