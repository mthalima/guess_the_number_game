import { Text, StyleSheet } from "react-native";

import Colors from "../screens/constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary1,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary1,
    padding: 8,
  },
});
