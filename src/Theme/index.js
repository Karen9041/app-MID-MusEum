import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primaryGreen: '#94A89A',
     drawerBrown: '#844331',
     drawerBgc:'#E4E1DC',
     lightBgc:'#F6F6F6',
     darkBgc:'#32333E',
     darkHeader:'#393A45',
     floorF1:'#F0E2BD',
     darkDrawer:'#767DB2',
   },
 };

 export default MyTheme;