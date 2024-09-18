import { ChangeEvent } from "react";

type ContactInputProps = {
  inputLabel: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  isTextArea?: boolean;
  required?: boolean;
};

const ContactInput = (props: ContactInputProps) => {
  const { inputLabel, name, onChange, value, isTextArea, required } = props;

  const inputElement = isTextArea ? (
    <textarea
      className="border border-js-brown h-40 w-full py-2 px-2 focus:outline-none resize-y"
      onChange={onChange}
      name={name}
      value={value}
      required={required}
    />
  ) : (
    <input
      className="border border-js-brown w-full py-2 px-2 focus:outline-none"
      onChange={onChange}
      name={name}
      value={value}
      type="text"
      required={required}
      id="contact-name"
    />
  );

  return (
    <label>
      <div>{`${inputLabel}${required ? "*" : ""}`}</div>
      {inputElement}
    </label>
  );
};

export default ContactInput;
