import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { AuthContext } from "../context/Context";

export function DrawerContent(props) {

    const paperTheme = useTheme();

    // const { signOut } = React.useContext(AuthContext);


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: "https://bootdey.com/img/Content/avatar/avatar7.png"
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Ali</Title>
                                <Caption style={styles.caption}>abc@gmail.com</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="cellphone"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact Us"
                            onPress={() => {props.navigation.navigate('Contact Us')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-plus-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="New User"
                            onPress={() => {props.navigation.navigate('New User')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-supervisor-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Users"
                            onPress={() => {props.navigation.navigate('Users')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    // onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });
