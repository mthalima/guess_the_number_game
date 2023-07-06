import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#2F0F5D", "#0EA293"]} style={styles.appScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.appScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
  },

  backgroundImage: { opacity: 0.15 },
});
