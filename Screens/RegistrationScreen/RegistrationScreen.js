import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Screens.styles";
// import { ScrollView } from "react-native-web";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [focusLogin, setFocusLogin] = useState(false);

  const [focusEmail, setIsFocusEmail] = useState(false);

  const [focusPassword, setFocusPassword] = useState(false);

  const loginHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      login: value,
    }));
  const nameHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      email: value,
    }));
  const passwordHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      password: value,
    }));

  const onRegistration = () => {
    console.log(state);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.containerFlex}>
        <ImageBackground
          style={styles.backgroundImg}
          source={require("../../assets/images/123.jpg")}
        >
          <View>
            <View style={styles.regInputs}>
              <View style={styles.avatarPlace}>
                <Image source={require("../../assets/images/add.svg")} />
              </View>
              <Pressable
                title={"Login"}
                style={styles.add}
                onPress={() => alert("This is a pick photo button!")}
              >
                <View>
                  <Image source={require("../../assets/images/add.svg")} />
                </View>
              </Pressable>
              <View style={styles.textPosition}>
                <Text>Реєстрація</Text>
              </View>

              <TextInput
                value={state.login}
                onChangeText={loginHandler}
                placeholder="Login"
                style={{
                  ...styles.input,
                  borderColor: focusLogin ? "#FF6C00" : "#E8E8E8",
                }}
                onFocus={() => setFocusLogin(true)}
                onBlur={() => setFocusLogin(false)}
              />
              <TextInput
                value={state.email}
                onChangeText={nameHandler}
                placeholder="Username"
                style={{
                  ...styles.input,
                  borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
                }}
                onFocus={() => setIsFocusEmail(true)}
                onBlur={() => setIsFocusEmail(false)}
              />
              <TextInput
                value={state.password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={{
                  ...styles.input,
                  borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
                }}
                onFocus={() => setFocusPassword(true)}
                onBlur={() => setFocusPassword(false)}
              />
              <TouchableOpacity>
                <Pressable
                  title={"Register"}
                  style={styles.button}
                  onPress={onRegistration}
                >
                  <Text>Зареєструватись</Text>
                </Pressable>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
