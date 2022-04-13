import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';
import Starlist from '../components/Starlist';

const DetailScreen = ({ route }) => {
  const { 
    title, 
    author,
    price,
    url,
    star,
    image,
    descriptions
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}} >
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
          <Text>
            <Text style={styles.textTitleStyle}>{title}</Text>
          </Text>
          <Text>            
            <Text style={styles.textAuthorStyle}>{author}</Text>
          </Text>
          <View style={{flexDirection:'row' ,paddingTop:5}}>
            <Starlist star ={star}/>
            <Text style={styles.textScore}>{star}.0 / 5.0</Text>
          </View>
          <Text style={styles.textDescriptionStyle}>{descriptions}</Text>
      </View>
      <View style={styles.cardContainerStyle}>
        <Button 
            color={'#6200EE'}
            onPress={() => Linking.openURL(url)}
            title={`BUY NOW FOR $${price}`}
        />  
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
    imageStyle: {
        height: 270,
        width: 190,
    },
    cardContainerStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 5
    },
    textTitleStyle:{
        fontSize: 24,
        fontWeight:'bold',
    },
    textAuthorStyle:{
        fontSize: 14,
        color:'#666666',
    },
    textScore:{
      fontSize:12,
      paddingLeft:5,
    },
    textDescriptionStyle:{
        marginTop: 15,
        lineHeight:24,
        fontWeight:'400'
    }
});

export default DetailScreen;
