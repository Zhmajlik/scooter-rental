import { useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { ScooterCard } from "../components/ScooterCard";
import { useAuth } from "../contexts/AuthContext";

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
  {
    id: "6",
    model: "Ninebot KickScooter P65",
    charge: "91%",
    tariff: "0.27 BYN/мин",
  },
  {
    id: "7",
    model: "Xiaomi Mi Scooter Essential",
    charge: "49%",
    tariff: "0.20 BYN/мин",
  },
];

type Tab = "all" | "favorites";
type Props = NativeStackScreenProps<RootStackParamList, "ScootersList">;

export function ScootersListScreen({ navigation }: Props) {
  const { user, logout } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("all");

  function toggleFavorite(id: string) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  }

  function handleLogout() {
    logout();
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  }

  const visibleScooters =
    activeTab === "all"
      ? scooters
      : scooters.filter((s) => favoriteIds.includes(s.id));

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Ближайшие самокаты</Text>

      {user ? (
        <View style={styles.authBar}>
          <Text style={styles.authText}>Вы вошли как {user}</Text>
          <Pressable onPress={handleLogout}>
            <Text style={styles.authLink}>Выйти</Text>
          </Pressable>
        </View>
      ) : null}

      <View style={styles.tabs}>
        <Pressable
          onPress={() => setActiveTab("all")}
          style={activeTab === "all" ? styles.tabActive : styles.tab}
        >
          <Text
            style={activeTab === "all" ? styles.tabTextActive : styles.tabText}
          >
            Все
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("favorites")}
          style={activeTab === "favorites" ? styles.tabActive : styles.tab}
        >
          <Text
            style={
              activeTab === "favorites" ? styles.tabTextActive : styles.tabText
            }
          >
            Избранное{favoriteIds.length > 0 && ` (${favoriteIds.length})`}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={visibleScooters}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ScooterCard
            model={item.model}
            charge={item.charge}
            tariff={item.tariff}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Пока нет избранных самокатов. Нажмите на сердечко на карточке.
          </Text>
        }
      />
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
  authBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  authText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#5A6472",
  },
  authLink: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#E5403A",
  },
  tabs: { flexDirection: "row", gap: 8, marginBottom: 16 },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  tabActive: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#1DB584",
  },
  tabText: { fontSize: 14, fontFamily: "Inter_500Medium", color: "#14181F" },
  tabTextActive: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#FFFFFF",
  },
  listContent: { paddingBottom: 24 },
  emptyText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#5A6472",
    textAlign: "center",
    marginTop: 40,
    lineHeight: 22,
  },
});
