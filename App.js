import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import GameScreen from "./src/screens/GameScreen";
import Colors from "./src/util/colors";
import GameOverScreen from "./src/screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary800, Colors.secondary]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./src/assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImageStyle}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.2,
  },
});
