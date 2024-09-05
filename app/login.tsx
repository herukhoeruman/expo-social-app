import { View, Text } from "react-native";
import React from "react";
import Home from "@/assets/icons/home";
import ScreenWrapper from "@/components/screenWrapper";
import Icon from "@/assets/icons";

const Login = () => {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      <Icon name="home" color="red" />
    </ScreenWrapper>
  );
};

export default Login;
