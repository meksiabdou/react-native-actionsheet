import { Platform, StyleSheet } from 'react-native';

const Styles = {
  default: StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: 0.4,
      backgroundColor: '#000',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: 15,
      borderBottomWidth: 1,
      marginTop: 10,
    },
    title: {
      fontSize: 14,
      marginBottom: 2,
      textAlign: 'center',
    },
    message: {
      fontSize: 12,
      marginBottom: 2,
      textAlign: 'center',
    },
    model: {
      flex: 1,
    },
    body: {
      flex: 1,
      position: 'absolute',
      bottom: Platform.OS === 'ios' ? 30 : 20,
      left: 0,
      right: 0,
      zIndex: 9999,
    },
    children: {
      flex: 1,
    },
    viewTop: {
      //paddingTop: 10,
      borderRadius: 10,
    },
    viewBottom: {
      marginTop: 6,
      borderRadius: 10,
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 240,
    },
    optionItem: {
      height: 50,
      justifyContent: 'center',
      borderBottomWidth: 1,
    },
    optionItemText: {
      textAlign: 'center',
      fontSize: 18,
    },
    cancelItem: {
      borderBottomWidth: 0,
    },
    cancelItemText: {},
  }),
  ios: StyleSheet.create({
    body: {},
    children: {
      paddingHorizontal: 15,
    },
    viewTop: {
      borderRadius: 10,
    },
    viewBottom: {
      marginTop: 6,
      borderRadius: 10,
    },
    cancelItem: {},
  }),
  flat: StyleSheet.create({
    body: {
      bottom : 0,
    },
    children: {
      paddingHorizontal: 0,
    },
    viewTop: {
      borderRadius: 0,
    },
    viewBottom: {
      marginTop: 0,
      paddingBottom: 25,
      borderRadius: 0,
    },
    cancelItem: {
      borderTopWidth: 2,
    },
  }),
  dark: StyleSheet.create({
    header: {
      borderColor: '#444b',
    },
    title: {
      color: '#a4a4A4',
    },
    message: {
      color: '#a4a4A4',
    },
    viewTop: {
      backgroundColor: Platform.OS === 'ios' ? '#DCDCDE55' : '#2C2C2E',
    },
    viewBottom: {
      backgroundColor: '#2C2C2E',
    },
    optionItem: {
      borderColor: '#444b',
    },
    optionItemText: {
      color: '#4793FF',
    },
    cancelItemText: {
      color: '#4793FF',
    },
  }),
  light: StyleSheet.create({
    header: {
      borderColor: '#dddb',
    },
    title: {
      color: '#7c7c7c',
    },
    message: {
      color: '#7c7c7c',
    },
    viewTop: {
      backgroundColor: Platform.OS === 'ios' ? '#fffb' : '#fffd',
    },
    viewBottom: {
      backgroundColor: '#fff',
    },
    optionItem: {
      borderColor: '#dddb',
    },
    optionItemText: {
      color: '#007AFF',
    },
    cancelItemText: {
      color: '#007AFF',
    },
  }),
};

export default Styles;
