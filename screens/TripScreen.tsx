import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Trip">;

export function TripScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/map1.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />

      <View style={styles.spacer} />

      <View style={styles.sheet}>
        <View style={styles.handle} />

        <View style={styles.statusRow}>
          <Text style={styles.status}>Поездка активна</Text>
          <View style={styles.statusDot} />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>14:25</Text>
            <Text style={styles.statLabel}>Время</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, styles.green]}>
              5.30 <Text style={styles.currency}>BYN</Text>
            </Text>
            <Text style={styles.statLabel}>Стоимость</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Pressable style={styles.actionButton}>
            <MaterialCommunityIcons name="pause" size={28} color="#4A5360" />
          </Pressable>
          <Pressable style={styles.actionButton}>
            <MaterialCommunityIcons
              name="flashlight"
              size={26}
              color="#4A5360"
            />
          </Pressable>
        </View>

        <Pressable style={styles.endButton} onPress={() => navigation.goBack()}>
          <Text style={styles.endButtonText}>Завершить поездку</Text>
        </Pressable>

        <Text style={styles.help}>Нужна помощь?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8ECF1", overflow: "hidden" },
  mapImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  spacer: { flex: 1 },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    marginHorizontal: 12,
    marginBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#D5DAE1",
    marginBottom: 16,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  status: { fontSize: 20, fontFamily: "Inter_600SemiBold", color: "#14181F" },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1DB584",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  stat: { alignItems: "center" },
  statValue: { fontSize: 34, fontFamily: "Inter_700Bold", color: "#14181F" },
  green: { color: "#1DB584" },
  currency: { fontSize: 20, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 15, fontFamily: "Inter_400Regular", color: "#14181F" },
  actionsRow: { flexDirection: "row", gap: 12, marginBottom: 16 },
  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#E3E6EB",
    alignItems: "center",
  },
  endButton: {
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#E5403A",
    alignItems: "center",
    shadowColor: "#E5403A",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  endButtonText: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    color: "#FFFFFF",
  },
  help: {
    textAlign: "center",
    marginTop: 14,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#5B8DB8",
    textDecorationLine: "underline",
  },
});
