import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

interface idProps {
  data_testid?: string;
}
export function FormField<T extends FieldValues>(
  props: TextFieldProps & UseControllerProps<T> & idProps,
) {
  const {
    control,
    name,
    rules,
    defaultValue,
    shouldUnregister,
    data_testid,
    ...textFieldProps
  } = props;
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue, shouldUnregister });
  return (
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      value={value}
      name={name}
      data-test-id={data_testid}
      {...textFieldProps}
      {...(error && { error: true, helperText: error.message })}
    />
  );
}
