import React from "react";
import { View } from "react-native";
import Booklist from "../components/Booklist";

const BookScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1 ,
        backgroundColor:'#F6F6F6',
    }}>
      <Booklist 
        navigation={navigation}
      />
    </View>
  );
};

export default BookScreen;
