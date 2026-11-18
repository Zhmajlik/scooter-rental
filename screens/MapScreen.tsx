import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { MapPin } from "../components/MapPin";
import { Button } from "../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "Map">;

const scooters = [
  {
    id: "1",
    x: 79,
    y: 29,
    model: "Ninebot KickScooter F2",
    charge: "94%",
    range: "около 32 км",
    tariff: "0.28 руб/мин",
  },
  {
    id: "2",
    x: 56,
    y: 44,
    model: "Ninebot KickScooter Max",
    charge: "85%",
    range: "около 28 км",
    tariff: "0.30 руб/мин",
  },
  {
    id: "3",
    x: 21,
    y: 59,
    model: "Xiaomi Mi Scooter 4",
    charge: "72%",
    range: "около 24 км",
    tariff: "0.25 руб/мин",
  },
  {
    id: "4",
    x: 87,
    y: 66,
    model: "Segway Ninebot E2",
    charge: "58%",
    range: "около 19 км",
    tariff: "0.22 руб/мин",
  },
];

const selected = scooters[1];

export function MapScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/map1.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />

      <View style={styles.pinsLayer}>
        {scooters.map((s) => (
          <View
            key={s.id}
            style={[styles.pinWrap, { left: `${s.x}%`, top: `${s.y}%` }]}
          >
            <MapPin selected={s.id === selected.id} />
          </View>
        ))}
      </View>

      <View style={styles.topBar}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons name="account" size={20} color="#FFFFFF" />
        </View>
        <Text style={styles.topText}>Рядом 4 самоката</Text>
        <View style={styles.balanceBadge}>
          <Text style={styles.balanceText}>15.00 BYN</Text>
        </View>
      </View>

      <View style={styles.spacer} />

      <View style={styles.sheet}>
        <View style={styles.handle} />
        <Text style={styles.sheetTitle}>{selected.model}</Text>

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.infoText}>Заряд {selected.charge}</Text>
            <Text style={styles.infoText}>({selected.range})</Text>
          </View>
          <View>
            <Text style={styles.infoText}>Тариф</Text>
            <Text style={styles.infoText}>{selected.tariff}</Text>
          </View>
        </View>

        <Button variant="primary" onPress={() => navigation.navigate("Trip")}>
          Начать поездку
        </Button>
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
  pinsLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  pinWrap: {
    position: "absolute",
    width: 48,
    marginLeft: -24,
    marginTop: -52,
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 16,
    marginHorizontal: 16,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#9AA3AF",
    alignItems: "center",
    justifyContent: "center",
  },
  topText: { fontSize: 15, fontFamily: "Inter_500Medium", color: "#14181F" },
  balanceBadge: {
    backgroundColor: "#D9F3EA",
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  balanceText: { fontSize: 14, fontFamily: "Inter_700Bold", color: "#14181F" },
  spacer: { flex: 1 },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#D5DAE1",
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    color: "#14181F",
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#14181F",
    lineHeight: 22,
  },
});
