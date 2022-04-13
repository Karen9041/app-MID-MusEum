import React from "react";
import { Center, Image, Box, Button, Icon, Pressable, Text } from "native-base";
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
                        // backgroundColor={'black'}
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => console.log("B1") }>
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
            </Pressable>
            <Pressable onPress={() => console.log("B2") }>
                <Box hight={100} marginTop={-150}>
                    <Image
                        source={
                            {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%20B2.png?raw=true"}
                        }
                        alt="Floor B2" size="2xl"
                        resizeMode='contain'
                    />
                </Box>
            </Pressable>
            <Pressable onPress={() => console.log("B3") }>
                <Box hight={100} marginTop={-150}>
                    <Image
                        source={
                            {uri: "https://github.com/Karen9041/app-MID-MusEum/blob/main/src/images/floor%20B3.png?raw=true"}
                        }
                        alt="Floor B3" size="2xl"
                        resizeMode='contain'
                    />
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
                leftIcon={<Icon as={MaterialCommunityIcons} name="circle-edit-outline" size="md" color="white"/>}
            >
            </Button>
    </>
    )
}

const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

export default Floor;