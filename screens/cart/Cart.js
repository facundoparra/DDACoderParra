import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { confirmCart } from '../../store/actions/cart.actions';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const status = useSelector(state => state.cart.status);
  const orderID = useSelector(state => state.cart.orderID);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items));
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        {orderID && (
          <Text>Order confirmada! {orderID}</Text>
        )}
        {status === 'loading' 
          ? <ActivityIndicator color="black" size="large" />
          : (
            <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
              <Text>Confirmar</Text>
            </TouchableOpacity>
          )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
})

export default Cart;