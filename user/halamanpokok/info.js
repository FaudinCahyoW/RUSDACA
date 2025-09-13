import * as React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const Info = () => {
  return (
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Panduan penggunaan aplikasi RUSDACA</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Selamat datang di Aplikasi Pencatatan Rumah Sehat! Aplikasi ini
          dirancang untuk membantu Anda mencatat dan melihat kondisi rumah Anda.
          Berikut adalah panduan penggunaan aplikasi:
        </Text>

        <Text style={styles.subtitle}>1. Pencatatan Data Rumah:</Text>
        <Text style={styles.text}>Langkah 1: Buka aplikasi.</Text>
        <Text style={styles.text}>
          Langkah 2: Anda akan langsung diarahkan ke halaman utama aplikasi.
          Di halaman ini, Anda dapat melihat formulir "Masukkan Data Rumah".
        </Text>
        <Text style={styles.text}>
          Langkah 3: Isi formulir dengan data rumah Anda. Tuliskan informasi
          atau kondisi yang ingin Anda catat dan klik tombol "Catat".
        </Text>
        <Text style={styles.text}>
          Langkah 4: Data rumah yang baru saja Anda masukkan akan muncul di
          bawahnya dalam daftar "Daftar Kondisi Rumah".
        </Text>

        <Text style={styles.subtitle}>2. Melihat Kondisi Rumah:</Text>
        <Text style={styles.text}>
          Langkah 1: Setelah mencatat beberapa data, Anda dapat melihat daftar
          kondisi rumah pada bagian "Daftar Kondisi Rumah".
        </Text>
        <Text style={styles.text}>
           Langkah 2: Daftar tersebut akan menampilkan No KK, nama, dan status
           rumah.
        </Text>

        <Text style={styles.subtitle}>3. Catatan Tambahan:</Text>
        <Text style={styles.text}>
          Aplikasi ini hanya bersifat demonstratif dan data yang Anda masukkan
          tidak akan disimpan setelah server dimatikan.
        </Text>
        <Text style={styles.text}>
          Anda dapat memperoleh fungsionalitas aplikasi ini dengan menambahkan
          fitur-fitur seperti autentikasi pengguna, penyimpanan data lebih
          permanen, atau tampilan yang lebih terstruktur sesuai kebutuhan Anda.
        </Text>
        <Text style={styles.text}>
          Jika ada pertanyaan atau masalah teknis, jangan ragu untuk
          menghubungi tim dukungan.
        </Text>

        <Text style={[styles.text, { marginTop: 10 }]}>
          Selamat menggunakan Aplikasi Pencatatan Rumah Sehat! Semoga aplikasi
          ini bermanfaat untuk menjaga dan memantau kondisi rumah Anda.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container:{
    padding:16,
    backgroundColor:"#fff"
  },
  card:{
    backgroundColor:'#f5f5f5',
    padding:16,
    borderRadius:8,
    elevation:2
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:12,
    textAlign:"center"
  },
  subtitle:{
    fontSize:16,
    fontWeight:"bold",
    marginTop:12,
    marginBottom:4,
  },
  text:{
    fontSize:14,
    marginBottom:6,
    lineHeight:20,
    marginLeft:20
  }
});
export default Info;
