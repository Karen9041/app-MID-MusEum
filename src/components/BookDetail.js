import React from "react";
import { Pressable, StyleSheet} from "react-native";
import{Box, Image, Text} from 'native-base'
const BookDetail = ({book, navigation}) => {
    return(
    <Box style={{flexDirection: 'column'}}>
      <Pressable onPress={()=> navigation.navigate('Detail', book)}>
        <Box 
          marginLeft={2}
          marginRight={2}
          marginTop={4}
          _light={{borderColor:'#8094A89A',backgroundColor:'white'}}
          _dark={{borderColor:'#7E7C80',backgroundColor:'#5C5D61'}}
          borderWidth={1}
          borderRadius={5}
          width={95}
          height={140}
        >
          <Box margin={2}>
              <Image
                alt="book"
                height={82}
                width={82}
                borderRadius={5}
                borderColor="#94A89A80"
                borderWidth={1}
                source={{uri: book.image}}
              />
          </Box>
          <Box paddingLeft={1}>
            <Text 
              fontSize={12}
              _light={{color:"#496351"}}
              _dark={{color:"#F6F6F6"}}
              fontWeight='bold'
              width={85}
              textAlign='center'
            >{book.title}</Text>
          </Box>
        </Box>    
      </Pressable>
    </Box>
)};



  export default BookDetail;