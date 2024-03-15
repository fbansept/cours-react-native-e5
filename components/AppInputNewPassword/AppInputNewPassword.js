import { Controller } from "react-hook-form";
import { Icon, Input } from "@rneui/base";
import AppInputNewPasswordStyles from "./AppInputNewPasswordStyles";
import { useState } from "react";
import { Text, View } from "react-native";

export default ({ control, name, label, style = {} }) => {
  const styles = AppInputNewPasswordStyles();

  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    minuscule: false,
    majuscule: false,
  });

  const RuleLine = ({ valid, message }) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon
        type="font-awesome-5"
        name={valid ? "smile-wink" : "poo"}
        color={valid ? "green" : "darkred"}
      ></Icon>
      <Text style={{ marginLeft: 3 }}>{message}</Text>
    </View>
  );

  return (
    <Controller
      control={control}
      name={name}
      defaultValue="Rootroot"
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
                minLength: text.length >= 8,
                minuscule: /[a-z]/.test(text),
                majuscule: /[A-Z]/.test(text),
              });
            }}
            value={value}
          />
          <RuleLine
            valid={passwordRules.minLength}
            message="8 caractères minimum"
          />
          <RuleLine
            valid={passwordRules.majuscule}
            message="Au moins une majuscule"
          />
          <RuleLine
            valid={passwordRules.minuscule}
            message="Au moins une minuscule"
          />
        </>
      )}
    ></Controller>
  );
};
