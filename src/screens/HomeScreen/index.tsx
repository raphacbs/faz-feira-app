import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from 'react-query';
import * as Yup from 'yup';
import Form, {Field} from '../../components/Form';
import {searchProducts} from '../../services/api';
import {useDispatch} from 'react-redux';
import BarcodeButton from '../../components/BarcodeButton';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const fields: Field[] = [
    {
      name: 'search',
      label: '',
      rule: Yup.string().required(
        'Digite um código ou descrição do produto para pesquisar',
      ),
      placeholder: 'descrição ou código do produto',
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [doSearch, setDoSearch] = useState(false);

  const {data, isLoading, isError} = useQuery(
    ['products', searchValue],
    () => searchProducts(searchValue),
    {
      enabled: searchValue != '',
    },
  );

  const handleSubmit = (values: Record<string, string>) => {
    console.log('Form submitted with values:', values);
    setSearchValue(values.search);
  };

  useEffect(() => {
    data?.items && dispatch({type: 'SET_SEARCH_RESULTS', payload: data.items});
  }, [data]);

  function handleBarcodePress(): void {
    console.log('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Digite o nome do produto ou código de barras
      </Text>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonTitle="Pesquisar"
        isLoading={isLoading}
      />
      <Text style={styles.label}>Ou faça a leitura do código de barras</Text>
      <BarcodeButton onPress={handleBarcodePress} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {data?.items && (
            <FlatList
              data={data?.items}
              renderItem={({item}) => <Text>{item.description}</Text>}
              keyExtractor={item => item.code}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  label: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
