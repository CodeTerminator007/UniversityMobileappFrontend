import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Switch } from "react-native";
import DatePickerr from "../../components/date_picker";

function TeacherMarkAttandanceScreen({ route }) {
  const paasedData = route.params;
  console.log(paasedData);

  const data = [
    { name: "Ali", rollno: "11112", switch: false },
    { name: "Ahmed", rollno: "11113", switch: false },
    { name: "Usama", rollno: "11114", switch: false },
    { name: "Haris", rollno: "11115", switch: false },
    { name: "Omer", rollno: "11116", switch: false },
    { name: "Jarar", rollno: "11117", switch: false },
    { name: "Kaleem", rollno: "11118", switch: false },
    { name: "Usman", rollno: "11119", switch: false },
  ];

  const setSwitchValue = (val, ind) => {
    const tempData = _.cloneDeep(data);
    tempData[ind].switch = val;
    setData({ data: tempData });
  };

  const listItem = ({ item, index }) => (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.rollno}</Text>
      <Switch
        onValueChange={(value) => setSwitchValue(value, index)}
        value={item.switch}
      />
    </View>
  );

  return (
    <>
      <DatePickerr />
      <FlatList
        data={data}
        keyExtractor={(data) => data.rollno.toString()}
        renderItem={listItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default TeacherMarkAttandanceScreen;
