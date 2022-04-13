import React from "react";
import { Pressable, StyleSheet, Text, View, Image} from "react-native";
import Starlist from "./Starlist";

const BookDetail = ({book, navigation, title}) => {
    return(
    <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable onPress={()=> navigation.navigate('Detail',book)}>
            <Image
              style={styles.imageStyle}
              source={{uri: book.image}}
            />
          </Pressable>
        </View>
      </View> 
      <View style={styles.headerContainerStyle}>
        {(title == "Newest")?<Starlist star={book.star}/> : null}
        <Text style={styles.headerTitleStyle}>{book.title}</Text>
        <Text style={styles.headerContentStyle}>{book.author}</Text>
      </View>   
    </View>
)};

const styles = StyleSheet.create({
    cardContainerStyle: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    headerContainerStyle: {
      justifyContent: "space-around",
      paddingLeft: 12,
    },
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingVertical: 5,
      width: 140,
    },
    headerContentStyle: {
      fontSize: 12,
      fontWeight: '500',
      color: "#131313",
      opacity: 0.5,
      width: '100%',
    },
    cardSectionStyle: {
      margin: 5,
    },
    imageStyle: {
      height: 200,
      width: 140,
    }
  });

  export default BookDetail;