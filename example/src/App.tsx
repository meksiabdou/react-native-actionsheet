import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Platform,
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
} from '@meksiabdou/react-native-actionsheet';

const options = [
  'Volvo',
  'Saab',
  'Mercedes',
  <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>
    Audi
  </Text>,
];
const title = 'Please choose your favorite car';
const message = 'Cars list';

export default function App() {
  const colorScheme = useColorScheme();
  const actionSheetRef = React.useRef<ActionSheetRef>(null);

  /*const HeaderComponent = () => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{message}</Text>
      </View>
    );
  };*/

  /*const CancelComponent = () => {
    return (<Text>Cancel</Text>);
  };*/

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (actionSheetRef?.current) {
            actionSheetRef.current.show();
          }
        }}
      >
        <Text style={{ color: '#fff' }}>Action</Text>
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        options={options}
        title={title}
        message={message}
        //theme="flat"
        //HeaderComponent={HeaderComponent()}
        //CancelComponent={CancelComponent()}
        darkMode={colorScheme === 'dark'}
        onPress={(e) => {
          //actionSheetRef?.current?.hide();
          console.log(Platform.OS, e);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#000ffc',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
