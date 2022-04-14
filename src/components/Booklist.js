import React from "react";
import {  FlatList, SectionList, StyleSheet } from "react-native";
import { Text, Divider, Button, HStack } from "native-base";
import BookDetail from "./BookDetail"
import sections from "../json/bookData.json";

const Booklist = ({navigation}) => {
  const renderSectionHeader = ({section}) => (
    <>
      <HStack justifyContent="space-between">
        <Text  
        fontSize={16}
        fontWeight='bold'
        marginTop={8}
        marginLeft={2}
        width={160}
        height={39}
        borderTopRadius={6}
        textAlign='center'
        paddingTop={2}
        _light={{color:'white' ,bg:"#94A89A"}}
        _dark={{color:'#32333E',bg:"#F0E2BD"}}
        >{section.title}</Text>
        <Button 
          width={12} 
          height={5} 
          marginRight={3} 
          marginTop={12}
          variant={"outline"}
          borderRadius={2}
          padding={0}
          _light={{borderColor:"#94A89A"}}
          _dark={{borderColor:"#F0E2BD"}}
          _text={{
            color:"#94A89A",
            fontSize:12,
          }}
        >新增</Button>
      </HStack>
      <Divider 
      _light={{bg:"#94A89A"}}
      _dark={{bg:"#F0E2BD"}} 
      width ={315} ml={2.5}/>
      <HStack></HStack>
      <FlatList
        data={section.data}
        renderItem={({item})=><BookDetail book={item} navigation={navigation} title={section.title}/>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.title }
        numColumns={3}
      />
    </>
  );
  const renderItem = () => null;

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 12 ,paddingBottom:50 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};


export default Booklist;