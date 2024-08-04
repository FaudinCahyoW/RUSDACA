import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState, } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Akun = () => {
  const [noKK, setNoKK] = useState("");
  const [rt, setRt] = useState("")
  const [rw, setRw] = useState("")
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("")
  const [alamat, setAlamat] = useState("")
  const [telp, setTelp] = useState("")
  useEffect(()=>{
    akun()
  },[])

  const akun = async () =>{
    const token = await AsyncStorage.getItem('token');
    try{
      if(token){

        const res = await axios.get('https://9e1e-103-162-112-254.ngrok-free.app/auth/me', {
          headers: { 
            'Authorization': `Bearer ${token}`
          },        
        })
          const pengguna = res.data.user
          setRt(pengguna.rt)
          setRw(pengguna.rw)
          setNoKK(pengguna.nik)
          setNama(pengguna.nama_lengkap)
          setEmail(pengguna.email)
          setAlamat(pengguna.alamat_rumah)
          setTelp(pengguna.nomor_telepon)
      }

    }catch (error) {
      if (error.response?.status === 401) {
        console.error('Unauthorized: Token invalid or expired.');
        Alert.alert('Token tidak valid atau kadaluarsa', 'Silahkan login kembali.');
        navigation.replace('Login');
      } else {
        console.error('Error fetching user data:', error);
        Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
      }
    }     
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/person.png")}
      />
      <Text style={styles.nama}>{nama}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text>NIK:</Text>
          <Text style={styles.detailValue}>{noKK}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text>Email:</Text>
          <Text style={styles.detailValue}>{email}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text>No Telp:</Text>
          <Text style={styles.detailValue}>{telp}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text>alamat:</Text>
          <Text style={styles.detailValue}>    {alamat} Rt {rt}/Rw {rw}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Added background color
    alignItems: "center",
    padding: 30, // Increased padding
  },
  image: {
    height: 180, // Larger image
    width: 180,
    borderRadius: 100,
    marginBottom: 10, // Increased margin
    borderWidth: 2, // Added border
    borderColor: "#FFFFFF", // White border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  nama: {
    fontSize: 30, // Larger name text
    fontWeight: "bold",
    marginBottom:20,
    color: "#3B3B3B", // Adjusted color
  },
  detailsContainer: {
    marginLeft:45,
    textAlign:"center"
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  detailValue: {
    fontSize: 16,
    color: "black",
    alignSelf:"center"
  },
});

export default Akun;