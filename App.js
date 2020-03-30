import React from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet,TouchableOpacity  } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import MyHomeCompoment from './compoment/MyHomeCompoment';
import ActiveListCompoment from './compoment/ActiveListCompoment';
import CompeletedCompoment from './compoment/CompeletedCompoment';

export default function App() {

return (
<Router>
<Scene
  key="root"
  tabs
  tabBarStyle={{ backgroundColor: '#FFFFFF' }}
  labelStyle={{ fontSize: 16, marginBottom: 15 }}
>
  {/* Tab 'All' và các màn hình của nó */}
  <Scene key="All" tabBarLabel="All">
    <Scene
    key="MyHomeCompoment"
    component={MyHomeCompoment}
    hideNavBar
    />
  </Scene>
  {/* Tab 'Active' và các màn hình của nó */}
  <Scene key="Active" tabBarLabel="Active">
    <Scene
      key="ActiveList"
      component={ActiveListCompoment}
    hideNavBar
    />
  </Scene>
  {/* Tab 'Completed' và các màn hình của nó */}
  <Scene key="Completed" tabBarLabel="Completed">
    <Scene
      key="magenta"
      component={CompeletedCompoment}
    hideNavBar
    />
  </Scene>
</Scene>
</Router>
);
}
