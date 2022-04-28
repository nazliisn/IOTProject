import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f5bebd',
    flex: 1,
  },

  firstColumn: {
    flex: 1 / 3,
    padding: 20,
    flexDirection: 'column',
    width: Dimensions.get('window').width / 5,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  secondColumn: {
    padding: 20,
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    bottom: 130,
    marginLeft: 20,
  },
  auto: {
    flex: 1 / 3,
    bottom: 20,
    right: 40,
    alignContent: 'center',
    alignSelf: 'center',
  },
});
