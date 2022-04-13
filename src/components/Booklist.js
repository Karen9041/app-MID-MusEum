import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import BookDetail from "./BookDetail"
import sections from "../json/bookData.json";


const Booklist = ({navigation}) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({item})=><BookDetail book={item} navigation={navigation} title={section.title}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
    </>
  );
  const renderItem = () => null;

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 12 ,paddingBottom:50}}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft : 10,
  },
})

export default Booklist;