import React from 'react';
import { Center} from "native-base";
import Floor from "../components/Floor";
const FloorScreen = ({ navigation }) =>  {
    return(
        <Center flex={1}>
            <Floor navigation={navigation}/>
        </Center>
    );
}

export default FloorScreen;