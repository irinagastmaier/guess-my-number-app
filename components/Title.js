import { Text } from "react-native";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F26444",
    textAlign: "center",
    borderBottomWidth: 4,
    borderBottomColor: "#F26444",
  },
});
