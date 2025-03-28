import { FC } from "react";
import { useFormValidation } from "@/Hooks/useFormValidation";
import FormCard from "@/components/Form";

const Signup: FC = () => {
  const { validateInputs, inputFields } = useFormValidation(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log("Form is valid, submitting...");
    }
    return;
  };
  return (
    <FormCard
      button="Sign Up"
      title="Sign Up"
      inputFields={inputFields}
      handleSubmit={handleSubmit}
      footer="Already have an account?"
      footerLink={{
        text: "Sign in",
        href: "/signin",
      }}
    />
  );
};

export default Signup;
