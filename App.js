import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppButton from "./components/AppButton/AppButton";

export default function App() {
  const onPressClicMoi = () => {
    console.log("Hello !");
  };

  return (
    <View style={styles.container}>
      <AppButton title="Clic moi" onPress={onPressClicMoi}></AppButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  monTexte: {
    color: "blue",
  },
});
