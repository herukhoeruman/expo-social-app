import { StyleSheet, View, Text, Alert, Pressable } from "react-native";
import React from "react";
import Home from "@/assets/icons/home";
import ScreenWrapper from "@/components/screenWrapper";
import Icon from "@/assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/back-button";
import { useRouter } from "expo-router";
import { hp, wp } from "@/utils/common";
import { theme } from "@/constants/theme";
import Input from "@/components/input";
import Button from "@/components/Button";

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);

  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");
  const nameRef = React.useRef("");

  const router = useRouter();

  const onSubmit = () => {
    setLoading(true);

    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      setLoading(false);
      return Alert.alert("SignUp", "Please fill all fields");
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton />

        <View>
          <Text style={styles.welcomeText}>Let's,</Text>
          <Text style={styles.welcomeText}>Get started!</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the data to create an account
          </Text>

          <Input
            placeholder="Enter your name"
            icon={<Icon name="user" size={20} />}
            onChangeText={(value) => (nameRef.current = value)}
          />

          <Input
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Icon name="mail" size={20} />}
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Input
            placeholder="Enter your password"
            secureTextEntry
            icon={<Icon name="password" size={20} />}
            onChangeText={(value) => (passwordRef.current = value)}
          />

          <Button title="Sign up" loading={loading} onPress={onSubmit} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={[
                  styles.footerText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
