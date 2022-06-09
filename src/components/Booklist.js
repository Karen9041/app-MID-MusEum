import React, { useRef } from "react";
import {  FlatList, SectionList } from "react-native";
import { Text, Divider, Button, HStack, Icon, Box, useColorMode,Input, Center } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookDetail from "./BookDetail"
import BookDetail_hoz from "./BookDetail_hoz"
import sections from "../json/bookData.json";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../redux/sortSlice";
import LottieView from "lottie-react-native"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { selectSearch } from "../redux/searchSlice";

const Booklist = ({navigation}) => {
  //Get state from store
  const sortState = useSelector(selectSort);
  const searchState = useSelector(selectSearch);
  
  //Define a dispatch to send actions
  const dispatch = useDispatch();

  const animation = useRef(null);
  const onPress = ()=>{
    animation.current.play();
    dispatch(setSort(sortState));
  }
  const{colorMode} = useColorMode();

  const renderSectionHeader = ({section}) => (
    <>{
      searchState?
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
          _dark={{color:'#32333E',bg:"#D6E5BE"}}
          >{section.title}</Text>
        </HStack>
        <Divider 
        _light={{bg:"#94A89A"}}
        _dark={{bg:"#D6E5BE"}} 
        width ={315} ml={2.5}/>
        <HStack>
          <Button 
            // onPress={()=> console.log('排序')}
            width={16} 
            height={6} 
            marginLeft={220} 
            marginTop={2}
            variant={"ghost"}
            padding={0}
            // _light={{borderColor:"#94A89A"}}
            // _dark={{borderColor:"#F0E2BD"}}
            leftIcon={<Icon as={MaterialCommunityIcons} name="menu-swap" size="md" _light={{color:"#94A89A"}} _dark={{color:"#D6E5BE"}} marginRight={-3}/>}
            _text={
            {
              _light:{color:"#94A89A"},
              _dark:{color:"#D6E5BE"},
              fontSize:14,
            }}>排序
          </Button>
          <Pressable onPress={onPress}>
            <Box h={10} w={10} >
              <LottieView
                  source={colorMode=="light"?require("../json/lottie_sort.json"):require("../json/lottie_sort_dk.json")}
                  ref={animation}
                  loop={false}
                  speed={
                    sortState?-1:1
                  }
                />
            </Box>
          </Pressable>
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
      </>:
      <>
        <Center >
          <Input h={8} w={330} marginTop={5} variant="rounded" borderWidth={2} bg={"#FFFFFF"}  placeholder="搜尋"/>
        </Center>
        <Icon as={MaterialCommunityIcons} name="filter-outline" size="5" marginLeft={2}  _light={{color:"#94A89A"}} _dark={{color:"#F6F6F6"}}  marginTop={3}></Icon>
      </>}

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