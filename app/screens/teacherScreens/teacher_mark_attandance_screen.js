import React, { useState ,useEffect} from "react";
import { FlatList, StyleSheet, Text, View, Switch } from "react-native";
import DatePickerr from "../../components/date_picker";
import { useSelector } from "react-redux";
import axios from "axios";
import _ from 'lodash';

function TeacherMarkAttandanceScreen({ route }) {
  const paasedData = route.params;
  console.log(paasedData);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
const [isFetching,setIssFethin]=useState(false)

  const AuthStr = "Bearer ".concat(Token);
  const getStudents =()=>{
    axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/user/student/${paasedData.id}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      setIssFethin(true)
      const d = response.data;
      const g = d.map((item) => {
        return {
          name: item.username,
          rollno: item.roll_num.toString(),
          switch : false,
        };
      });
      setdata(g);

    })

    .catch((error) => {
      console.log("error " + error);
    });  
  }

  const setSwitchValue = (val, ind) => {
    const tempData = _.cloneDeep(data);
    tempData[ind].switch = val;
    setdata(tempData)
  };
useEffect(()=>{
  if(!isFetching){
    getStudents()
  }

},[isFetching])
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
