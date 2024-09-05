import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";

import { theme } from "@/constants/theme";
import { hp } from "@/utils/common";
import Loading from "./Loading";

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: object;
  textStyle?: object;
  loading?: boolean;
  hasShadow?: boolean;
}

const Button = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  loading = false,
  hasShadow = true,
}: ButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <Pressable
      style={[styles.button, buttonStyle, hasShadow && styles.shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
  },
  shadowStyle: {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});
