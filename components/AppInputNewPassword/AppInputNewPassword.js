import { Controller } from "react-hook-form";
import { Input } from "@rneui/base";
import AppInputNewPasswordStyles from "./AppInputNewPasswordStyles";
import { useState } from "react";
import { Text } from "react-native";

export default ({ control, name, label, style = {} }) => {
  const styles = AppInputNewPasswordStyles();

  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    minuscule: false,
    majuscule: false,
  });

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{ pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/ }}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Input
            secureTextEntry={true}
            label={label}
            style={{ margin: 0, padding: 0 }}
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(text);
              setPasswordRules({
                minLength: text.length > 8,
                minuscule: /[a-z]/.test(text),
                majuscule: /[A-Z]/.test(text),
              });
            }}
            value={value}
          />
          <Text>
            taille minimum {passwordRules.minLength ? "OK" : "PAS OK"}
          </Text>
          <Text>majucsule {passwordRules.majuscule ? "OK" : "PAS OK"}</Text>
          <Text>minuscule {passwordRules.minuscule ? "OK" : "PAS OK"}</Text>
        </>
      )}
    ></Controller>
  );
};
