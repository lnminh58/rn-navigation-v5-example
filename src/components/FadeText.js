// @refresh reset
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useSpring, animated } from 'react-spring/native';

const AnimatedView = animated(View);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f0932b',
    alignSelf: 'flex-end',
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffbe76',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#535c68',
    elevation: 5,
  },
});

const FadeText = () => {
  const [flip, setFlip] = useState(true);

  const { opacity, translateX, height } = useSpring({
    // opacity: flip ? 1 : 0,
    translateX: flip ? 0 : 150,
    height: flip ? 50 : 200,
    from: {
      // opacity: flip ? 0 : 1,
      translateX: flip ? 150 : 0,
      height: flip ? 200 : 0,
    },
    config: { duration: 250 },
  });

  return (
    <View style={styles.btnContainer}>
      <AnimatedView
        style={[
          {
            height,
            // opacity: opacity.interpolate(o => 1 - o)
          },
          {
            overflow: 'hidden',
          },
        ]}
      >
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil
          explicabo repellendus omnis quibusdam exercitationem fugiat dolores
          maiores a deserunt velit aut nisi cumque, sed vel quidem. Qui, est
          officia?
        </Text>
      </AnimatedView>
      <TouchableWithoutFeedback onPress={() => setFlip(!flip)}>
        <AnimatedView
          style={{
            transform: [{ translateX }],
            marginVertical: 10,
          }}
        >
          <Text style={styles.text}>{flip ? 'Read more...' : 'Close'}</Text>
        </AnimatedView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FadeText;
