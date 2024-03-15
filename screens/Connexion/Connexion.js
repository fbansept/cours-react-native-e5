import { View } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/base";
import { useState } from "react";
import AppButton from "../../components/AppButton/AppButton";
import { useNavigation } from "@react-navigation/native";

export default ({onConnexion}) => {
  const styles = AppStyles();

  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("root");

  const navigation = useNavigation();

  return (
    <View style={[styles.container, styles.safeArea]}>
      <Input
        placeholder="Email"
        textContentType="emailAddress"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <AppButton
        title="Connexion"
        style={{ width: 100 }}
        onPress={() => onConnexion({ email, password })}
      ></AppButton>

      <AppButton
        title="Inscription"
        style={{ width: 100 }}
        onPress={() => navigation.navigate("inscription")}
      ></AppButton>
    </View>
  );
};
