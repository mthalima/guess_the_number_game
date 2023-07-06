import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonView}>
      <Pressable
        style={styles.buttonContainer}
        android_ripple={{ color: "0EA293" }}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#0EA293",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: { textAlign: "center", color: "white" },

  buttonView: { borderRadius: 28, margin: 4, overflow: "hidden" },
});
