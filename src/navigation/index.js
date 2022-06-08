import React, {useRef, useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Divider, Image, Box, Pressable, useColorMode } from 'native-base';

import ListScreen from '../screens/ListScreen';
import FloorScreen from '../screens/FloorScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

import MyTheme from '../Theme';
import LottieView from "lottie-react-native"

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
  const{colorMode} = useColorMode();

  return (
    <DrawerContentScrollView {...props} >
      <Box>
      <Image
        source={colorMode =="light"?require("../images/LOGO.png"):require("../images/LOGO_dark.png")}
        alt='LOGO'
      />
      </Box>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="主題"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor={colorMode =="light"? colors.drawerBrown:"#F6F6F6"}
        icon={({ color }) => (
          <MaterialCommunityIcons name="palette" color={color} size={30} />
        )}
        onPress={()=>alert('主題')}
      />
      <DrawerItem 
        label="我的最愛"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor={colorMode =="light"? colors.drawerBrown:"#F6F6F6"}        icon={({ color }) => (
          <MaterialCommunityIcons name="bookmark-outline" color={color} size={30} />
        )}
        onPress={()=>alert('我的最愛')}
      />
      <Divider bg={colorMode =="light"? colors.drawerBrown:"#F6F6F6"} width={270} marginLeft={4}/>
      <DrawerItem 
        label="密碼"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor={colorMode =="light"? colors.drawerBrown:"#F6F6F6"}        icon={({ color }) => (
          <MaterialCommunityIcons name="lock-outline" color={color} size={30} />
        )}
        onPress={()=>alert('密碼')}
      />
      <DrawerItem 
        label="備份到雲端"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor={colorMode =="light"? colors.drawerBrown:"#F6F6F6"}        icon={({ color }) => (
          <MaterialCommunityIcons name="cloud-upload" color={color} size={30} />
        )}
        onPress={()=>alert('備份到雲端')}
      />
      <DrawerItem 
        label="問題回報"
        labelStyle={ {fontSize: 16} }
        inactiveTintColor={colorMode =="light"? colors.drawerBrown:"#F6F6F6"}        icon={({ color }) => (
          <MaterialCommunityIcons name="chat-processing-outline" color={color} size={30} />
        )}
        onPress={()=>alert('問題回報')}
      />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const {colors} = useTheme();
  const{colorMode} = useColorMode();
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerInactiveTintColor:colors.drawerBrown,
        drawerActiveTintColor:colors.drawerBrown,
        drawerStyle: { 
          width: 300 ,
          backgroundColor: colorMode =="light"?'#E4E1DC':'#767DB2',
        },
        drawerLabelStyle: { fontSize: 16 ,color:colorMode =="light"? colors.drawerBrown:"#F6F6F6"},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="HomeDeawer" 
        component={HomeStackNavigator} 
        options={{
          headerShown: false,
          title: "主頁",
          drawerIcon: () => (
            <MaterialCommunityIcons name="home-outline" color={colorMode =="light"? colors.drawerBrown:"#F6F6F6"} size={30} />
          ),
        }}
      />
       <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "設定",
          drawerIcon: () => (
            <MaterialCommunityIcons name="cog" color={colorMode =="light"? colors.drawerBrown:"#F6F6F6"} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );  
}

const SettingsStack = ({navigation}) => {
  const{colorMode} = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: null,
          headerShadowVisible:true,
          headerStyle:{
            backgroundColor:colorMode =="light"?'#844331':'#767DB2',
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
  const{colorMode} = useColorMode();

  const[toggle,setToggle] = useState(true);
  const animation = useRef(null);
  const onPress=()=>{
    animation.current.play();
    navigation.openDrawer();
  }
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={FloorScreen}
                options={{
                    title: null,
                    headerShadowVisible:true,
                    headerStyle:{
                      backgroundColor:colorMode =="light"?'#94A89A':'#393A45',
                    },
                    headerLeft: () => (
                        <Pressable onPress={onPress}>
                          <Box h={28} w={28}>
                            <LottieView
                              source={require("../json/lottie_menu.json")}
                              loop={false}
                              ref={animation}
                              // onPress={() => navigation.openDrawer()}
                            />
                          </Box>
                        </Pressable>
                        
                      ),
                }}
            />
            <Stack.Screen
                name="List"
                component={ListScreen}
                options={{
                    title: null,
                    headerShadowVisible:true,
                    headerStyle:{
                      backgroundColor:colorMode =="light"?'#94A89A':'#393A45',
                    },
                    headerLeft: () => (
                      <Pressable onPress={onPress}>
                        <Box h={28} w={28}>
                          <LottieView
                            source={require("../json/lottie_menu.json")}
                            loop={false}
                            ref={animation}                          />
                        </Box>
                      </Pressable>
                    ),
                    headerRight: () => (
                      <Pressable onPress={()=>animation.current.play()}>
                        <Box h={30} w={30}>
                          <LottieView
                            source={require("../json/lottie_search.json")}
                            loop={false}
                            ref={animation}                          />
                        </Box>
                      </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: null,
                    headerShadowVisible:true,
                    headerStyle:{
                      backgroundColor:colorMode =="light"?'#94A89A':'#393A45',
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