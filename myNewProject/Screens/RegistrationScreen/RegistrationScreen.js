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

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);

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
                <Text style={{ fontFamily: "RobotoBold", fontSize: 30 }}>
                  Реєстрація
                </Text>
              </View>

              <TextInput
                value={state.login}
                onChangeText={loginHandler}
                placeholder="Login"
                style={styles.input}
              />
              <TextInput
                value={state.email}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={state.password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <Pressable
                title={"Register"}
                style={styles.button}
                onPress={onRegistration}
              >
                <TouchableOpacity>
                  <Text>Зареєструватись</Text>
                </TouchableOpacity>
              </Pressable>
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
