import { StyleSheet, Text, View,ActivityIndicator,Image, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import Screen from "../../components/Screen";
import NormalTextInput from "../../components/inputs/NormalTextInput";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidingContainer";
import RegularText from "../../components/Texts/RegularText";
import { Formik,resetForm } from "formik";
import MsgBox from "../../components/Texts/MsgBox";
import { colors } from "../../config/colors";
import RegularButton from "../../components/Buttons/RegularButton";
import RowContainer from "../../components/RowContainer";
import PressableText from "../../components/Texts/PressableText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TestEditScreen = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleUpload = async (values, setSubmitting) => {
    try {
      setMessage(null);
      // call backend
      // dispatch(
      //   login({ email: credentials.email, password: credentials.password })
      // );
       setSubmitting(false);
      console.log(values)
    
      // navigation.navigate("App");
      // move to next page

     
    } catch (error) {
      setMessage("Login failed: +error.message");
      setSubmitting(false);
    }
  };
  return (
    <Screen>
         <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>
          Enter Your Account Credentials
        </RegularText>

        <Formik
          initialValues={{ name: "", age: "",location:"", gender:"" }}
          onSubmit={(values, { setSubmitting ,resetForm}) => {
            if (values.name == "" || values.age == "" || values.location == "" || values.gender == "") {
              setMessage("Please fill all fields");
              setSubmitting(false);
            } else {
              handleUpload(values, setSubmitting);
              resetForm()
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
              <NormalTextInput
                label="Name"
              
                placeholder="Name"
                keyboardType="default"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={{ marginBottom: 25 }}
              />
                <NormalTextInput
                label="Age"
             
                placeholder="Age"
                keyboardType="decimal-pad"
                onChangeText={handleChange("age")}
                onBlur={handleBlur("age")}
                value={values.age}
                style={{ marginBottom: 25 }}
              />
                <NormalTextInput
                label="Location"
               
                placeholder="Location"
                keyboardType="default"
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
                style={{ marginBottom: 25 }}
              />
                <NormalTextInput
                label="Gender"
                //icon="email-outline"
                placeholder="Gender"
                keyboardType="default"
                onChangeText={handleChange("gender")}
                onBlur={handleBlur("gender")}
                value={values.gender}
                style={{ marginBottom: 25 }}
              />

              <TouchableOpacity>
                <MaterialCommunityIcons name="camera-outline" size={40} color={colors.secondary} />
              </TouchableOpacity>
            <Image style={{width:150,height:150, borderWidth:2, borderColor:"#000"}}  src=""/>



            
              <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                {message || ""}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Submit</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator size="small" color={colors.primary} />
                </RegularButton>
              )}
            
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
      
      </Screen>
  );
};

export default TestEditScreen;

const styles = StyleSheet.create({});
