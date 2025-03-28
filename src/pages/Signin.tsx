import { FC } from "react";
import FormCard from "@/components/Form";
import { useFormValidation } from "@/Hooks/useFormValidation";

const Signin: FC = () => {
  const { validateInputs, inputFields } = useFormValidation(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log("Form is valid, submitting...");
    }
    return;
  };
  return (
    <FormCard
      button="Sign In"
      title="Sign In"
      inputFields={inputFields}
      handleSubmit={handleSubmit}
      footer="Don't have an account?"
      footerLink={{
        text: "Sign up",
        href: "/signup",
      }}
    />
  );
};

export default Signin;
