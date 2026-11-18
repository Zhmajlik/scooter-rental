import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ScooterCardProps = {
  model: string;
  charge: string;
  tariff: string;
};

export function ScooterCard({ model, charge, tariff }: ScooterCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="scooter" size={28} color="#FFFFFF" />
      </View>
      <View style={styles.info}>
        <Text style={styles.model}>{model}</Text>
        <Text style={styles.details}>Заряд {charge}</Text>
      </View>
      <Text style={styles.tariff}>{tariff}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1DB584",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  info: { flex: 1 },
  model: { fontSize: 16, fontFamily: "Inter_600SemiBold", color: "#14181F" },
  details: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#5A6472",
    marginTop: 2,
  },
  tariff: { fontSize: 14, fontFamily: "Inter_600SemiBold", color: "#1DB584" },
});
