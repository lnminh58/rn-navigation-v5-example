import React, { Component } from 'react';
import { ScrollView, Image, View, TouchableOpacity } from 'react-native';

import { Collapsible, FlipCard } from '@/components';

import styles from './styles';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedTextCard: false,
      isExpandedImageCard: false,
      isFlipped: false,
    };
  }

  render() {
    const { isExpandedImageCard, isExpandedTextCard, isFlipped } = this.state;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.setState({ isFlipped: !isFlipped })}
        >
          <FlipCard
            containerStyle={styles.flipContainer}
            horizontal={false}
            flipped={isFlipped}
            duration={150}
            scaleValue={0.8}
            frontComponent={(
              <View style={styles.flipContentContainer}>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                  }}
                  style={styles.flipImage}
                  resizeMode="cover"
                />
              </View>
            )}
            backComponent={(
              <View style={styles.flipContentContainer}>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1552074283-b2de7daab9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                  }}
                  style={styles.flipImage}
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </TouchableOpacity>
        <Collapsible
          isExpanded={isExpandedTextCard}
          alwayShowNumberOfLines={1}
          onPressButton={() =>
            this.setState({ isExpandedTextCard: !isExpandedTextCard })}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          velit, nostrum odio corporis tempore mollitia ratione vel vitae
          delectus sint?
        </Collapsible>
        <Collapsible
          lineHeight={22}
          alwayShowNumberOfLines={2}
          closeText="View less"
          openText="View more"
          isExpanded={isExpandedImageCard}
          onPressButton={() =>
            this.setState({ isExpandedImageCard: !isExpandedImageCard })}
          containerStyle={styles.collapsibleContainer}
          buttonContainerStyle={styles.collapsibleButton}
          buttonTranslateX={0}
          textStyle={styles.collapsibleText}
          buttonTextStyle={styles.collapsibleButtonText}
          headerComponent={(
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1567272863708-a1d323a18561?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
              }}
              style={styles.collapsibleHeaderImage}
            />
          )}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
          laboriosam, ducimus autem in deserunt praesentium fugiat reiciendis ab
          minima explicabo reprehenderit consectetur, iure quod cum recusandae
          modi. Laboriosam, odio architecto?
        </Collapsible>
      </ScrollView>
    );
  }
}

export default index;
