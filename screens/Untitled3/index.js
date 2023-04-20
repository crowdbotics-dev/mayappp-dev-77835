import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.GoMabRnw}></TextInput><Switch style={styles.XIrZMBfQ}></Switch><Slider style={styles.ELuuIPot} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Switch style={styles.vBIofGCy}></Switch></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GoMabRnw: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  XIrZMBfQ: {
    width: 50,
    height: 25
  },
  ELuuIPot: {
    width: 150,
    height: 40
  },
  vBIofGCy: {
    width: 50,
    height: 25
  }
});
export default Untitled3;