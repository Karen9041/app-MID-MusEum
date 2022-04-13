import React, {useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Divider, Image, Box, Text, Pressable } from 'native-base';

import BookScreen from '../screens/BookScreen';
import FloorScreen from '../screens/FloorScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

import MyTheme from '../Theme';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () =>{
    return(
        <NavigationContainer theme={MyTheme}>
           <MyDrawer/>
        </NavigationContainer>
    );
}

const CustomDrawerContent = (props) => {
  const {colors} = useTheme();

  return (
    <DrawerContentScrollView {...props} >
      <Box>
      <Image
        source={require("../images/LOGO.png")}
        alt='LOGO'
      />
      </Box>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="主題"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor = {colors.drawerBrown}
        icon={({ color }) => (
          <MaterialCommunityIcons name="palette" color={color} size={30} />
        )}
        onPress={()=>alert('主題')}
      />
      <DrawerItem 
        label="我的最愛"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor = {colors.drawerBrown}
        icon={({ color }) => (
          <MaterialCommunityIcons name="bookmark-outline" color={color} size={30} />
        )}
        onPress={()=>alert('我的最愛')}
      />
      <Divider bg={colors.drawerBrown} width={270} marginLeft={4}/>
      <DrawerItem 
        label="密碼"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor = {colors.drawerBrown}
        icon={({ color }) => (
          <MaterialCommunityIcons name="lock-outline" color={color} size={30} />
        )}
        onPress={()=>alert('密碼')}
      />
      <DrawerItem 
        label="備份到雲端"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor = {colors.drawerBrown}
        icon={({ color }) => (
          <MaterialCommunityIcons name="cloud-upload" color={color} size={30} />
        )}
        onPress={()=>alert('備份到雲端')}
      />
      <DrawerItem 
        label="問題回報"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor = {colors.drawerBrown}
        icon={({ color }) => (
          <MaterialCommunityIcons name="chat-processing-outline" color={color} size={30} />
        )}
        onPress={()=>alert('問題回報')}
      />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerInactiveTintColor:colors.drawerBrown,
        drawerActiveTintColor:colors.drawerBrown,
        drawerStyle: { 
          width: 300 ,
          backgroundColor: '#E4E1DC',
        },
        drawerLabelStyle: { fontSize: 16 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="HomeDeawer" 
        component={HomeStackNavigator} 
        options={{
          headerShown: false,
          title: "主頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={30} />
          ),
        }}
      />
       <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );  
}

const SettingsStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: null,
          headerStyle:{
            backgroundColor:"#844331"
          },
          headerLeft: () => (
              <MaterialCommunityIcons
                name={'menu'}
                color={'white'}
                size={28}
                onPress={() => navigation.openDrawer()}
              />
          ),
          
        }}
      />
      
    </Stack.Navigator>    
  );
}

const HomeStackNavigator =({navigation}) =>{
  const {colors} = useTheme();
  const[toggle,setToggle] = useState(true);
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={FloorScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                    headerStyle:{
                      backgroundColor:"#94A89A"
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          color={'white'}
                          size={28}
                          onPress={() => navigation.openDrawer()}
                        />
                      ),
                    // headerRight: () => (
                    //     <MaterialCommunityIcons
                    //       name={'magnify'}
                    //       size={28}
                    //       // style={{ marginRight: 8 }}
                    //     />
                    //   )
                }}
            />
            <Stack.Screen
                name="List"
                component={BookScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                    headerStyle:{
                      backgroundColor:"#94A89A"
                    },
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
                        color={'white'}
                        size={28}
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                    headerRight: () => (
                      <MaterialCommunityIcons
                        name={'magnify'}
                        color={'white'}
                        size={28}
                        // style={{ marginRight: 8 }}
                      />
                    )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                    headerStyle:{
                      backgroundColor:"#94A89A"
                    },
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
                        color={'white'}
                        size={28}
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                    headerRight: () => (
                      <Pressable onPress={()=>setToggle(!toggle)}>
                        {toggle?
                        <MaterialCommunityIcons
                          name={'bookmark-outline'}
                          size={28}
                          color={'white'}
                          />:<MaterialCommunityIcons
                          name={'bookmark'}
                          size={28}
                          color={'white'}
                          />
                        }
                        
                      </Pressable>
                    )
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;