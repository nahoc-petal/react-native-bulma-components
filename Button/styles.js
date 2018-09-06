import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#363636',
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  normal: {
    fontSize: 16,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 24,
  },
  primary: {
    backgroundColor: '#00d1b2',
    borderColor: 'transparent',
  },
  rounded: {
    borderRadius: 100,
  },
  fullWidth: {
    width: '100%',
  },
  white: {
    color: 'white',
  },
  black: {
    color: '#363636',
  },
  disabled: {
    opacity: 0.4,
  },
  textDisabled: {
    opacity: 0.8,
  },
  loading: {
    opacity: 0.8,
  }
});

export default styles;