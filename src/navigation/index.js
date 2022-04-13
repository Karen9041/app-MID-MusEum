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

  return (
    <DrawerContentScrollView {...props}>
      <Box style={{paddingLeft:16,paddingTop:35}}>
      <Image
        source={require("../images/img_avatar.png")}
        alt='avater'
      />
      <Text style={{fontSize:24,fontWeight:'bold',paddingTop:20}}>May</Text>
      </Box>
      <Divider my="2"/>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Account"
        labelStyle={ {fontSize: 16} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={26} />
        )}
        onPress={()=>alert('Hi May')}
      />
      <DrawerItem 
        label="Setting"
        labelStyle={ {fontSize: 16} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        )}
        onPress={()=>alert('Here will be setting someday')}
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
        drawerActiveTintColor:colors.primaryGreen,
        drawerStyle: { width: 260 },
        drawerLabelStyle: { fontSize: 16 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="HomeDeawer" 
        component={HomeStackNavigator} 
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
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
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
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
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
                        size={28}
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                    headerRight: () => (
                      <MaterialCommunityIcons
                        name={'magnify'}
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
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
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
                          color={'black'}
                          />:<MaterialCommunityIcons
                          name={'bookmark'}
                          size={28}
                          color={colors.primaryGreen}
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