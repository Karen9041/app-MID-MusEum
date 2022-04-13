import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primaryGreen: '#94A89A',
     drawerBrown: '#844331',
     drawerBgc:'#E4E1DC'
   },
 };

 export default MyTheme;