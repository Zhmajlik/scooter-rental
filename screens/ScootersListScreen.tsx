import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ScooterCard } from "../components/ScooterCard";

const scooters = [
  {
    id: "1",
    model: "Ninebot KickScooter Max",
    charge: "85%",
    tariff: "0.30 BYN/мин",
  },
  {
    id: "2",
    model: "Xiaomi Mi Scooter 4",
    charge: "72%",
    tariff: "0.25 BYN/мин",
  },
  {
    id: "3",
    model: "Ninebot KickScooter F2",
    charge: "94%",
    tariff: "0.28 BYN/мин",
  },
  {
    id: "4",
    model: "Segway Ninebot E2",
    charge: "58%",
    tariff: "0.22 BYN/мин",
  },
  {
    id: "5",
    model: "Xiaomi Mi Scooter 3",
    charge: "66%",
    tariff: "0.24 BYN/мин",
  },
];

export function ScootersListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Ближайшие самокаты</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {scooters.map((scooter) => (
          <ScooterCard
            key={scooter.id}
            model={scooter.model}
            charge={scooter.charge}
            tariff={scooter.tariff}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8ECF1",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "#14181F",
    marginBottom: 12,
  },
});
