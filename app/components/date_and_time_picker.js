import React, { useState } from "react";

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

const DateAndTimePicker = ({date,setDate , datePicker, setDatePicker , timePicker, setTimePicker , time, setTime})=> {


  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  return (
    <View style={styles.MainContainer}>
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
        />
      )}

      {timePicker && (
        <DateTimePicker
          value={time}
          mode={"time"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={false}
          onChange={onTimeSelected}
        />
      )}

      {!datePicker && (
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.button}>
            <MaterialIcons name="date-range" size={24} color="grey" />
            <Text style={styles.text}>{date.toDateString()}</Text>
            <MaterialIcons name="date-range" size={24} color="white" />
          </View>
        </TouchableOpacity>
      )}

      {!timePicker && (
        <TouchableOpacity onPress={showTimePicker}>
          <View style={styles.button}>
            <MaterialIcons name="access-time" size={24} color="grey" />
            <Text style={styles.text}>{time.toLocaleTimeString("en-US")}</Text>
            <MaterialIcons name="access-time" size={24} color="white" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 17,
    color: "black",
    //padding: 3,
    //marginBottom: 10,
    textAlign: "center",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "grey",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 200,
    height: 40,
  },
});
export default DateAndTimePicker;
