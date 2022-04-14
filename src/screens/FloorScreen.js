import React from 'react';
import { Center} from "native-base";
import Floor from "../components/Floor";
const FloorScreen = ({ navigation }) =>  {
    return(
        <Center flex={1} 
        _light={{ bg: "#F6F6F6" }}
        _dark={{ bg: "#32333E" }}
        >
            <Floor navigation={navigation}/>
        </Center>
    );
}

export default FloorScreen;