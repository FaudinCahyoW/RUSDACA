import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useForm } from "react-hook-form";

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 7,
  },
  button: {
    backgroundColor: "#A6CE39",
    height: 40,
    borderRadius: 5,
    margin: 7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 7,
  },
  logocontain: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [nama_lengkap, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [nomor_telepon, setTelp] = useState("");
  const [alamat_rumah, setAlamat] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        " https://81f5-103-105-55-176.ngrok-free.app/auth/register",
        {
          email,
          nama_lengkap,
          nik,
          password,
          nomor_telepon,
          alamat_rumah,
        }
      );
      navigation.navigate("Home");
      Alert.alert("Pendaftaran berhasil")
    } catch (error) {
      console.error(error);
      alert("Pendaftaran gagal. Silakan coba lagi.");
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.logocontain}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        onChangeText={(e) => setNama(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        keyboardType="numeric"
        onChangeText={(e) => setTelp(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat Rumah"
        multiline={true}
        onChangeText={(e) => setAlamat(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Induk Keluarga"
        maxLength={16}
        keyboardType="numeric"
        onChangeText={(e) => setNik(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Register;
