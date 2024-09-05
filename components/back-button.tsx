import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@/assets/icons";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";

interface BackButtonProps {
  size?: number;
}

const BackButton = ({ size = 26 }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Pressable
      style={{
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: "rgba(0,0,0,0.07)",
      }}
      onPress={() => router.back()}
    >
      <Icon
        name="arrowLeft"
        strokeWidth={2.5}
        size={size}
        color={theme.colors.text}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
