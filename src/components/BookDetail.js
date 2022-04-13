import React from "react";
import { Pressable, StyleSheet, Text, View, Image} from "react-native";

const BookDetail = ({book, navigation}) => {
    return(
    <View style={{flexDirection: 'column'}}>
      <Pressable onPress={()=> navigation.navigate('Detail', book)}>
        <View style={styles.cardContainerStyle}>
          <View style={styles.cardSectionStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri: book.image}}
              />
          </View>
          <View style={styles.headerContainerStyle}>
            <Text style={styles.headerTitleStyle}>{book.title}</Text>
          </View>
        </View>    
      </Pressable>
    </View>
)};

const styles = StyleSheet.create({
    cardContainerStyle: {
      marginLeft: 6,
      marginRight: 6,
      marginTop: 12,
      borderColor:'#8094A89A',
      borderWidth:1,
      borderRadius:5,
      width:100,
      height:150,
      backgroundColor:'white',
    },
    headerContainerStyle: {
      paddingLeft: 8,
    },
    headerTitleStyle: {
      fontSize: 13,
      color:"#496351",
      fontWeight: 'bold',
      width: 85,
      textAlign:'center',
    },
    cardSectionStyle: {
      margin:8,
    },
    imageStyle: {
      height: 82,
      width: 82,
      borderRadius:5,
      borderColor:"#94A89A80",
      borderWidth:1,
    }
  });

  export default BookDetail;