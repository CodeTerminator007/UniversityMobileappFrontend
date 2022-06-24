import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";

const DatePickerr = ({ date, setDate }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1980-01-01"
          maxDate="2024-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePickerr;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  datePickerStyle: {
    width: 200,
    //marginTop: 20,
  },
});
