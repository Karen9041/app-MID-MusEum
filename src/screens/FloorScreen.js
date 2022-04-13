import React from 'react';
import { ScrollView, View, Image} from 'react-native';
const FloorScreen = () =>  {
    return(
        <ScrollView style={{backgroundColor: '#fff'}} >
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: image
            }}
          />
        </View>
      </ScrollView>
    );
}

export default FloorScreen;