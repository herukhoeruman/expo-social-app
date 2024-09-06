import { View, Text } from "react-native";
import React from "react";
import Home from "./home";
import { SvgProps } from "react-native-svg";
import { theme } from "@/constants/theme";
import ArrowLeft01Icon from "./arrow-left";
import MailAtSign01Icon from "./mail";
import LockPasswordIcon from "./password";
import UserIcon from "./user";

interface IconProps extends SvgProps {
  name: keyof typeof icons;
  size?: number;
  // strokeWidth?: number;
}

const icons = {
  home: Home,
  arrowLeft: ArrowLeft01Icon,
  mail: MailAtSign01Icon,
  password: LockPasswordIcon,
  user: UserIcon,
};

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;
