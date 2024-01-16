import React, { useState, useEffect } from "react";
import { TextInput, RadioButton, View, ScrollView } from "react-native";

const Entry = () => {
  const [noKK, setNoKK] = useState("");
  const [nama, setNama] = useState("");
  const [toilet, setToilet] = useState("");
  const [ventilasi, setVentilasi] = useState("");
  const [kamarMandi, setKamarMandi] = useState("");
  const [jenisLantai, setJenisLantai] = useState("");


  const handleNoKKChange = (text) => {
    setNoKK(text);
  };

  const handleNamaChange = (text) => {
    setNama(text);
  };

  const handleToiletChange = (value) => {
    setToilet(value);
  };

  const handleVentilasiChange = (value) => {
    setVentilasi(value);
  };

  const handleKamarMandiChange = (value) => {
    setKamarMandi(value);
  };

  const handleJenisLantaiChange = (value) => {
    setJenisLantai(value);
  };

  return (
    <View>
      <ScrollView>
        <TextInput
          placeholder="No KK"
          value={noKK}
          onChangeText={handleNoKKChange}
        />
        <TextInput
          placeholder="Nama"
          value={nama}
          onChangeText={handleNamaChange}
        />
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            value="Ada"
            checked={toilet === "Ada"}
            onChange={handleToiletChange}
          />
          <Text>Ada</Text>
          <RadioButton
            value="Tidak Ada"
            checked={toilet === "Tidak Ada"}
            onChange={handleToiletChange}
          />
          <Text>Tidak Ada</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            value="Ada"
            checked={ventilasi === "Ada"}
            onChange={handleVentilasiChange}
          />
          <Text>Ada</Text>
          <RadioButton
            value="Tidak Ada"
            checked={ventilasi === "Tidak Ada"}
            onChange={handleVentilasiChange}
          />
          <Text>Tidak Ada</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            value="Ada"
            checked={kamarMandi === "Ada"}
            onChange={handleKamarMandiChange}
          />
          <Text>Ada</Text>
          <RadioButton
            value="Tidak Ada"
            checked={kamarMandi === "Tidak Ada"}
            onChange={handleKamarMandiChange}
          />
          <Text>Tidak Ada</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            value="Keramik"
            checked={jenisLantai === "Keramik"}
            onChange={handleJenisLantaiChange}
          />
          <Text>Keramik</Text>
          <RadioButton
            value="Kayu"
            checked={jenisLantai === "Kayu"}
            onChange={handleJenisLantaiChange}
          />
          <Text>Kayu</Text>
          <RadioButton
            value="Marmer"
            checked={jenisLantai === "Marmer"}
            onChange={handleJenisLantaiChange}
          />
          <Text>Marmer</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Entry;