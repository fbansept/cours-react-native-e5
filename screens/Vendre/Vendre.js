import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/base";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/AppButton/AppButton";
import AppInputText from "../../components/AppInputText/AppInputText";

export default () => {
  const appStyles = AppStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAjout = (offre) => console.log(offre);

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <AppInputText
        control={control}
        name="nom"
        defaultValue=""
        rules={{
          required: "Le champs est requis",
          minLength: { value: 3, message: "3 caractères minimum" },
          maxLength: { value: 20, message: "20 caractères maximum" },
        }}
        label="Nom"
      ></AppInputText>
      <AppInputText
        control={control}
        name="description"
        defaultValue=""
        rules={{
          maxLength: { value: 100, message: "100 caractères maximum" },
        }}
        label="Description"
        multiline
      ></AppInputText>

      <AppButton
        title="Ajouter mon offre"
        onPress={handleSubmit((data) => onAjout(data))}
      ></AppButton>
    </View>
  );
};
