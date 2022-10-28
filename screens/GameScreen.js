import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text style={styles.title}>Higher or lower?</Text>
        {/* +
        - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },

});
