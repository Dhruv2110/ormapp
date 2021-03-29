import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import Keywords from './screens/Keywords'
import Connections from './screens/Connections'
import Measure from './screens/Measure'
import Recommendations from './screens/Recommendations'
import More from './screens/More'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Keywords') {
              if (iconName = focused) {
                return <Ionicons name="key" size={30} color="black" />
              }
              else {
                return <Ionicons name="key" size={24} color="lightgrey" />
              }
            } else if (route.name === 'Connections') {
              if (iconName = focused) {
                return <FontAwesome5 name="network-wired" size={30} color="black" />
              }
              else {
                return <FontAwesome5 name="network-wired" size={24} color="lightgrey" />
              }
            }
            else if (route.name === 'Recommendations') {
              if (iconName = focused) {
                return <FontAwesome5 name="lightbulb" size={30} color="black" />
              }
              else {
                return <FontAwesome5 name="lightbulb" size={24} color="lightgrey" />
              }
            }
            else if (route.name === 'Measure') {
              if (iconName = focused) {
                return <Feather name="trending-up" size={30} color="black" />
              }
              else {
                return <Feather name="trending-up" size={24} color="lightgrey" />
              }
            }
            else if (route.name === 'More') {
              if (iconName = focused) {
                return <FontAwesome5 name="bars" size={30} color="black" />
              }
              else {
                return <FontAwesome5 name="bars" size={24} color="lightgrey" />
              }
            }

            // You can return any component that you like here!
            //return <Ionicons name={iconName} size={size} color={color} />;
            //return <FontAwesome5 name={iconName} size={24} color="black" />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'lightgrey',
        }}
      >
        <Tab.Screen name="Keywords" component={Keywords} />
        <Tab.Screen name="Connections" component={Connections} />
        <Tab.Screen name="Recommendations" component={Recommendations} />
        <Tab.Screen name="Measure" component={Measure} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
