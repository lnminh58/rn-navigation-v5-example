// @refresh reset
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { useSpring, animated } from 'react-spring/native';

const AnimatedView = animated(View);

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#222f3e',
  },
  detailText: {
    fontSize: 20,
    color: '#c8d6e5',
    lineHeight: 30,
  },
  btnToggle: {
    marginTop: 10,
  },
  txtToggle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#8395a7',
    alignSelf: 'flex-end',
  },
});

const Collapsible = ({
  isExpanded,
  alwayShowNumberOfLines,
  lineHeight,
  textStyle,
  children,
  onPressButton,
  openText,
  closeText,
  headerComponent,
  containerStyle,
  buttonContainerStyle,
  buttonTextStyle,
  buttonTranslateX,
}) => {
  const fixedContentHeight = alwayShowNumberOfLines * lineHeight;

  const [textHeight, setTextHeight] = useState(0);

  const { translateX, height } = useSpring({
    translateX: !isExpanded ? 0 : buttonTranslateX,
    height: isExpanded ? textHeight : Math.min(textHeight, fixedContentHeight),
    from: {
      translateX: !isExpanded ? buttonTranslateX : 0,
      height: isExpanded
        ? Math.min(textHeight, fixedContentHeight)
        : textHeight,
    },
    config: { duration: 250 },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {headerComponent}
      <AnimatedView style={[{ height }, { overflow: 'hidden' }]}>
        <Text
          onLayout={({ nativeEvent }) => {
            setTextHeight(nativeEvent.layout.height);
          }}
          style={[styles.detailText, textStyle]}
        >
          {children}
        </Text>
      </AnimatedView>
      <TouchableWithoutFeedback onPress={onPressButton}>
        <AnimatedView
          style={[
            { transform: [{ translateX }] },
            styles.btnToggle,
            buttonContainerStyle,
          ]}
        >
          <Text style={[styles.txtToggle, buttonTextStyle]}>
            {!isExpanded ? openText : closeText}
          </Text>
        </AnimatedView>
      </TouchableWithoutFeedback>
    </View>
  );
};

Collapsible.defaultProps = {
  children: 'Et, labore.',
  alwayShowNumberOfLines: 2,
  lineHeight: 30,
  buttonTranslateX: screenWidth / 2 - 70,
  openText: 'Read more...',
  closeText: 'View less',
};

export default Collapsible;
