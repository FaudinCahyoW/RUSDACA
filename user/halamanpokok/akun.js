import { View, Text, Image, StyleSheet,  } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const Akun = () => {
  const [noKK, setNoKK] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telp, setTelp] = useState("");

  useEffect(() => {
    akun();
  }, []);

  const akun = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      if (token) {
        const res = await axios.get(
          "https://eb0c3df2296c.ngrok-free.app/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const pengguna = res.data.user;
        setRt(pengguna.rt);
        setRw(pengguna.rw);
        setNoKK(pengguna.nik);
        setNama(pengguna.nama_lengkap);
        setEmail(pengguna.email);
        setAlamat(pengguna.alamat_rumah);
        setTelp(pengguna.nomor_telepon);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header bulat */}
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/person.png")}
        />
        <Text style={styles.nama}>{nama}</Text>
      </View>

      {/* Detail data */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem} >
          <Ionicons name="mail-outline" size={24} color="rgba(159, 150, 150, 1)" />
          <Text style={styles.detailValue}>{email}</Text>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: "#dfe0dbff",
            marginVertical: 10,
          }}
        />

        <View style={styles.detailItem}>
          <Ionicons name="call-outline" size={24} color="rgba(159, 150, 150, 1)"/>
          <Text style={styles.detailValue}>{telp}</Text>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: "#dfe0dbff",
            marginVertical: 10,
          }}
        />

        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={24} color="rgba(159, 150, 150, 1)"/>
          <Text style={styles.detailValue}>
            {alamat} RT {rt}/RW {rw}
          </Text>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: "#dfe0dbff",
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#A6CE39", // warna header
    borderBottomLeftRadius: 40, // rounded kiri bawah
    borderBottomRightRadius: 40,
    alignItems: "center",
    paddingVertical: 30,
    marginBottom: 20,
    elevation: 5, // efek shadow android
    shadowColor: "#000", // efek shadow iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  nama: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  detailsContainer: {
    paddingHorizontal: 30,
  },
  detailItem: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems:"center", 
    marginTop:40

  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  detailValue: {
    color: "#555",

    fontSize: 20,
    flexShrink:1,
    marginLeft:10,
  },
});

export default Akun;
