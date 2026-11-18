import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ScooterCardProps = {
  model: string;
  charge: string;
  tariff: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function ScooterCard({
  model,
  charge,
  tariff,
  isFavorite,
  onToggleFavorite,
}: ScooterCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="scooter" size={28} color="#FFFFFF" />
      </View>
      <View style={styles.info}>
        <Text style={styles.model}>{model}</Text>
        <Text style={styles.details}>Заряд {charge}</Text>
        <Text style={styles.tariff}>{tariff}</Text>
      </View>
      <Pressable onPress={onToggleFavorite} hitSlop={10}>
        <MaterialCommunityIcons
          name={isFavorite ? "heart" : "heart-outline"}
          size={26}
          color={isFavorite ? "#E5403A" : "#9AA3AF"}
        />
      </Pressable>
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
  tariff: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#1DB584",
    marginTop: 2,
  },
});
