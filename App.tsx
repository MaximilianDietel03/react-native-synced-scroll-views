import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SyncedScrollView } from './src/components/SyncedScrollView';
import { SyncedScrollViewContext, syncedScrollViewState } from './src/contexts/SyncedScrollViewContext';

// ----------------------------------------------------------------------------

const App = () => {
  return (
    <SyncedScrollViewContext.Provider value={syncedScrollViewState}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          barStyle="dark-content"
        />
        <SyncedScrollView
          id={0}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Content width={75} backgroundColor='red' />
        </SyncedScrollView>
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <SyncedScrollView
            id={1}
            showsVerticalScrollIndicator={false}
          >
            <Content height={75} backgroundColor='blue' />
          </SyncedScrollView>
          <SyncedScrollView
            id={2}
            showsVerticalScrollIndicator={false}
          >
            <Content height={125} backgroundColor='green' />
          </SyncedScrollView>
        </View>
      </SafeAreaView>
    </SyncedScrollViewContext.Provider>
  );
};

const Content = ({ backgroundColor, height, width }: { backgroundColor: string, height?: number, width?: number }) => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <View key={i} style={{ height, width, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'white', backgroundColor }}>
          <Text style={{ color: 'white' }}>{i}</Text>
        </View>
      ))}
    </>
  )
};

export default App;
