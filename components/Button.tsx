import { Pressable, Text, StyleSheet } from "react-native";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  children: string;
  variant?: ButtonVariant;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  onPress,
  disabled = false,
}: ButtonProps) {
  const containerStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    danger: styles.danger,
  };
  const textStyles = {
    primary: styles.textLight,
    secondary: styles.textDark,
    danger: styles.textLight,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        containerStyles[variant],
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, textStyles[variant]]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#1DB584",
    shadowColor: "#1DB584",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  secondary: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D5DAE1",
  },
  danger: {
    backgroundColor: "#E5403A",
    shadowColor: "#E5403A",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  disabled: { opacity: 0.5 },
  text: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  textLight: { color: "#FFFFFF" },
  textDark: { color: "#14181F" },
});
