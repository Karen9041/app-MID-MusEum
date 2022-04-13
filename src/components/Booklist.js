import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import { Divider, Button, HStack } from "native-base";
import BookDetail from "./BookDetail"
import sections from "../json/bookData.json";

const Booklist = ({navigation}) => {
  const renderSectionHeader = ({section}) => (
    <>
      <HStack justifyContent="space-between">
        <Text style={styles.sectionHeader}>{section.title}</Text>
        <Button 
          width={12} 
          height={5} 
          marginRight={3} 
          marginTop={6}
          variant={"outline"}
          borderRadius={2}
          padding={0}
          borderColor="#94A89A"
          _text={{
            color:"#94A89A",
            fontSize:12,
          }}
        >新增</Button>
      </HStack>
      <Divider bg = "#94A89A" width ={315} ml={2.5}/>
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

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft : 10,
    backgroundColor:"#94A89A",
    width:160,
    height:39,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    textAlign: 'center',
    textAlignVertical:'center',
    color:'white',
  },
})

export default Booklist;