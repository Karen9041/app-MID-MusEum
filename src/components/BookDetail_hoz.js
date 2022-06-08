import React from "react";
import { Pressable} from "react-native";
import{Box, HStack, Icon, Text} from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BookDetail = ({book, navigation}) => {
    return(
    <Box style={{flexDirection: 'column'}}>
      <Pressable onPress={()=> navigation.navigate('Detail', book)}>
          <HStack 
            marginLeft={2}
            // marginRight={2}
            marginTop={4}
            _light={{borderColor:'#8094A89A',backgroundColor:'white'}}
            _dark={{borderColor:'#7E7C80',backgroundColor:'#5C5D61'}}
            borderWidth={1}
            borderRadius={5}
            width={320}
            height={12}
          >
            <Box paddingLeft={1}>
              <Text 
                paddingTop={3}
                marginLeft={2}
                fontSize={14}
                _light={{color:"#496351"}}
                _dark={{color:"#F6F6F6"}}
                fontWeight='bold'
                height={12}
                width={190}
              >{book.title}</Text>
            </Box>
            <Box paddingLeft={1}>
              <Text 
                paddingTop={3}
                fontSize={12}
                _light={{color:"#496351"}}
                _dark={{color:"#F6F6F6"}}
                fontWeight='bold'
                width={82}
              >{book.author}</Text>
            </Box>
            <Icon as={MaterialCommunityIcons} name="chevron-double-right" size="5"  _light={{color:"#496351"}} _dark={{color:"#393A45"}}  marginTop={3}
/>
          </HStack>
      </Pressable>
    </Box>
)};



  export default BookDetail;