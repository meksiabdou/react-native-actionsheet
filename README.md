# @meksiabdou/react-native-actionsheet

![bundlephobia](https://badgen.net/bundlephobia/minzip/@meksiabdou/react-native-actionsheet)
![downloads](https://badgen.net/npm/dt/@meksiabdou/react-native-actionsheet)
![npm](https://badgen.net/npm/v/@meksiabdou/react-native-actionsheet)
![license](https://badgen.net/github/license/meksiabdou/react-native-actionsheet)
[![Known Vulnerabilities](https://snyk.io/test/github/meksiabdou/react-native-actionsheet/badge.svg?targetFile=package.json)](https://snyk.io/test/github/meksiabdou/react-native-actionsheet?targetFile=package.json)

Cross platform ActionSheet.

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <p>Theme ios (Light mode)</p>
        <img width="210" src="https://user-images.githubusercontent.com/16627410/194773529-71947252-0654-483e-97a7-3d7c65ec0778.png">
      </td>
      <td align="center" valign="top">
        <p>Theme ios (Dark mode)</p>
        <img width="210" src="https://user-images.githubusercontent.com/16627410/194773736-4d020b46-8c90-4ce8-93cd-5de185dc5fc3.png">
      </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
     <td align="center" valign="top">
        <p>Theme flat (Light mode)</p>
        <img width="210" src="https://user-images.githubusercontent.com/16627410/194773650-50c0d825-ebda-424a-bfd3-72f37790b347.png">
      </td>
      <td align="center" valign="top">
        <p>Theme flat (Dark mode)</p>
        <img width="210" src="https://user-images.githubusercontent.com/16627410/194773716-9a43aab4-a7ac-4fb5-ae7a-70bf0d32b161.png">
      </td>
    </tr>
  </tbody>
</table>

## Requirements

- [react-native-reanimated v2.5.0 or higher](https://github.com/software-mansion/react-native-reanimated)

## Installation

```sh
npm install @meksiabdou/react-native-actionsheet
```

```sh
yarn add @meksiabdou/react-native-actionsheet
```

## Usage

```tsx
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
  <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>Audi</Text>,
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
        styles={{ title: { fontFamily: 'lucida grande', fontSize: 14 } }}
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
```

### Switch Props

| name            | type              | default   |
| --------------- | ----------------- | --------- |
| ref             | any               | null      |
| options         | Array             | undefined |
| onPress         | function          | undefined |
| title           | string            | undefined |
| message         | string            | undefined |
| theme           | string            | ios       |
| darkMode        | boolean           | false     |
| styles          | ActionSheetStyles | undefined |
| CancelComponent | ReactNode         | undefined |
| HeaderComponent | ReactNode         | undefined |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
