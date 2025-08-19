<<<<<<< HEAD
import { Text, TextInput, SafeAreaView, ScrollView, Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const InputData = () => {
  const navigation = useNavigation();

  const [noKK, setNoKK] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [nama, setNama] = useState("");
  const [toilet, setToilet] = useState("");
  const [kamarMandi, setKamarMandi] = useState("");
  const [jenisLantai, setJenisLantai] = useState("");
  const [rngka_dinding, setRngkaDinding] = useState("");
  const [luas_rumah, setLuasRumah] = useState("");
  const [jml_penghuni, setJmlPenghuni] = useState("");
  const [notifikasi, setNotifikasi] = useState("");
  const [isEditing, setIsEditing] = useState(false)
  const [dataId, setDataId] = useState(null)

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      if (token) {
        const res = await axios.get('https://9e1e-103-162-112-254.ngrok-free.app/auth/me', {  
          headers: { 
            'Authorization': `Bearer ${token}`
          }
        });
        const pengguna = res.data.user;
        setNoKK(pengguna.nik);
        setRt(pengguna.rt);
        setRw(pengguna.rw);
        setNama(pengguna.nama_lengkap);

        try {
          const dataResponse = await axios.get(`https://9e1e-103-162-112-254.ngrok-free.app/data/ambildata/${pengguna.nik}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (dataResponse.data.data) {
            Alert.alert(
              'Data Sudah Ada',
              'Anda sudah memiliki data. Apakah anda ingin mengubahnya?',
              [
                {
                  text: 'Tidak',
                  onPress: () => navigation.navigate('MainContainer'),
                  style: 'cancel'
                },
                {
                  text: 'Iya',
                  onPress: () => {
                    setIsEditing(true);
                    setDataId(pengguna.nik);
                    fetchData(pengguna.nik);
                  }
                }
              ],
              { cancelable: false }
            );
          }
        } catch (dataError) {
          if (dataError.response?.status === 404) {
            // Data tidak ditemukan, pengguna baru
            console.log('Pengguna baru, belum ada data yang disimpan.');
          } else {
            console.error('Error fetching user data:', dataError);
            Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
          }
        }
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.error('Unauthorized: Token invalid atau expired.');
        Alert.alert('Token tidak valid atau kadaluarsa', 'Silahkan login kembali.');
        navigation.replace('Login');
      } else {
        console.error('Error fetching user data:', error);
        Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
      }
    } 
  };


  const fetchData = async (id) => {
    try {
      const res = await axios.get(`https://9e1e-103-162-112-254.ngrok-free.app/data/ambildata/${id}`, {  // Perbarui URL jika perlu
        headers: {
          'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
        }
      });
      const dataRumahSehat = res.data.data;
      fillForm(dataRumahSehat);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
    }
  };

  const fillForm = (data) => {
    noKK
    rt
    rw
    nama
    setLuasRumah(data.luas_rumah || '');
    setJmlPenghuni(data.jml_penghuni || '');
    setToilet(data.sdia_toilet || '');
    setKamarMandi(data.jenis_kmrMandi || '');
    setRngkaDinding(data.rngka_dinding || '');
    setJenisLantai(data.jns_lantai || '');
    setNotifikasi(data.status || '');
  };

  const onSubmit = async () => {
    const token = await AsyncStorage.getItem('token');

    const endpoint = isEditing ? 
      `https://9e1e-103-162-112-254.ngrok-free.app/data/editdata/${dataId}` :  // Perbarui URL jika perlu
      "https://9e1e-103-162-112-254.ngrok-free.app/data/tambahdata";  // Perbarui URL jika perlu
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await axios({
        method,
        url: endpoint,
        data: {
          nama_lengkap: nama, 
          nik: noKK,
          rt: rt,
          rw: rw,
          luas_rumah: luas_rumah,
          jml_penghuni: jml_penghuni,
          sdia_toilet: toilet, 
          jenis_kmrMandi: kamarMandi, 
          rngka_dinding,
          jns_lantai: jenisLantai,
          status: notifikasi
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigation.navigate("MainContainer");
      const apiNotification = response.data.notifikasi || "Data berhasil disimpan";
      setNotifikasi(apiNotification);
      const alertMessage = isEditing ? "Data berhasil diperbarui" : "Data berhasil disimpan"
      Alert.alert(alertMessage, apiNotification);
    } catch (error) {
      console.error(error);
      Alert.alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.textInput}>Nomor Induk Keluarga</Text>
      <TextInput
        style={styles.input}
        placeholder="Nomor Induk Keluarga"
        value={noKK}
        onChangeText={setNoKK}
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

      <Text style={styles.textInput}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
      />

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
          <RadioButton.Group onValueChange={setRngkaDinding} value={rngka_dinding}>
            <RadioButton.Item label="Beton" value="beton" style={styles.radioButton} />
            <RadioButton.Item label="Lainnya" value="lainnya" style={styles.radioButton} />
          </RadioButton.Group>
        </SafeAreaView>
      </View>

      <Text style={styles.textInput}>Luas Rumah</Text>
      <TextInput
        style={styles.input}
        placeholder="Luas Rumah (m²)"
        keyboardType="number-pad"
        value={luas_rumah}
        onChangeText={setLuasRumah}
      />

      <Text style={styles.textInput}>Jumlah Penghuni</Text>
      <TextInput
        style={styles.input}
        placeholder="Jumlah Penghuni"
        keyboardType="number-pad"
        value={jml_penghuni}
        onChangeText={setJmlPenghuni}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Simpan Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal:10
  },
  textInput:{
    fontSize:15,
    marginBottom:5,
    marginTop:5,
    width:'100%',
    paddingHorizontal:10,

  },
  textRadio:{
    // paddingLeft:6
    fontSize:15,
    paddingHorizontal:10

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    paddingHorizontal:10,
    marginLeft:10,
    marginRight:10
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
    width:150,
    marginBottom:0
  },
  radioContainer:{
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
    marginLeft:10,
    marginRight:10

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
    paddingHorizontal:10,
    marginLeft:10,
  },

})




=======
import { Text, TextInput, SafeAreaView, ScrollView, Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

const InputData = () => {
  const navigation = useNavigation();
  const [rand, setRand] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [nama, setNama] = useState("");
  const [toilet, setToilet] = useState("");
  const [kamarMandi, setKamarMandi] = useState("");
  const [jenisLantai, setJenisLantai] = useState("");
  const [rngkaDinding, setRngkaDinding] = useState("");
  const [ventilasi, setVentilasi] = useState("")
  const [air, setAir] = useState("")
  const [dapur, setDapur] = useState("")
  const [cahaya, setCahaya] = useState("")
  const [sumber, setSumber] = useState("")
  const [notifikasi, setNotifikasi] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [dataId, setDataId] = useState(null);

  const onSubmit = async () => {
  // Ambil token dari AsyncStorage
  const token = await AsyncStorage.getItem('token');
  
  try {
    const response = await axios.post(
      "https://api.rusdaca.com/data/tambahdata",
      {
        nama_lengkap: nama,
        rand: rand,
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
    
    // Notifikasi berhasil
    const apiNotification = response.data.notifikasi || "Data berhasil disimpan";
    Alert.alert("Data berhasil disimpan", apiNotification);
    
    // Navigasi setelah berhasil
    navigation.navigate("MainContainer");
  } catch (error) {
    // Tangani kesalahan
    console.error(error);
    Alert.alert("Terjadi kesalahan. Silakan coba lagi.");
  }
};

  // const [luasRumah, setLuasRumah] = useState("");
  // const [jmlPenghuni, setJmlPenghuni] = useState("");

  // useEffect(() => {
  //   // userData();
  //   fetchData()
  // }, []);

  // const userData = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   try {
  //     if (token) {
  //       const res = await axios.get('https://api.rusdaca.com/auth/me', {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });
  //       const pengguna = res.data.user;
  //       setRt(pengguna.rt);
  //       setRw(pengguna.rw);
  //       setNama(pengguna.nama_lengkap);
  //       setRand(pengguna.rand)

  //       const dataResponse = await axios.get(`https://api.rusdaca.com/data/ambildata/${pengguna.rand}`, {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });

  //       if (dataResponse.data.data) {
  //         Alert.alert(
  //           'Data Sudah Ada',
  //           'Anda sudah memiliki data. Apakah anda ingin mengubahnya?',
  //           [
  //             {
  //               text: 'Tidak',
  //               onPress: () => navigation.navigate('MainContainer'),
  //               style: 'cancel'
  //             },
  //             {
  //               text: 'Iya',
  //               onPress: () => {
  //                 setIsEditing(true);
  //                 setDataId(pengguna.rand);
  //                 fetchData(pengguna.rand);
  //               }
  //             }
  //           ],
  //           { cancelable: false }
  //         );
  //       } else {
  //         console.log('Data tidak ada');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  // const fetchData = async (id) => {
  //   try {
  //     const res = await axios.get(`https://api.rusdaca.com/data/ambildata/${id}`, {
  //       headers: {
  //         'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
  //       }
  //     });
  //     const dataRumahSehat = res.data.data;
  //     fillForm(dataRumahSehat);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
  //   }
  // };

  // const fillForm = (data) => {
  //   setLuasRumah(data.luas_rumah || '');
  //   setJmlPenghuni(data.jml_penghuni || '');
  //   setToilet(data.sdia_toilet || '');
  //   setKamarMandi(data.jenis_kmrMandi || '');
  //   setRngkaDinding(data.rngka_dinding || '');
  //   setJenisLantai(data.jns_lantai || '');
  //   setVentilasi(data.ventilasi || '')
  //   setAir
  //   setNotifikasi(data.status || '');
  // };

  // const onSubmit = async () => {
  //   // const token = await AsyncStorage.getItem('token');

  //   const endpoint = isEditing ?
  //     `https://api.rusdaca.com/data/editdata/${dataId}` :
  //     "https://api.rusdaca.com/data/tambahdata";
  //   const method = isEditing ? 'PUT' : 'POST';

  //   try {
  //     const response = await axios({
  //       // method,
  //       // url: endpoint,
  //       data: {
  //         nama_lengkap: nama,
  //         rand: rand,
  //         rt: rt,
  //         rw: rw,
  //         sdia_toilet: toilet,
  //         jenis_kmrMandi: kamarMandi,
  //         rngka_dinding: rngkaDinding,
  //         jns_lantai: jenisLantai,
  //         ventilasi : ventilasi,
  //         pmbuangan_air : air,
  //         sdia_dapur: dapur,
  //         pencahayaan: cahaya,
  //         smber_air: sumber,
  //         status: notifikasi
  //         // luas_rumah: luasRumah,
  //         // jml_penghuni: jmlPenghuni,
  //       },
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     navigation.navigate("MainContainer");
  //     const apiNotification = response.data.notifikasi || "Data berhasil disimpan";
  //     Alert.alert(isEditing ? "Data berhasil diperbarui" : "Data berhasil disimpan", apiNotification);
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert("Terjadi kesalahan. Silakan coba lagi.");
  //   }
  // };

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

export default InputData;

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
<<<<<<< HEAD

})




>>>>>>> 8052cfa (Initial commit)
=======
});
>>>>>>> a231bc7 (update project expo web build script)
