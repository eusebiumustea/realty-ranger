import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  const textRef = useRef<Text>(null);

  return (
    <View style={styles.container}>
      <Text ref={textRef}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
