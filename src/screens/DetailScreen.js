import { Box, Divider, HStack, ScrollView ,Text, Image } from 'native-base';
import React from 'react';

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
    <ScrollView _light={{bg:"#F6F6F6"}} _dark={{bg:"#32333E"}} >
      <Box alignItems='center'_light={{bg:"white"}} _dark={{bg:"#C4C4C4"}}>
        <Image
          alt='img'
          height= {207} width={207} 
          source={{
            uri: image
          }}
        />
      </Box>
      <Divider _light={{bg:"#94A89A"}} _dark={{bg:"#B0AA99"}} />
      <Box  paddingHorizontal={15} paddingTop={15} marginHorizontal={10}
      _light={{backgroundColor:'#F6F6F6'}}
      _dark={{backgroundColor:'#32333E'}}
      >
            <Text fontSize={16} fontWeight='bold'
            _light={{color:'#496351'}}
            _dark={{color:'#F0E2BD'}}
            >
              {title}</Text>
          <HStack justifyContent={'space-around'} marginTop={5}>
              <Box>
                <Text   textAlign='center' fontSize={14} fontWeight='bold'
                  _light={{color:'#496351'}}
                  _dark={{color:'#F0E2BD'}}
                >資訊</Text>
                <Divider _light={{bg:"#94A89A"}} _dark={{bg:"#F0E2BD"}} height={1} width={100}/>
              </Box>
              <Text width={100} textAlign='center' fontSize={14}
              _light={{color:"#ABBAAF"}}
              _dark = {{color:"#B0AA99"}}
              >
                心得評分</Text>         
          </HStack>
      </Box>
      <Divider _light={{bg:"#94A89A"}} _dark={{bg:"#B0AA99"}} />
      <Box 
      width={300}
      height={78}
      borderWidth={1}
      borderRadius={8}
      marginHorizontal={30}
      marginVertical={25}
      _light={{bg:'#94A89A'}}
      _dark={{bg:'#5C5D61'}}
      >
          <HStack justifyContent={'space-between'} padding={1}>
            <Box paddingLeft={2} marginRight={-1}>
              <Text fontSize={14} paddingVertical={5} paddingBottom={15}
              _light={{color:'#496351'}}
              _dark={{color:"#F0E2BD"}}
              >作者</Text>
              <Text>{author}</Text>
            </Box>
            <Divider _light={{bg:"#94A89A"}} _dark={{bg:"#B0AA99"}}  orientation="vertical" />
            <Box marginLeft={-8}>
              <Text fontSize={14} paddingVertical={5} paddingBottom={15}
              _light={{color:'#496351'}}
              _dark={{color:"#F0E2BD"}}>出版社</Text>
              <Text>{publisher}</Text>
            </Box>
            <Divider _light={{bg:"#94A89A"}} _dark={{bg:"#B0AA99"}}  orientation="vertical" height={70} />
            <Box paddingRight={10} marginLeft={-8}>
              <Text fontSize={14} paddingVertical={5} paddingBottom={15}
              _light={{color:'#496351'}}
              _dark={{color:"#F0E2BD"}}>語言</Text>
              <Text>{language}</Text>
            </Box>
          </HStack>
      </Box>
      <HStack marginHorizontal={35} marginVertical={5}>
          <Text fontWeight='bold' fontSize={14}
          _light={{color:"#496351"}}
          _dark={{color:"#F0E2BD"}}
          >ISBN ：</Text>
          <Text>{ISBN}</Text>
      </HStack>
      <HStack marginHorizontal={35} marginVertical={5}>
          <Text fontWeight='bold' fontSize={14}
          _light={{color:"#496351"}}
          _dark={{color:"#F0E2BD"}}>備註 ：</Text>
          <Text>{descriptions}</Text>
      </HStack>
    </ScrollView>
  );
}

export default DetailScreen;
