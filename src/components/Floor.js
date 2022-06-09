import React from "react";
import {  Image, Box, Button, Icon, Pressable, Text, Divider } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Floor = ({navigation}) =>{
    return(
    <>
        <Pressable onPress={() => navigation.navigate('List') }>
            <Box hight={100}>
                <Image
                    source={
                        {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%201F.png?raw=true"}
                    }
                    alt="Floor F1" size="2xl"
                    resizeMode='contain'
                />
            </Box>
            <Box position={"absolute"} marginTop={130} marginLeft={190}>
                <Text textAlign={"right"}>
                    1F
                </Text>
                <Text textAlign={"right"}>
                    小說
                </Text>
                <Divider width={20}  _light={{bg:"#496351"}} _dark={{bg:"#F6F6F6"}}></Divider>
            </Box>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('List') }>
            <Box hight={100} marginTop={-150}>
                <Image
                    source={
                        {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%20B1.png?raw=true"}
                    }
                    alt="Floor B1" size="2xl"
                    resizeMode='contain'
                    // backgroundColor={'white'}

                />
            </Box>
            <Box position={"absolute"} marginTop={-5} marginLeft={190}>
                <Text textAlign={"right"}>
                    B1
                </Text>
                <Text textAlign={"right"}>
                    周邊
                </Text>
                <Divider width={20} _light={{bg:"#496351"}} _dark={{bg:"#F6F6F6"}}></Divider>
            </Box>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('List') }>
            <Box hight={100} marginTop={-150}>
                <Image
                    source={
                        {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%20B2.png?raw=true"}
                    }
                    alt="Floor B2" size="2xl"
                    resizeMode='contain'
                />
            </Box>
            <Box position={"absolute"} marginTop={-5} marginLeft={190}>
                <Text textAlign={"right"}>
                    B2
                </Text>
                <Text textAlign={"right"}>
                    服飾
                </Text>
                <Divider width={20} _light={{bg:"#496351"}} _dark={{bg:"#F6F6F6"}}></Divider>
            </Box>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('List') }>
            <Box hight={100} marginTop={-150}>
                <Image
                    source={
                        {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%20B3.png?raw=true"}
                    }
                    alt="Floor B3" size="2xl"
                    resizeMode='contain'
                />
            </Box>
            <Box position={"absolute"} marginTop={-5} marginLeft={190}>
                <Text textAlign={"right"}>
                    B3
                </Text>
                <Text textAlign={"right"}>
                    作品集
                </Text>
                <Divider width={20} _light={{bg:"#496351"}} _dark={{bg:"#F6F6F6"}}></Divider>
            </Box>
        </Pressable>
        <Button
            onPress={buttonClickedHandler}
            width= {50}
            height={50}
            borderRadius={50}
            marginTop = {-100}
            marginBottom ={50}
            marginLeft = {270}
            _light={{bg:"#94A89A"}}
            _dark={{bg:"#F6F6F6"}}
            leftIcon={<Icon as={MaterialCommunityIcons} name="square-edit-outline" size="md" _light={{color:"white"}} _dark={{color:"#393A45"}}/>}
        >
        </Button>
    </>
    )
}

const buttonClickedHandler = () => {
    alert('Hi Button');
    // do something
  };

export default Floor;