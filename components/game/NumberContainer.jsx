import { View, Text, StyleSheet } from "react-native";
import Colors from "../../screens/constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderBottomWidth: 4,
    borderColor: Colors.primary1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "white",
    fontSize: 48,
    fontWeight: 900,
  },
});
