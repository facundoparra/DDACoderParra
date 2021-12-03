import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Products({ route }) {
  const filteredCategoryBreads = useSelector(state => state.breads.filteredBreads);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => { 
    // dispatch para actualizar los filteredBreads
  }, [category]);

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
