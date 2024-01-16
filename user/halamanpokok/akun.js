import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Akun = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/person.png")}
      />
      <Text style={styles.nama}>User</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>1234567890123456</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>user@gmail.com</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>Jl. Sukses Selamat Sampai Tujuan RT01/RW05</Text>
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
    marginBottom: 30, // Increased margin
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
    marginBottom: 20, // Increased margin
    color: "#3B3B3B", // Adjusted color
  },
  detailsContainer: {
    marginTop: 25,
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