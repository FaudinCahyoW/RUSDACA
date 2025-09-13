import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';
import {  Button } from "antd"; 

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation()
  
  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://84a67d6d7383.ngrok-free.app/auth/login", {
        email,
        password,
      });
      
      const {token} = response.data
      await AsyncStorage.setItem('token', token)
      navigate("/dashboard")
      Alert.alert("Berhasil login")

    } catch (error) {
      console.error("Login error:", error);
      setError("Email atau password salah"); 
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
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
      
      <View style={{ position: 'relative' }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Ionicons name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Button
        type="primary"
        className="login-button"
        onclick={onSubmit}
        loading = {loading}
        block
      >
        {loading ? "Mohon Tunggu..." : "Login"}
      </Button>
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
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
  },
});

export default LoginForm;
