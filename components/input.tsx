import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
} from "react-native";
import React, { ForwardedRef } from "react";
import { hp } from "@/utils/common";
import { theme } from "@/constants/theme";

interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  icon?: React.ReactNode;
  inputRef?: ForwardedRef<TextInput>;
}

const Input: React.FC<InputProps> = (props) => {
  const { containerStyle, icon, inputRef, ...rest } = props;

  return (
    <View
      style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.textLight,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
