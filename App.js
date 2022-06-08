import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store from "./src/redux/store";


const App =() => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation />            
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
   
  );
}


export default App;