import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bgHeaderContainer: {
    backgroundColor: '#ea8685',
    padding: 20,
    height: 230,
  },
  avatarContainer: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  avatar: {
    resizeMode: 'cover',
    width: 144,
    height: 144,
    borderRadius: 72,
  },
  txtIntroduce: {
    fontSize: 17,
    color: '#dfe6e9',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  headerIcon: {
    padding: 5,
    width: 20,
    height: 20,
  },

  itemContainer: {
    backgroundColor: '#00cec9',
    marginHorizontal: 20,
    marginVertical: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },

  txtContent: {
    fontSize: 17,
    color: '#dfe6e9',
    fontWeight: 'bold',
  },
});

export default styles;
