import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StarterIntro from './screens/StarterIntro';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Starter Intro" component={StarterIntro} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
