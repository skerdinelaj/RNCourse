import { Pressable, StyleSheet, Text, View } from "react-native";
export default function GoalItem({ text, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ backgroundColor: "#210644" }} style={({ pressed }) => pressed && styles.pressedItem} onPress={onDeleteItem.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
