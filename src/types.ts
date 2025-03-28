export enum InputFieldType {
  TextInput = "textInput",
  TextArea = "textArea",
}

export interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
  error: boolean;
  errorMessage: string;
  required: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormError {
  error: boolean;
  message: string;
}

export interface FormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorMessages {
  email: FormError;
  password: FormError;
  confirmPassword: FormError;
}
