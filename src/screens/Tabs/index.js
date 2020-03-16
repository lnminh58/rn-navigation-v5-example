import React from 'react';
import {
  FlatList,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'rn-collapsing-tab-bar';

import styles from './styles';

const containerHeight = Dimensions.get('window').height;

const generateData = n =>
  new Array(n).fill(0).map((item, idx) => ({ id: (idx + 1).toString() }));

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsHeight: [containerHeight, containerHeight],
    };
  }

  measureTabHeight = index => event => {
    const { tabsHeight } = this.state;
    const newTabsHeight = tabsHeight.map((oldValue, idx) =>
      (idx === index
        ? Math.max(event.nativeEvent.layout.height, containerHeight - 120)
        : oldValue),);

    this.setState({
      tabsHeight: newTabsHeight,
    });
  };

  collapsableComponent = () => (
    <View style={styles.bgHeaderContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/',
          }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.txtIntroduce}>Adipisicing elit. Facere, ex.</Text>
    </View>
  );

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerIcon}>
          <Image
            source={require('@/assets/img/arrow-left.png')}
            style={{ tintColor: '#ffffff' }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderRowItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.txtContent}>{item.id}</Text>
    </View>
  );

  render() {
    const { tabsHeight } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView
          collapsableBar={this.collapsableComponent()}
          initialPage={0}
          tabContentHeights={tabsHeight}
          scrollEnabled
          prerenderingSiblingsNumber={Infinity}
          renderTabBar={() => (
            <DefaultTabBar
              inactiveTextColor="#95a5a6"
              activeTextColor="#ecf0f1"
              backgroundColor="#34495e"
              underlineStyle={{
                backgroundColor: '#ff6b6b',
              }}
            />
          )}
          onChangeTab={({ i }) => console.log(i)}
          style={{ backgroundColor: 'white' }}
        >
          <View onLayout={this.measureTabHeight(0)} tabLabel="Tab 1">
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{ paddingVertical: 20 }}
              data={generateData(50)}
              keyExtractor={item => item.id}
              renderItem={this.renderRowItem}
            />
          </View>
          <View onLayout={this.measureTabHeight(1)} tabLabel="Tab 2">
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{ paddingVertical: 20 }}
              data={generateData(3)}
              keyExtractor={item => item.id}
              renderItem={this.renderRowItem}
            />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
