import React, { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { InputField, CustomButtonAuth } from "../components";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constant/index";
import LoginSvg from "../assets/images/imgAuth/login.svg";
import GoogleSvg from "../assets/images/imgAuth/google.svg";
import FacebookSvg from "../assets/images/imgAuth/facebook.svg";
import TwitterSvg from "../assets/images/imgAuth/twitter.svg";
import { useUserAccounts } from "../context/context";
import { login } from "../util/http";
import OverLayLoading from "../components/UI/OverLayLoading";
import { AuthContext } from "../store/auth-context";
const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    pass: { value: "", isValid: true },
  });
  const authContext = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  function changeInputHandler(entered, input) {
    setInputs((prevInput) => ({
      ...prevInput,
      [input]: { value: entered, isValid: true },
    }));
  }
  async function signInHandler(email, pass) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, pass);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed", "haha");
    }
    setIsAuthenticating(false);
  }
  function SubmitLoginHandler() {
    const isValiEmail =
      inputs.email.value.length > 0 && inputs.email.value.match(/\S+@\S+\.\S+/);
    const isValiPass = inputs.pass.value.length > 5;
    if (!isValiEmail || !isValiPass) {
      setInputs((prevInput) => ({
        ...prevInput,
        email: {
          value: inputs.email.value,
          isValid: isValiEmail,
        },
        pass: {
          value: inputs.pass.value,
          isValid: isValiPass,
        },
      }));
      return;
    }
    signInHandler(inputs.email.value, inputs.pass.value);
    if (authContext.isAuthenticated) {
      navigation.navigate("HomeScreen");
    }
  }
  if (isAuthenticating) {
    return <OverLayLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView style={{ paddingHorizontal: 25 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.background}
        />
        <View style={{ alignItems: "center" }}>
          <LoginSvg
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>
        <Text style={styles.titleLogin}>Login</Text>
        <InputField
          label={"Email ID"}
          keyBoardType={"email-address"}
          nameInput={"email"}
          value={inputs.email.value}
          onChange={changeInputHandler}
          error={inputs.email.isValid ? null : "Please"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <InputField
          label={"PassWord"}
          onChange={changeInputHandler}
          error={inputs.pass.isValid ? null : "Please"}
          nameInput={"pass"}
          value={inputs.pass.value}
          inputType={"PassWord"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          fieldButtonLabel={"Forget?"}
          fieldButtonFunction={() => navigation.navigate("ForgetScreen")}
        />
        <CustomButtonAuth label={"Login"} onPress={SubmitLoginHandler} />
        <Text style={styles.textLoginWith}>Or, login with...</Text>
        <View style={styles.containerLoginMedia}>
          <TouchableOpacity onPress={() => {}} style={styles.loginMedia}>
            <GoogleSvg width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.loginMedia}>
            <FacebookSvg width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.loginMedia}>
            <TwitterSvg width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerRegister}>
          <Text>New to the app? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleLogin: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 30,
  },

  textLoginWith: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  containerLoginMedia: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  loginMedia: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  containerRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  textRegister: {
    color: COLORS.primary,
    fontWeight: "700",
  },
});

export default LoginScreen;
