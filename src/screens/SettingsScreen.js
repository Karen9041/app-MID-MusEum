import React from "react";
import { Box, Divider } from "native-base";
import ListItem from "../components/ListItem"
import {  Switch, HStack, Text } from 'native-base';

const SettingsScreen = ({ navigation }) => {
    return (
        <Box flex={1} background="#E4E1DC">
            <ListItem title="設定"/>
            <Divider bg="#844331" width={320} marginLeft={5}/>
            <HStack space={8} alignItems="center" justifyContent="space-between" >
                <Text fontSize={16} color="#844331" marginLeft={6}>深色模式</Text>
                <Switch
                    offThumbColor="#844331"
                    onThumbColor="#393A45" onTrackColor="#fff" 
                    marginRight={6}
                    name="light Mode"
                    accessibilityLasbel="display-mode"
                    accessibilityHint="light or dark mode"
                />
            </HStack>  
            <ListItem title="清空資料" navigation={navigation} />
            <Divider bg="#844331" width={320} marginLeft={5}/>
            <ListItem title="關於MusEum" navigation={navigation} />
            <ListItem title="應用程式版本" navigation={navigation} />
            <Text fontSize={14} color="#844331" opacity={0.6} marginLeft={6} marginTop={-3}>0.00.01</Text>
            <ListItem title="Facebook粉絲專頁" navigation={navigation} />
            <ListItem title="Instagram官方帳號" navigation={navigation} />

        </Box>
    );
};

export default SettingsScreen;
