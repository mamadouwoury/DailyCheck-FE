import { ErrorMessages, FormFields } from "@/types";
import { useState } from "react";

export const useFormValidation = (isSignup: boolean) => {
  const [formFields, setFormFields] = useState<FormFields>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorMessages>({
    email: { error: false, message: "" },
    password: { error: false, message: "" },
    confirmPassword: { error: false, message: "" },
  });

  const validateInputs = (): boolean => {
    let isValid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!formFields.email || !/\S+@\S+\.\S+/.test(formFields.email)) {
      newErrors.email = {
        error: true,
        message: "Please enter a valid email address.",
      };
      isValid = false;
    } else {
      newErrors.email = { error: false, message: "" };
    }

    // Password validation
    if (!formFields.password || formFields.password.length < 6) {
      newErrors.password = {
        error: true,
        message: "Password must be at least 6 characters long.",
      };
      isValid = false;
    } else {
      newErrors.password = { error: false, message: "" };
    }

    // Confirm password validation for signup
    if (isSignup && formFields.confirmPassword !== formFields.password) {
      newErrors.confirmPassword = {
        error: true,
        message: "Passwords do not match.",
      };
      isValid = false;
    } else {
      newErrors.confirmPassword = { error: false, message: "" };
    }

    setErrors(newErrors); // Update errors state
    return isValid;
  };

  const inputFields = [
    {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "your@email.com",
      error: errors.email.error,
      errorMessage: errors.email.message,
      required: true,
      autoFocus: true,
      fullWidth: true,
      value: formFields.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormFields((prev) => ({ ...prev, email: e.target.value })),
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      name: "password",
      placeholder: "••••••",
      error: errors.password.error,
      errorMessage: errors.password.message,
      required: true,
      fullWidth: true,
      value: formFields.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormFields((prev) => ({ ...prev, password: e.target.value })),
    },
    ...(isSignup
      ? [
          {
            id: "confirm-password",
            type: "password",
            label: "Confirm Password",
            name: "confirm-password",
            placeholder: "••••••",
            required: true,
            fullWidth: true,
            value: formFields.confirmPassword,
            error: errors.confirmPassword.error,
            errorMessage: errors.confirmPassword.message,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setFormFields((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              })),
          },
        ]
      : []),
  ];

  return {
    formFields,
    errors,
    validateInputs,
    inputFields,
  };
};
