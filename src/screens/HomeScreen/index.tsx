/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
// import { useProductsQuery } from '../../hooks/useProductsQuery ';
import {useDispatch} from 'react-redux';
import {useProductsQuery, setQuery} from '../../redux/reducers/productsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const {isLoading, isError, data, error} = useProductsQuery();

  const handleSearchButtonPress = () => {
    dispatch(setQuery(productName));
  };

  return (
    <View style={styles.container}>
      <TextInput autoFocus placeholder="Digite nome ou código de barras" />
      <Button
        label={'Pesquisar'}
        icon={'search'}
        onPress={handleSearchButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3366ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
