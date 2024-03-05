import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppButton from "./components/AppButton/AppButton";
import theme from "./theme";

export default function App() {
  
  const colors = theme();

  const onPressClicMoi = () => {
    console.log("Hello !");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    monTexte: {
      color: "blue",
    },
  });

  return (
    <View style={styles.container}>
      <AppButton title="Clic moi" onPress={onPressClicMoi}></AppButton>
      <StatusBar style="auto" />
    </View>
  );

  
}


