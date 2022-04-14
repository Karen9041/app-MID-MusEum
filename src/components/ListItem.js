import React from 'react';
import { Text, HStack, Pressable } from 'native-base';

const ListItem = ({ title, navigation, destination }) => {
   return (
     <Pressable
       onPress={() => {
         destination ? navigation.navigate(destination) : null;
       }}
     >
       <HStack
         _light={{bg:"#E4E1DC"}} _dark={{bg:"#393A45"}}
         px="6"
         py="2"
        //  borderTopWidth={1}
        //  borderColor="lightgray"
       >
         <Text fontSize={16} _light={{color:"#844331"}} _dark={{color:"#F6F6F6"}} >{title}</Text>
       </HStack>
     </Pressable>
   );
}

export default ListItem;