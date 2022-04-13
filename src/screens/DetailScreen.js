import { Box, Divider, HStack } from 'native-base';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const DetailScreen = ({ route }) => {
  const { 
    title, 
    author,
    publisher,
    descriptions,
    ISBN,
    image,
    language
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#F7F7F7'}} >
      <View style={{alignItems: 'center',backgroundColor:'white'}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <Divider bg = "#94A89A" />
      <View style={styles.cardContainerStyle}>
            <Text style={styles.textTitleStyle}>{title}</Text>
          <HStack justifyContent={'space-around'} marginTop={5}>
              <Box>
                <Text style={styles.textInfoStyle}>資訊</Text>
                <Divider bg = "#94A89A" height={1} width={100}/>
              </Box>
              <Text style={styles.textMemStyle}>心得評分</Text>         
          </HStack>
      </View>
      <Divider bg = "#94A89A" />
      <View style={styles.cardInformationStyle}>
          <HStack justifyContent={'space-between'} padding={1}>
            <Box paddingLeft={2} marginRight={-1}>
              <Text style={styles.textInformationTitleStyle}>作者</Text>
              <Text>{author}</Text>
            </Box>
            <Divider bg = "#94A89A"  orientation="vertical" />
            <Box marginLeft={-8}>
              <Text style={styles.textInformationTitleStyle}>出版社</Text>
              <Text>{publisher}</Text>
            </Box>
            <Divider bg = "#94A89A"  orientation="vertical" height={70} />
            <Box paddingRight={10} marginLeft={-8}>
              <Text style={styles.textInformationTitleStyle}>語言</Text>
              <Text>{language}</Text>
            </Box>
          </HStack>
      </View>
      <HStack marginHorizontal={35} marginVertical={5}>
          <Text style={styles.textDescriptionTitleStyle}>ISBN ：</Text>
          <Text>{ISBN}</Text>
      </HStack>
      <HStack marginHorizontal={35} marginVertical={5}>
          <Text style={styles.textDescriptionTitleStyle}>備註 ：</Text>
          <Text>{descriptions}</Text>
      </HStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
    imageStyle: {
        height: 207,
        width: 207,
    },
    cardContainerStyle: {
        paddingHorizontal: 15,
        paddingTop:15,
        marginHorizontal: 10,
        backgroundColor:'#F6F6F6'
    },
    textTitleStyle:{
        fontSize: 16,
        fontWeight:'bold',
        color:"#496351"
    },
    textInfoStyle:{
      textAlign:'center',
      fontSize: 14,
      fontWeight:'bold',
      color:"#496351"
    },
    textMemStyle:{
      width:100,
      textAlign:'center',
      fontSize: 14,
      color:"#ABBAAF"
    },
    cardInformationStyle:{
      width:300,
      height:80,
      backgroundColor:'white',
      borderColor:'#94A89A',
      borderWidth:1,
      borderRadius:8,
      marginHorizontal:30,
      marginVertical:25
    },
    textInformationTitleStyle:{
        fontSize: 14,
        color:'#496351',
        paddingVertical:5,
        paddingBottom:15,
    },
    textDescriptionTitleStyle:{
        // marginTop: 15,
        // lineHeight:24,
        fontWeight:'bold',
        color:"#496351",
        fontSize:14,
    }
});

export default DetailScreen;
