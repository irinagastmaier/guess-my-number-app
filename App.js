import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#FAFAFB", "#FAFAFA", "#E3F1FD"]}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 800,
    alignSelf: "center",
  },
});
