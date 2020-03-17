import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  collapsibleContainer: {
    backgroundColor: '#10ac84',
    borderRadius: 5,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  collapsibleText: {
    textAlign: 'justify',
    color: '#f3f3f3',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 22,
    marginHorizontal: 10,
  },
  collapsibleButtonText: {
    color: '#f0f0f0',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 20,
  },
  collapsibleButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  collapsibleHeaderImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  flipContainer: {
    margin: 10
  },
  flipContentContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  flipImage: {
    height: 250,
    width: '100%',
    borderRadius: 5,
  },
});

export default styles;
