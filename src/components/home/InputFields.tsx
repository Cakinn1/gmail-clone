import React from "react";

interface InputFieldsProps {
  isTextArea?: boolean;
  text: string;
  setOnChangeValue: (value: string) => void;
  value: string;
}

export default function InputFields(props: InputFieldsProps) {
  const { setOnChangeValue, text, isTextArea, value } = props;
  return (
    <div className="border-b">
      {isTextArea ? (
        <textarea
          value={value}
          placeholder={text}
          onChange={(e) => setOnChangeValue(e.target.value)}
          className="w-full p-3 resize-none focus:outline-none text-sm placeholder:opacity-60"
        />
      ) : (
        <input
          value={value}
          className="w-full p-3 focus:outline-none text-sm placeholder:opacity-60"
          type="text"
          placeholder={text}
          onChange={(e) => setOnChangeValue(e.target.value)}
        />
      )}
    </div>
  );
}
