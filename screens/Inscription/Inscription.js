import { View } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/base";
import { useState } from "react";
import AppButton from "../../components/AppButton/AppButton";
import { useForm } from "react-hook-form";
import AppInputText from "../../components/AppInputText/AppInputText";
import AppInputNewPassword from "../../components/AppInputNewPassword/AppInputNewPassword";

export default ({ onInscription }) => {
  const styles = AppStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={[styles.container, styles.safeArea]}>
      <AppInputText
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: "Le champs est requis",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Format invalide",
          },
        }}
        label="Email"
      ></AppInputText>
      <AppInputNewPassword 
        control={control}
        name="pasword"
        label="Mot de passe"
      />
      <AppButton
        title="Inscription"
        style={{ width: 100 }}
        onPress={handleSubmit(onInscription)}
      ></AppButton>
    </View>
  );
};
