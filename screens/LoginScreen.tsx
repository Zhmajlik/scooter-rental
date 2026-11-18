import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <MaterialCommunityIcons name="scooter" size={56} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>Поехали!</Text>
      <Text style={styles.subtitle}>
        Авторизуйтесь, чтобы находить и бронировать самокаты поблизости
      </Text>

      <Text style={styles.label}>Номер телефона</Text>
      <View style={styles.phoneRow}>
        <View style={styles.codeBox}>
          <Text style={styles.codeText}>+375</Text>
        </View>
        <View style={styles.phoneInput}>
          <Text style={styles.placeholder}>(29) 000-00-00</Text>
        </View>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={styles.primaryButtonText}>Получить код</Text>
      </Pressable>

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>или</Text>
        <View style={styles.line} />
      </View>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Войти по E-mail</Text>
      </Pressable>
      <Text style={styles.terms}>
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Text style={styles.link}>Условиями использования</Text> и{" "}
        <Text style={styles.link}>Политикой конфиденциальности</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  logoBox: {
    height: 100,
    borderRadius: 16,
    backgroundColor: "#1DB584",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Inter_700Bold",
    color: "#14181F",
    textAlign: "center",
    marginTop: 32,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#3A4250",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 22,
  },
  label: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#14181F",
    marginTop: 32,
    marginBottom: 8,
  },
  phoneRow: { flexDirection: "row" },
  codeBox: {
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: "#F1F3F6",
    borderWidth: 1,
    borderColor: "#D5DAE1",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  codeText: { fontSize: 16, fontFamily: "Inter_400Regular", color: "#14181F" },
  phoneInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#D5DAE1",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#9AA3AF",
  },
  primaryButton: {
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: "#1DB584",
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    color: "#FFFFFF",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    gap: 12,
  },
  line: { flex: 1, height: 1, backgroundColor: "#D5DAE1" },
  dividerText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#5A6472",
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D5DAE1",
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    color: "#14181F",
  },
  terms: {
    marginTop: "auto",
    marginBottom: 24,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Inter_400Regular",
    color: "#9AA3AF",
  },
  link: {
    textDecorationLine: "underline",
  },
});
