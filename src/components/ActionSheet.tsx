import React, { forwardRef, useEffect, useState, isValidElement } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import Styles from '../styles';
import type { ActionSheetProps, ActionSheetRef } from '../types';

const ActionSheet = forwardRef((props: ActionSheetProps, ref: any) => {
  const {
    options,
    title,
    message,
    HeaderComponent,
    CancelComponent,
    darkMode,
    onPress,
  } = props;

  const [styles, setStyles] = useState(Styles.light);

  const translateY = useSharedValue(0);

  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  //const show = () => {};

  //const hide = () => {};

  const Header = (): JSX.Element => {
    if (HeaderComponent) {
      return HeaderComponent as any;
    } else if (title || message) {
      return (
        <View style={Styles.default.header}>
          <Text style={[Styles.default.title, styles.title]}>{title}</Text>
          <Text style={[Styles.default.message, styles.message]}>{message}</Text>
        </View>
      );
    }
    return <View />;
  };

  useEffect(() => {}, [(ref as ActionSheetRef)?.current]);

  useEffect(() => {
    if (darkMode) {
      setStyles(Styles.dark);
    } else {
      setStyles(Styles.light);
    }
  }, [darkMode]);

  return (
    <Modal
      visible={true}
      transparent={true}
      animationType={'none'}
      supportedOrientations={['portrait']}
      presentationStyle="overFullScreen"
    >
      <View style={[Styles.default.overlay]} />
      <View style={Styles.default.model}>
        <Reanimated.View style={[Styles.default.body, styleAnimation]}>
          <View style={Styles.default.children}>
            <BlurView
              blurType={darkMode ? 'prominent' : 'light'}
              blurAmount={30}
              style={[Styles.default.viewTop, styles.viewTop]}
            >
              <Header />
              <ScrollView style={[Styles.default.options]}>
                {Array.isArray(options)
                  ? options.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          activeOpacity={0.8}
                          onPress={onPress}
                          style={[Styles.default.optionItem, styles.optionItem]}
                        >
                          {isValidElement(item) ? (
                            item
                          ) : (
                            <Text style={[Styles.default.optionItemText, styles.optionItemText]}>{item}</Text>
                          )}
                        </TouchableOpacity>
                      );
                    })
                  : null}
              </ScrollView>
            </BlurView>
            <View style={[Styles.default.viewBottom, styles.viewBottom]}>
              <View style={[Styles.default.options]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={onPress}
                  style={[Styles.default.optionItem, Styles.default.cancelItem, styles.optionItem]}
                >
                  {isValidElement(CancelComponent) ? (
                    CancelComponent
                  ) : (
                    <Text
                      style={[Styles.default.cancelItemText, Styles.default.optionItemText, styles.cancelItemText]}
                    >
                      Cancel
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Reanimated.View>
      </View>
    </Modal>
  );
});

ActionSheet.defaultProps = {};

export default ActionSheet;
