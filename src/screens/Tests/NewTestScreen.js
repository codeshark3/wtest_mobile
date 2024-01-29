import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import NormalTextInput from "../../components/inputs/NormalTextInput";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidingContainer";
import RegularText from "../../components/Texts/RegularText";
import { Formik, resetForm } from "formik";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import MsgBox from "../../components/Texts/MsgBox";
import { colors } from "../../config/colors";
import RegularButton from "../../components/Buttons/RegularButton";
import { insertTests } from "../../utility/db";
import RegularModal from "../../components/Modals/RegularModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { createTest } from "../../store/features/tests/testSlice";
import { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "../../components/OfflineNotice";
const NewTestScreen = () => {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [onchoImage, setOnchoImage] = useState();
  const [schistoImage, setSchistoImage] = useState();
  const [lfImage, setLfImage] = useState();
  const [helminthsImage, setHelminthsImage] = useState();

  const onCameraButtonPress = async (imageType) => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: false,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;

        // Update the corresponding state based on imageType
        switch (imageType) {
          case "onchoImage":
            setOnchoImage(selectedImage);
            console.log(1);
            break;
          case "schistoImage":
            setSchistoImage(selectedImage);
            console.log(2);
            break;
          case "lfImage":
            setLfImage(selectedImage);
            console.log(3);
            break;
          case "helminthsImage":
            setHelminthsImage(selectedImage);
            console.log(4);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const handleUpload = async (values, setSubmitting) => {
    try {
      setMessage(null);
      // call backend
      if (netInfo.type !== "unknown" && netInfo.isInternetReachable === true) {
        dispatch(
          createTest({
            name: values.name,
            age: values.age,
            gender: values.gender,
            location: values.location,
            onchoImage: values.onchoImage,
            schistoImage: values.schistoImage,
            lfImage: values.lfImage,
            helminthsImage: values.helminthsImage,
          })
        );

        if (!result.ok) {
          // setUploadVisible(false);
          return alert("could not save test");
        } else {
          setSubmitting(false);

          setOnchoImage();
          setHelminthsImage();
          setLfImage();
          setSchistoImage();
          return alert("Data uploaded.");
        }
      } else if (
        netInfo.type !== "unknown" &&
        netInfo.isInternetReachable === false
      ) {
        try {
          const response = values;
          //store image in filesytem

          const OfileName = response.onchoImage.split("/").pop();
          const SfileName = response.schistoImage.split("/").pop();
          const LfileName = response.lfImage.split("/").pop();
          const HfileName = response.helminthsImage.split("/").pop();

          const OPath = FileSystem.documentDirectory + OfileName;
          const SPath = FileSystem.documentDirectory + SfileName;
          const LfPath = FileSystem.documentDirectory + LfileName;
          const HPath = FileSystem.documentDirectory + HfileName;

          await FileSystem.copyAsync({ from: response.onchoImage, to: OPath });
          await FileSystem.copyAsync({
            from: response.schistoImage,
            to: SPath,
          });
          await FileSystem.copyAsync({ from: response.lfImage, to: LfPath });
          await FileSystem.copyAsync({
            from: response.helminthsImage,
            to: HPath,
          });

          //store data with image uri in database
          const dbResult = await insertTests(
            response.name,
            response.sex,
            response.age,
            response.location,
            OPath,
            SPath,
            LfPath,
            HPath
          );

          if (dbResult) {
            setSubmitting(false);

            setOnchoImage();
            setHelminthsImage();
            setLfImage();
            setSchistoImage();
            return alert("Data saved offline.");
          }
          //  setSql(response);
          // setIsLoaded(true);
          //  resetForm();
          // setUploadVisible(false);

          saveDbData();
          if (!response.ok) {
            // setUploadVisible(false);
            return alert("could not save test");
          }
        } catch (error) {
          console.log(error);
        }
      }

      // For illustration purposes, simulate an asynchronous upload with a delay
      //await new Promise(resolve => setTimeout(resolve, 1000));

      // After successful upload, reset the form and clear selected image
    } catch (error) {
      setMessage("Login failed:" + error.message);
      setSubmitting(false);
    }
  };
  return (
    <Screen>
      <OfflineNotice />
      <RegularText style={{ marginTop: 30, marginBottom: 10 }}>
        Create New Entry
      </RegularText>
      {/* <KeyboardAvoidingContainer> */}
      <ScrollView>
        <Formik
          initialValues={{
            name: "",
            age: "",
            location: "",
            gender: "",
            onchoImage: onchoImage,
            schistoImage: schistoImage,
            lfImage: lfImage,
            helminthsImage: helminthsImage,
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (
              values.name == "" ||
              values.age == "" ||
              values.location == "" ||
              values.gender == ""
            ) {
              setMessage("Please fill all fields");
              setSubmitting(false);
            } else {
              values.onchoImage = onchoImage;
              values.schistoImage = schistoImage;
              values.lfImage = lfImage;
              values.helminthsImage = helminthsImage;
              handleUpload(values, setSubmitting);
              resetForm();
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
              {/* <TestImagePicker name="onchoImage"/>
             
           <Image style={{width:150,height:150, borderWidth:2, borderColor:"#000"}}  src=""/> */}
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RegularText style={{ fontWeight: "bold", fontSize: 20 }}>
                  Oncho
                </RegularText>

                <View style={{ flexDirection: "row" }}>
                  {onchoImage ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={40}
                      color={colors.success}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => onCameraButtonPress("onchoImage")}
                    >
                      <MaterialCommunityIcons
                        name="camera-outline"
                        size={40}
                        color="#00f"
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => setOnchoImage()}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={40}
                      color={colors.fail}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RegularText style={{ fontWeight: "bold", fontSize: 20 }}>
                  Schisto
                </RegularText>

                <View style={{ flexDirection: "row" }}>
                  {schistoImage ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={40}
                      color={colors.success}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => onCameraButtonPress("schistoImage")}
                    >
                      <MaterialCommunityIcons
                        name="camera-outline"
                        size={40}
                        color="#00f"
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => setSchistoImage()}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={40}
                      color={colors.fail}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RegularText style={{ fontWeight: "bold", fontSize: 20 }}>
                  LF
                </RegularText>

                <View style={{ flexDirection: "row" }}>
                  {lfImage ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={40}
                      color={colors.success}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => onCameraButtonPress("lfImage")}
                    >
                      <MaterialCommunityIcons
                        name="camera-outline"
                        size={40}
                        color="#00f"
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => setLfImage()}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={40}
                      color={colors.fail}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RegularText style={{ fontWeight: "bold", fontSize: 20 }}>
                  STH
                </RegularText>

                <View style={{ flexDirection: "row" }}>
                  {helminthsImage ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={40}
                      color={colors.success}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => onCameraButtonPress("helminthsImage")}
                    >
                      <MaterialCommunityIcons
                        name="camera-outline"
                        size={40}
                        color="#00f"
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => setHelminthsImage()}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={40}
                      color={colors.fail}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <MsgBox style={{ marginBottom: 10 }} success={isSuccessMessage}>
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
        {/* </KeyboardAvoidingContainer> */}
      </ScrollView>
    </Screen>
  );
};

export default NewTestScreen;

const styles = StyleSheet.create({});

{
  /* <RegularModal
toggle={isModalVisible}
close={() => {
  setModalVisible(!isModalVisible);
}}
/> */
}
