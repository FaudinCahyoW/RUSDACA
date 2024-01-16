import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.post("https://56f3-103-175-230-46.ngrok-free.app/auth/login", {
        email,
        password,
      });

      // Handle successful login (e.g., store token, navigate to home screen)
      console.log("Login successful:", response.data);
      
      navigation.navigate("Home");
      Alert.alert("Berhasil login")
    } catch (error) {
      console.error("Login error:", error);
      setError("Email atau password salah"); // Display user-friendly error message
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.logocontain}>
    <Image source={require("../../assets/Logo.png")} style={styles.logo}/>
    </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Text style={styles.lupaText}>Lupa Password</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.regisText}
        onPress={() => navigation.navigate("Register")}
      >
        Belum punya akun? Silahkan klik disini
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    padding:12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin:7
  },
  button: {
    backgroundColor: "#A6CE39",
    height: 40,
    borderRadius: 5,
    margin:7

  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color:"white",
    textAlign:"center",
    padding:7,
  },
  lupaText: {
    fontSize: 12,
    fontWeight: "bold",
    color:"blue",
    textAlign:"right",
    paddingEnd:9,
    textDecorationLine: "underline"
  },
  regisText:{
    fontSize: 14,
    color: "blue", 
    textDecorationLine: "underline",
    paddingEnd:9,
    paddingTop:5,
    textAlign:"right",
  },
  logocontain:{
    justifyContent:"center",
    alignItems:"center"
  }
});

export default LoginForm;
