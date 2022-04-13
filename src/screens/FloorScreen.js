import React from 'react';
import { Center} from "native-base";
import Floor from "../components/Floor";
const FloorScreen = ({ navigation }) =>  {
    return(
        <Center flex={1} backgroundColor='#F6F6F6'>
            <Floor navigation={navigation}/>
        </Center>
    );
}

export default FloorScreen;