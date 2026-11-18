import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../contexts/AuthContext";

type LoginValues = { phone: string; code: string };

function validate(values: LoginValues) {
  const errors: Record<string, string> = {};
  const digits = values.phone.replace(/\D/g, "");

  if (!digits) {
    errors.phone = "Введите номер телефона";
  } else if (digits.length !== 9) {
    errors.phone = "Нужно 9 цифр после +375, например (29) 123-45-67";
  }

  if (!values.code) {
    errors.code = "Введите код из SMS";
  } else if (!/^\d{4}$/.test(values.code)) {
    errors.code = "Код состоит из 4 цифр";
  }

  return errors;
}

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();
  const { values, errors, handleChange, handleSubmit } = useForm<LoginValues>(
    { phone: "", code: "" },
    validate,
  );

  function onSubmit() {
    handleSubmit((validValues) => {
      const digits = validValues.phone.replace(/\D/g, "");
      login(`+375 ${digits}`);
      navigation.replace("Map");
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <MaterialCommunityIcons name="scooter" size={52} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>Поехали!</Text>
      <Text style={styles.subtitle}>
        Авторизуйтесь, чтобы находить и бронировать самокаты поблизости
      </Text>

      <View style={styles.form}>
        <FormField label="Номер телефона" error={errors.phone}>
          <View style={styles.phoneRow}>
            <View style={styles.codeBox}>
              <Text style={styles.codeText}>+375</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              value={values.phone}
              onChangeText={(text) => handleChange("phone", text)}
              placeholder="(29) 000-00-00"
              placeholderTextColor="#9AA3AF"
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>
        </FormField>

        <FormField label="Код из SMS" error={errors.code}>
          <TextInput
            style={styles.input}
            value={values.code}
            onChangeText={(text) => handleChange("code", text)}
            placeholder="0000"
            placeholderTextColor="#9AA3AF"
            keyboardType="number-pad"
            maxLength={4}
          />
        </FormField>
      </View>

      <Button variant="primary" onPress={onSubmit}>
        Войти
      </Button>

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>или</Text>
        <View style={styles.line} />
      </View>

      <Button variant="secondary" onPress={() => {}}>
        Войти по E-mail
      </Button>

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
    paddingTop: 56,
    paddingHorizontal: 24,
  },
  logoBox: {
    height: 90,
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
    marginTop: 28,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#3A4250",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 22,
  },
  form: { marginTop: 24 },
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
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#14181F",
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#D5DAE1",
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#14181F",
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
  terms: {
    marginTop: "auto",
    paddingTop: 16,
    marginBottom: 24,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Inter_400Regular",
    color: "#9AA3AF",
  },
  link: { textDecorationLine: "underline" },
});
