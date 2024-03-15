import { Controller } from "react-hook-form";
import AppInputTextStyles from "./AppInputTextStyles";
import { Input } from "@rneui/base";

export default ({
  control,
  name,
  defaultValue,
  rules,
  label,
  style = {},
  multiline = false
}) => {
  const styles = AppInputTextStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          label={label}
          style={{ margin: 0, padding: 0 }}
          onBlur={onBlur}
          onChangeText={(text) => onChange(text)}
          value={value}
          multiline={multiline}
          inputStyle={
            multiline
              ? {
                  textAlignVertical: "top",
                  height: 120,
                }
              : {
                  height: 30,
                }
          }
          errorMessage={
            control._formState.errors[name]
              ? control._formState.errors[name].message
              : ""
          }
        />
      )}
    ></Controller>
  );
};
