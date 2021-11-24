import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <TouchableOpacity onPress={() => console.log('ver notificaciones')}>
      <Ionicons name="alert-circle-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}