import { Text, TextInput, SafeAreaView, ScrollView, Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute
import { RadioButton } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditData = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the route object
  const { rand } = route.params; // Get rand from route params
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [nama, setNama] = useState("");
  const [toilet, setToilet] = useState("");
  const [kamarMandi, setKamarMandi] = useState("");
  const [jenisLantai, setJenisLantai] = useState("");
  const [rngkaDinding, setRngkaDinding] = useState("");
  const [ventilasi, setVentilasi] = useState("");
  const [air, setAir] = useState("");
  const [dapur, setDapur] = useState("");
  const [cahaya, setCahaya] = useState("");
  const [sumber, setSumber] = useState("");
  const [notifikasi, setNotifikasi] = useState("");

  // Fetch existing data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await axios.get(`https://api.rusdaca.com/data/ambildata/${rand}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = response.data.data; // Adjust based on your API response
        // Populate the state with the fetched data
        setNama(data.nama_lengkap);
        setRt(data.rt);
        setRw(data.rw);
        setToilet(data.sdia_toilet);
        setKamarMandi(data.jenis_kmrMandi);
        setJenisLantai(data.jns_lantai);
        setRngkaDinding(data.rngka_dinding);
        setVentilasi(data.ventilasi);
        setAir(data.pmbuangan_air);
        setDapur(data.sdia_dapur);
        setCahaya(data.pencahayaan);
        setSumber(data.smber_air);
      } catch (error) {
        console.error(error);
        Alert.alert("Terjadi kesalahan saat mengambil data.");
      }
    };

    fetchData();
  }, [rand]); // Depend on rand

  const onSubmit = async () => {
    const token = await AsyncStorage.getItem('token');
    
    try {
      const response = await axios.put(
        `https://api.rusdaca.com/data/editdata/${rand}`, // Use the rand in the URL
        {
          nama_lengkap: nama,
          rt: rt,
          rw: rw,
          sdia_toilet: toilet,
          jenis_kmrMandi: kamarMandi,
          rngka_dinding: rngkaDinding,
          jns_lantai: jenisLantai,
          ventilasi: ventilasi,
          pmbuangan_air: air,
          sdia_dapur: dapur,
          pencahayaan: cahaya,
          smber_air: sumber,
          status: notifikasi
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      const apiNotification = response.data.notifikasi || "Data berhasil diperbarui";
      Alert.alert("Data berhasil diperbarui", apiNotification);
      
      navigation.navigate("MainContainer");
    } catch (error) {
      console.error(error);
      Alert.alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

      <Text style={styles.textInput}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
      />
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>RT</Text>
          <TextInput
            style={styles.smallInput}
            placeholder="RT"
            value={rt}
            onChangeText={setRt}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>RW</Text>
          <TextInput
            style={styles.smallInput}
            placeholder="RW"
            value={rw}
            onChangeText={setRw}
          />
        </View>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Ketersediaan Toilet</Text>
          <RadioButton.Group onValueChange={setToilet} value={toilet}>
            <RadioButton.Item label="Ada" value="ada" style={styles.radioButton} />
            <RadioButton.Item label="Tidak Ada" value="tidak_ada" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Jenis Kamar Mandi</Text>
          <RadioButton.Group onValueChange={setKamarMandi} value={kamarMandi}>
            <RadioButton.Item label="Pribadi" value="pribadi" style={styles.radioButton} />
            <RadioButton.Item label="Umum" value="umum" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Jenis Lantai</Text>
          <RadioButton.Group onValueChange={setJenisLantai} value={jenisLantai}>
            <RadioButton.Item label="Keramik" value="keramik" style={styles.radioButton} />
            <RadioButton.Item label="Marmer" value="marmer" style={styles.radioButton} />
            <RadioButton.Item label="Lainnya" value="lainnya" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Jenis Rangka Dinding</Text>
          <RadioButton.Group onValueChange={setRngkaDinding} value={rngkaDinding}>
            <RadioButton.Item label="Beton" value="beton" style={styles.radioButton} />
            <RadioButton.Item label="Lainnya" value="lainnya" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>
      {/* 
      <Text style={styles.textInput}>Luas Rumah (m²)</Text>
      <TextInput
        style={styles.input}
        placeholder="Luas Rumah (m²)"
        keyboardType="number-pad"
        value={luasRumah}
        onChangeText={setLuasRumah}
      />

      <Text style={styles.textInput}>Jumlah Penghuni</Text>
      <TextInput
        style={styles.input}
        placeholder="Jumlah Penghuni"
        keyboardType="number-pad"

        value={jmlPenghuni}
        onChangeText={setJmlPenghuni}
      />
*/}

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Jumlah Ventilasi</Text>
          <RadioButton.Group onValueChange={setVentilasi} value={ventilasi}>
            <RadioButton.Item label="Cukup" value="cukup" style={styles.radioButton} />
            <RadioButton.Item label="Tidak Cukup" value="tidak cukup" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Ketersediaan Pembuangan Air</Text>
          <RadioButton.Group onValueChange={setAir} value={air}>
            <RadioButton.Item label="Ada" value="ada" style={styles.radioButton} />
            <RadioButton.Item label="Tidak Ada" value="tidak ada" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Ketersediaan Dapur</Text>
          <RadioButton.Group onValueChange={setDapur} value={dapur}>
            <RadioButton.Item label="Ada" value="ada" style={styles.radioButton} />
            <RadioButton.Item label="Tidak Ada" value="tidak ada" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Jumlah Cahaya</Text>
          <RadioButton.Group onValueChange={setCahaya} value={cahaya}>
            <RadioButton.Item label="Cukup" value="cukup" style={styles.radioButton} />
            <RadioButton.Item label="Tidak Cukup" value="tidak cukup" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <View style={styles.radioContainer}>
        <SafeAreaView style={styles.radioButtonContainer}>
          <Text style={styles.textRadio}>Sumber Air</Text>
          <RadioButton.Group onValueChange={setSumber} value={sumber}>
            <RadioButton.Item label="PAM" value="PAM" style={styles.radioButton} />
            <RadioButton.Item label="Sungai" value="sungai" style={styles.radioButton} />
            <RadioButton.Item label="Sumur" value="sumur" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Simpan Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 10,
  },
  textRadio: {
    fontSize: 15,
    paddingHorizontal: 10,
    width: 300
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
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
  radioButtonContainer: {
    width: 150,
    marginBottom: 0,
  },
  radioContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  smallInput: {
    height: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});
