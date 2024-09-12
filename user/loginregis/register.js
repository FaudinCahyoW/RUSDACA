<<<<<<< HEAD
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
  Dimensions,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
  },
  logoContain:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  input: {
    height: 40,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 7,
  },
  inputLarge:{
    height:80
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

  rukun:{
    flexDirection: "row",
    display:"flex",
  }
,
  inputrukun:{
    height: 40,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 7,
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
  },
});

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [nama_lengkap, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [rw, setRw] = useState("")
  const [rt, setRt] = useState("")
  const [password, setPassword] = useState("");
  const [nomor_telepon, setTelp] = useState("");
  const [alamat_rumah, setAlamat] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);


  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://9e1e-103-162-112-254.ngrok-free.app/auth/register",
        {
          email,
          nama_lengkap,
          nik,
          rt,
          rw,
          password,
          nomor_telepon,
          alamat_rumah,
        }
      );
      
      const {token} = response.data
      await AsyncStorage.setItem('token', token)
      navigation.navigate("MainContainer");
      Alert.alert("Pendaftaran berhasil")

    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Pendaftaran gagal', 'Email sudah digunakan.');
      } else {
        console.error(error);
        Alert.alert('Pendaftaran gagal', 'Terjadi kesalahan. Silakan coba lagi.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={true}>
      <View style={styles.logocontain}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <TextInput
        style={[styles.input, width > height ? {width:"50%"}:null]}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nama Lengkap"
        onChangeText={(e) => setNama(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nomor Telepon"
        keyboardType="numeric"
        onChangeText={(e) => setTelp(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Alamat Rumah"
        multiline={true}
        onChangeText={(e) => setAlamat(e)}
      />

      <View style={styles.rukun}>        
        <TextInput
          style={[styles.inputrukun, width > height ? { width: "25%" } : null]}
          placeholder="RT"
          multiline={true}
          onChangeText={(e) => setRt(e)}
        />
        <TextInput
          style={[styles.inputrukun, width > height ? { width: "25%" } : null]}
          placeholder="RW"
          multiline={true}
          onChangeText={(e) => setRw(e)}
        />
      </View>

      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nomor Induk Keluarga"
        maxLength={16}
        keyboardType="numeric"
        onChangeText={(e) => setNik(e)}
      />
      <View style={{ position: 'relative' }}>
        <TextInput
          style={[styles.input, width > height ? { width: "50%" } : null]}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Ionicons name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, width > height ? { width: "50%" } : null]} onPress={onSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
=======
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
  Dimensions,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
  },
  logoContain:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  input: {
    height: 40,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 7,
  },
  inputLarge:{
    height:80
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

  rukun:{
    flexDirection: "row",
    display:"flex",
  }
,
  inputrukun:{
    height: 40,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 7,
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
  },
});

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [nama_lengkap, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [rw, setRw] = useState("")
  const [rt, setRt] = useState("")
  const [password, setPassword] = useState("");
  const [nomor_telepon, setTelp] = useState("");
  const [alamat_rumah, setAlamat] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);


  const onSubmit = async () => {
    try {
      const response = await axios.post(
        " http://api.rusdaca.com/auth/register",
        {
          email,
          nama_lengkap,
          nik,
          rt,
          rw,
          password,
          nomor_telepon,
          alamat_rumah,
        }
      );
      
      const {token} = response.data
      await AsyncStorage.setItem('token', token)
      navigation.navigate("MainContainer");
      Alert.alert("Pendaftaran berhasil")

    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Pendaftaran gagal', 'Email sudah digunakan.');
      } else {
        console.error(error);
        Alert.alert('Pendaftaran gagal', 'Terjadi kesalahan. Silakan coba lagi.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={true}>
      <View style={styles.logocontain}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <TextInput
        style={[styles.input, width > height ? {width:"50%"}:null]}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nama Lengkap"
        onChangeText={(e) => setNama(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nomor Telepon"
        keyboardType="numeric"
        onChangeText={(e) => setTelp(e)}
      />
      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Alamat Rumah"
        multiline={true}
        onChangeText={(e) => setAlamat(e)}
      />

      <View style={styles.rukun}>        
        <TextInput
          style={[styles.inputrukun, width > height ? { width: "25%" } : null]}
          placeholder="RT"
          multiline={true}
          onChangeText={(e) => setRt(e)}
        />
        <TextInput
          style={[styles.inputrukun, width > height ? { width: "25%" } : null]}
          placeholder="RW"
          multiline={true}
          onChangeText={(e) => setRw(e)}
        />
      </View>

      <TextInput
        style={[styles.input, width > height ? { width: "50%" } : null]}
        placeholder="Nomor Induk Keluarga"
        maxLength={16}
        keyboardType="numeric"
        onChangeText={(e) => setNik(e)}
      />
      <View style={{ position: 'relative' }}>
        <TextInput
          style={[styles.input, width > height ? { width: "50%" } : null]}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Ionicons name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, width > height ? { width: "50%" } : null]} onPress={onSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
>>>>>>> 8052cfa (Initial commit)
