/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainTabScreen from './src/screens/MainTabScreen/MainTabScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {QueryClientProvider, QueryClient} from 'react-query';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
      },
    },
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <MainTabScreen />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
