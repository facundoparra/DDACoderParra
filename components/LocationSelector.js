import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapPreview from './MapPreview';

import COLORS from '../constants/Colors';

const ImageSelector = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la ubicación para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handlePickLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const coords = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
    setPickedLocation(coords);
    props.onLocation(coords);
  };

  const mapLocation = route?.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      props.onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <MapPreview style={styles.preview} location={pickedLocation}>
        <Text>No hay ubicación...</Text>
      </MapPreview>
      <Button
        title="Obtener Ubicación"
        color={COLORS.PEACH_PUFF}
        onPress={handlePickLocation}
      />
      <Button
        title="Seleccionar Ubicación"
        color={COLORS.PEACH_PUFF}
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageSelector;