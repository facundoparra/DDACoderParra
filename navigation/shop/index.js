import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import Notifications from '../../components/Header/Notifications';

import Categories from '../../screens/shop/Categories';
import Products from '../../screens/shop/Products';
import Detail from '../../screens/shop/Detail';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: styles.header,
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
    }}
    initialRouteName="Shop"
  >
    <Stack.Screen
      name="Shop"
      component={Categories}
      options={{
        title: 'Bienvenido a Mi Pan',
        headerRight: () => <Notifications />
      }}
    />
    <Stack.Screen
      name="Products"
      component={Products}
      options={({ route }) => ({
        title: route.params.name,
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log('activar busqueda')}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen options={{ headerTintColor: 'black' }} name="Detail" component={Detail} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white',
  }
})

export default ShopNavigator;