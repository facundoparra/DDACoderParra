import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BREADS } from '../data/breads';

export default function Products({ route }) {
  const filteredCategoryBreads = BREADS.filter(bread => bread.category === route.params.itemID);
  console.log(filteredCategoryBreads)

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
    </View>
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
