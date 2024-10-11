import { Screen } from "@/App";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { TERMS_AND_CONDITION } from "@/constants";
import { Button } from "./ui/button";

type Props = {
  changeScreen: (screen: Screen) => void;
  text?: string;
};

const TermsCondition = ({
  changeScreen,
  text = TERMS_AND_CONDITION,
}: Props) => {
  const [errors, setErrors] = useState<{ [K: number]: string }>({});
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    validateInput(newInput);
  };

  const validateInput = (currentInput: string) => {
    const newErrors = { ...errors };

    currentInput.split("").forEach((char, index) => {
      if (char !== text[index]) {
        newErrors[index] = char === " " ? "*" : char;
      } else {
        delete newErrors[index];
      }
    });

    setErrors(newErrors);
  };

  const renderText = () => {
    return text.split("").map((char, index) => {
      let className = "text-muted-foreground";
      let _char = char;

      if (index < input.length) {
        const error = errors[index];
        if (error) {
          className = "bg-red-500 text-white w-[1ch] text-center inline-block";
          _char = error;
        } else {
          className = "text-primary";
        }
      }

      return (
        <span key={index} className={className}>
          {_char}
        </span>
      );
    });
  };

  return (
    <div className="p-6">
      <h1 className="mb-3 text-center text-2xl font-semibold">
        Terms and Conditions
      </h1>
      <p className="mb-2 text-secondary-foreground">
        Please type the following to accept the terms
      </p>
      <div className="relative mb-2 h-56 overflow-auto rounded border border-input px-3 py-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
        <div className="whitespace-pre-wrap font-sans text-sm" contentEditable>
          {renderText()}
        </div>
        <Textarea
          className="absolute inset-0 h-full w-full cursor-text resize-none opacity-0"
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <Button
        variant="default"
        className="w-full"
        onClick={() => changeScreen("success")}
        disabled={Object.keys(errors).length > 0 || input.length < text.length}>
        Accept
      </Button>
    </div>
  );
};

export default TermsCondition;
