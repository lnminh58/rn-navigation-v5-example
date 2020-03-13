import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import Header from '@/components/Header';
import styles from './style';

const data = new Array(20)
  .fill(0)
  .map((item, idx) => ({ id: (idx + 1).toString() }));

class AnimateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBackground() {
    return (
      <View style={styles.bgHeaderContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1540547184829-84c9b874d511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.txtIntroduce}>Adipisicing elit. Facere, ex.</Text>
      </View>
    );
  }

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
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScroll
          renderHeader={({ height, animatedValue }) => (
            <Header
              // onPress={action('onPress Header')}
              height={height}
              withAvatar
              animatedValue={animatedValue}
            />
          )}
          headerHeight={250}
          parallaxHeight={250}
          isHeaderFixed
          headerFixedTransformY={170}
          headerFixedBackgroundColor="#ea8685"
          fadeOutParallaxBackground
          backgroundScale={5}
          parallaxBackgroundScrollSpeed={10}
        >
          <FlatList
            contentContainerStyle={{
              paddingVertical: 20,
              backgroundColor: 'white',
            }}
            data={data}
            keyExtractor={item => item.id}
            renderItem={this.renderRowItem}
          />
        </ParallaxScroll>
      </View>
    );
  }
}

export default AnimateHeader;
