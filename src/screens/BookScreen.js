import React from "react";
import { Box } from "native-base";
import Booklist from "../components/Booklist";

const BookScreen = ({ navigation }) => {
  return (
    <Box 
        flex={1}
        _light={{bg:"#F6F6F6"}} _dark={{bg:"#32333E"}}
    >
      <Booklist 
        navigation={navigation}
      />
    </Box>
  );
};

export default BookScreen;
