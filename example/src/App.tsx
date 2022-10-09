import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
} from '@meksiabdou/react-native-actionsheet';

const options = [
  'Apple',
  'Banana',
  'Watermelon',
  <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>
    Durian
  </Text>,
];
const title = 'Which one do you like ?';
const message =
  'In botany, a fruit is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering.';

export default function App() {
  const colorScheme = useColorScheme();
  const actionSheetRef = React.useRef<ActionSheetRef>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (actionSheetRef?.current) {
            actionSheetRef.current.show()
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
        darkMode={colorScheme === 'dark'}
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
