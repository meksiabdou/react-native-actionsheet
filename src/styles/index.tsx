import { Platform, StyleSheet } from 'react-native';

const Styles = {
  default : StyleSheet.create({
    overlay: {
      position: 'absolute',
      top:0,
      right:0,
      left: 0,
      bottom: 0,
      opacity: 0.4,
      backgroundColor: '#000',
    },
    header : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    title : {
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
      bottom: 50,
      left: 0,
      right: 0,
      zIndex: 9999,
    },
    children: {
      flex: 1,
      paddingHorizontal: 20,
    },
    viewTop : {
      paddingTop: 10,
      borderRadius: 10,
    },
    viewBottom: {
      marginTop: 6,
      borderRadius: 10,
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 260,
    },
    optionItem: {
      height: 50,
      justifyContent: 'center',
      borderTopWidth: 1,
    },
    optionItemText: {
      textAlign: 'center',
      fontSize: 18,
    },
    cancelItem: {
      borderTopWidth: 0,
    },
    cancelItemText: {
    }
  }),
  dark: StyleSheet.create({
    title : {
      color: "#a4a4A4",
    },
    message: {
      color: "#a4a4A4",
    },
    viewTop : {
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
    }
  }),
  light: StyleSheet.create({
    title : {
      color: "#7c7c7c",
    },
    message: {
      color: "#7c7c7c",
    },
    viewTop: {
      backgroundColor: '#fffb',
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
    }
  }),
};

export default Styles;
