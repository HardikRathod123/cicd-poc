import { Image } from "expo-image";
import * as Updates from "expo-updates";
import { StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🚀 OTA Update Status</ThemedText>
        <View style={styles.statusBox}>
          <ThemedText>
            Channel:{" "}
            <ThemedText type="defaultSemiBold">
              {currentlyRunning.channel ?? "unknown"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Runtime Version:{" "}
            <ThemedText type="defaultSemiBold">
              {currentlyRunning.runtimeVersion ?? "unknown"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Update ID:{" "}
            <ThemedText type="defaultSemiBold">
              {currentlyRunning.updateId ?? "embedded"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Is Embedded:{" "}
            <ThemedText type="defaultSemiBold">
              {currentlyRunning.isEmbeddedLaunch
                ? "Yes (no OTA yet)"
                : "No (running OTA update)"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Update Available:{" "}
            <ThemedText type="defaultSemiBold">
              {isUpdateAvailable ? "✅ Yes" : "❌ No"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Update Pending:{" "}
            <ThemedText type="defaultSemiBold">
              {isUpdatePending ? "⏳ Yes" : "❌ No"}
            </ThemedText>
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">How it works</ThemedText>
        <ThemedText>
          Every time code is merged to{" "}
          <ThemedText type="defaultSemiBold">main</ThemedText>, GitHub Actions
          triggers an EAS build and publishes an OTA update to the{" "}
          <ThemedText type="defaultSemiBold">preview</ThemedText> channel. Next
          time you open the app, it pulls the latest JS bundle automatically.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  statusBox: {
    gap: 6,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
