import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';

const HomeScreen=()=> {
  return (
    <View style={styles.home}>
      <Text>Home</Text>
    </View>
  );
}

const AboutScreen = () =>{
  return (
    <View style={styles.about}>
      <Text>About</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomTab =() =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  about:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
   
});

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
