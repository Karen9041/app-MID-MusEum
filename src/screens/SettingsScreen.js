import React from "react";
import { Box, Divider,Switch, HStack, Text, useColorMode } from "native-base";
import ListItem from "../components/ListItem"

const SettingsScreen = ({ navigation }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box flex={1} _light={{bg:"#E4E1DC"}} _dark={{bg:"#393A45"}}>
            <ListItem title="設定"/>
            <Divider _light={{bg:"#844331"}} _dark={{bg:"#F6F6F6"}} width={320} marginLeft={5}/>
            <HStack space={8} alignItems="center" justifyContent="space-between" >
                <Text fontSize={16} _light={{color:"#844331"}} _dark={{color:"#F6F6F6"}} marginLeft={6}>{colorMode == "light" ? "淺色模式" : "深色模式"}</Text>
                <Switch
                    offThumbColor="#393A45" offTrackColor="white"
                    onThumbColor="#844331" onTrackColor="gray" 
                    marginRight={6}
                    name="light Mode"
                    isChecked={colorMode == "light"}
                    onToggle={toggleColorMode}
                    accessibilityLasbel="display-mode"
                    accessibilityHint="light or dark mode"
                />
            </HStack>  
            <ListItem title="清空資料" navigation={navigation} />
            <Divider _light={{bg:"#844331"}} _dark={{bg:"#F6F6F6"}} width={320} marginLeft={5}/>
            <ListItem title="關於MusEum" navigation={navigation} />
            <ListItem title="應用程式版本" navigation={navigation} />
            <Text fontSize={14} _light={{color:"#844331"}} opacity={0.6} marginLeft={6} marginTop={-3}>0.00.01</Text>
            <ListItem title="Facebook粉絲專頁" navigation={navigation} />
            <ListItem title="Instagram官方帳號" navigation={navigation} />

        </Box>
    );
};

export default SettingsScreen;
