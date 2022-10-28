import { Text, View, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#23224D" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#403E8C",
    paddingHorizontal: 20,
    paddingVertical: 8,
    elevation: 2,
    minWidth: 120,
  },
  buttonText: {
    textAlign: "center",
    color: "#fafafb",
  },
  pressed: {
    opacity: 0.75,
  },
});
