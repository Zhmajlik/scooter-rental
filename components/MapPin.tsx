import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type MapPinProps = {
  selected?: boolean;
};

export function MapPin({ selected = false }: MapPinProps) {
  const size = selected ? 48 : 40;
  const halo = size + 28;

  return (
    <View style={{ width: size, height: size * 1.2 + 8 }}>
      {selected && (
        <View
          style={{
            position: "absolute",
            width: halo,
            height: halo,
            borderRadius: halo / 2,
            top: (size - halo) / 2,
            left: (size - halo) / 2,
            backgroundColor: "rgba(29,181,132,0.25)",
          }}
        />
      )}

      <View
        style={[
          styles.body,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderBottomRightRadius: 0,
          },
        ]}
      >
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            name="scooter"
            size={size * 0.55}
            color="#FFFFFF"
          />
        </View>
      </View>

      <View
        style={[styles.dot, { top: size * 1.207 - 4, left: size / 2 - 4 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#1DB584",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
  },
  iconWrap: {
    transform: [{ rotate: "-45deg" }],
  },
  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1DB584",
  },
});
