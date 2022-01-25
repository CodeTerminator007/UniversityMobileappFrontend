import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import ListItem from '../components/ListItem';

const notifications = [
    {
        id:1,
        title: 'T1',
        description: 'D1',
        imageUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        imageUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
        id:3,
        title: 'T3',
        description: 'D3',
        imageUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
    }
]

 function NotificationScreen () {
        
  return (
      <SafeAreaView style={styles.container}>

          <FlatList 
          data={notifications}
          keyExtractor={notification => notification.id.toString()}
          renderItem={({ item }) => 
          <ListItem
          title={item.title}
          description={item.description}
          url={item.imageUrl}
          />}/>
          
      </SafeAreaView>
  );
 };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
});
export default NotificationScreen;