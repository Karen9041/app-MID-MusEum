import React from "react";
import {  StyleSheet, View, Image} from "react-native";



const Starlist =({star})=>{
    const starlist = [];
    for (let i=0; i<=5;i++){
        if (i< star){
            starlist.push(<Image source={require('../icons/icon_star_filled.png')}  style={styles.stars} key={i}/>)
        }else{
            starlist.push(<Image source={require('../icons/icon_star_empty.png')}  style={styles.stars} key={i}/>)
        }
    }

    return(
        <View style={styles.Score} >
            {starlist}
        </View>
    )
};

const styles = StyleSheet.create({
    Score: {
      flexDirection: "row"
    },
    stars: {
      marginRight: 4
    }
  })


export default Starlist;