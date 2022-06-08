import React from "react";
import {  FlatList, SectionList } from "react-native";
import { Text, Divider, Button, HStack, Icon } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookDetail from "./BookDetail"
import BookDetail_hoz from "./BookDetail_hoz"
import sections from "../json/bookData.json";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../redux/sortSlice";

const Booklist = ({navigation}) => {
  //Get state from store
  const sortState = useSelector(selectSort);

  //Define a dispatch to send actions
  const dispatch = useDispatch();

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
      </HStack>
      <Divider 
      _light={{bg:"#94A89A"}}
      _dark={{bg:"#F0E2BD"}} 
      width ={315} ml={2.5}/>
      <HStack>
        <Button 
          // onPress={()=> console.log('排序')}
          width={16} 
          height={6} 
          marginLeft={220} 
          marginTop={3}
          variant={"ghost"}
          padding={0}
          // _light={{borderColor:"#94A89A"}}
          // _dark={{borderColor:"#F0E2BD"}}
          leftIcon={<Icon as={MaterialCommunityIcons} name="menu-swap" size="md" _light={{color:"#94A89A"}} _dark={{color:"#393A45"}} marginRight={-3}/>}
          _text={{
            color:"#94A89A",
            fontSize:14,
          }} >排序
        </Button>
        <Button 
          onPress={()=>{dispatch(setSort(sortState))
          console.log(sortState)
          }}
          width={6} 
          height={6} 
          marginLeft={3} 
          marginTop={3}
          variant={"ghost"}
          padding={0}
          // _light={{borderColor:"#94A89A"}}
          // _dark={{borderColor:"#F0E2BD"}}
          leftIcon={<Icon as={MaterialCommunityIcons} name="pencil-box-multiple-outline" size="sm" _light={{color:"#94A89A"}} _dark={{color:"#393A45"}}/>}
        />
      </HStack>
      {sortState?
        <FlatList
        data={section.data}
        renderItem={({item})=><BookDetail book={item} navigation={navigation} title={section.title}/>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => '_'+item.title }
        key={'_'}
        numColumns={3}
        />  
        :
        <FlatList
        data={section.data}
        renderItem={({item})=><BookDetail_hoz book={item} navigation={navigation} title={section.title}/>}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item =>'#'+ item.title }
        key={'#'}
        numColumns={1}
      />  
      }
    </>
  );
  const renderItem = () =>null;
  
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