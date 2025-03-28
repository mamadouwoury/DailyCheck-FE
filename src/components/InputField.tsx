import { FC } from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";

const InputFied: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <TextField
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        error={props.error}
        helperText={props.helperText}
        required={props.required}
        autoFocus={props.autoFocus || false}
        fullWidth={props.fullWidth || false}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        color={props.error ? "error" : "primary"}
      />
    </FormControl>
  );
};

export default InputFied;
