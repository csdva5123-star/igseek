import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ORANGE = "#ff8000";
const BG = "#383839";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.ibb.co/qYQgWCcs/logo.png" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        <Text style={{ color: ORANGE }}>IGSEEK</Text>
      </Text>
      <Text style={styles.subtitle}>uncensored project</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/(tabs)/chat")}
        activeOpacity={0.7}
      >
        <Text style={styles.btnText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    marginBottom: 40,
  },
  btn: {
    borderWidth: 1.2,
    borderColor: ORANGE,
    backgroundColor: "rgba(255,128,0,0.15)",
    borderRadius: 18,
    paddingHorizontal: 48,
    paddingVertical: 16,
    marginTop: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});
