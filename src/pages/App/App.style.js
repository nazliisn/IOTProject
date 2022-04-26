import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  firstColumn: {
    flex: 1,
    margin: 20,
    flex: 1,
    width: Dimensions.get('window').width / 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  up: {},
  down: {},
});
