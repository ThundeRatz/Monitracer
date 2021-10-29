import {StyleSheet} from 'react-native';;
import {COLORS} from '../components/colors';

const imageBackgroundStyle = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.thunderBlue,
  },
});

export {imageBackgroundStyle};
