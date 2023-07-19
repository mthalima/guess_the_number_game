import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../screens/constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonView}>
      <Pressable
        style={styles.buttonContainer}
        android_ripple={{ color: Colors.primary2 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: { textAlign: "center", color: Colors.tertiary },

  buttonView: { borderRadius: 28, margin: 4, overflow: "hidden" },
});
