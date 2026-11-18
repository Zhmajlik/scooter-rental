import { View, Text, StyleSheet } from "react-native";
import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#14181F",
    marginBottom: 8,
  },
  error: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#E5403A",
    marginTop: 4,
  },
});
