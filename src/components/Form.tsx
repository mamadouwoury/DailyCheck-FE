import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { GoogleIcon } from "./CumtomIcons";
import { InputFieldProps } from "@/types";
import { useFormValidation } from "@/Hooks/useFormValidation";
import InputFied from "./InputField";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

interface FormProps {
  title: string;
  inputFields: InputFieldProps[];
  button: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  footer: string;
  footerLink: {
    text: string;
    href: string;
  };
}

const FormCard: React.FC<FormProps> = ({
  title,
  inputFields,
  button,
  handleSubmit,
  footer,
  footerLink,
}) => {
  const { validateInputs } = useFormValidation(false);

  return (
    <Card variant="outlined">
      {/* <Box sx={{ display: { xs: "flex", md: "none",alignItems:'center' } }}>
        <img src="/assets/favicon.ico" alt="DailyCheck" />
        <Typography variant="h4">Daily Check</Typography>
      </Box> */}
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        {title}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        {inputFields.map((field) => (
          <InputFied
            key={field.id}
            id={field.id}
            type={field.type}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            error={field.error}
            helperText={field.errorMessage}
            required={field.required}
            autoFocus={field.autoFocus || false}
            fullWidth={field.fullWidth || false}
            value={field.value}
            onChange={field.onChange}
          />
        ))}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
        >
          {button}
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          {footer} {""}
          <span>
            <Link
              href={footerLink.href}
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              {footerLink.text}
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => alert("Sign in with Google")}
        startIcon={<GoogleIcon />}
      >
        {button}
        <span>with Google</span>
      </Button>
    </Card>
  );
};
export default FormCard;
