import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 34 }}>Orange </Text>
        <Text>I love Playinh</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text style={[{ fontSize: 34 }]}>Green </Text>
        <Text>I love Hiking</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
