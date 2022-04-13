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
         bg="#E4E1DC"
         px="6"
         py="2"
        //  borderTopWidth={1}
        //  borderColor="lightgray"
       >
         <Text fontSize={16} color="#844331">{title}</Text>
       </HStack>
     </Pressable>
   );
}

export default ListItem;