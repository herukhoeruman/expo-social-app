import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

interface LoadingProps {
  size: number | "small" | "large";
  color: string;
}

const Loading = ({ size, color }: LoadingProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
