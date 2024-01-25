import React, { useState } from "react";
import { StyleSheet, ActivityIndicator, Text } from "react-native";

import Screen from "../../components/Screen";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidingContainer";
import RegularText from "../../components/Texts/RegularText";
import StyledTextInput from "../../components/inputs/StyledTextInputs";
import MsgBox from "../../components/Texts/MsgBox";
import RegularButton from "../../components/Buttons/RegularButton";
import { colors } from "../../config/colors";
import { Formik } from "formik";
import PressableText from "../../components/Texts/PressableText";
import RowContainer from "../../components/RowContainer";
import Icon from "../../components/Icons/Icon";

import { useDispatch } from "react-redux";
import { login } from "../../store/features/auth/authSlice";
const LoginScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      // call backend
      // dispatch(
      //   login({ email: credentials.email, password: credentials.password })
      // );

      navigation.navigate("App");
      // move to next page

      setSubmitting(false);
    } catch (error) {
      setMessage("Login failed: +error.message");
      setSubmitting(false);
    }
  };

  return (
    <Screen style={{ paddingTop: 50 }}>
      <Icon style={{ marginBottom: 25 }} />
      <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>
          Enter Your Account Credentials
        </RegularText>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              setMessage("Please fill all fields");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <>
              <StyledTextInput
                label="Email Address"
                icon="email-outline"
                placeholder="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={{ marginBottom: 25 }}
              />

              <StyledTextInput
                label="Password"
                icon="lock-open-outline"
                placeholder="* * * * * * * *"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={{ marginBottom: 25 }}
                isPassword={true}
              />

              <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                {message || ""}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Login</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator size="small" color={colors.primary} />
                </RegularButton>
              )}
              <RowContainer style={{ marginTop: 15 }}>
                <PressableText
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  New? Register
                </PressableText>

                <PressableText
                  onPress={() => {
                    navigation.navigate("ForgotPassword");
                  }}
                >
                  Forgot Password?
                </PressableText>
              </RowContainer>
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
