import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home"
export default function App() {
  
  return (
     
    <NativeBaseProvider>
       <View style={{flex:1,alignItems:"center",justifyContent:"center"}}> 
      <Home/>
      </View>
      </NativeBaseProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

