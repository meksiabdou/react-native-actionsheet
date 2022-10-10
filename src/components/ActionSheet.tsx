import React, {
  forwardRef,
  useEffect,
  useState,
  isValidElement,
  useCallback,
} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import Styles from '../styles';
import type { ActionSheetProps, ActionSheetRef } from '../types';
import useLayout from '../hooks/useLayout';

const ActionSheet = forwardRef<ActionSheetRef, ActionSheetProps>(
  (props: ActionSheetProps, ref: any) => {
    const {
      options,
      title,
      message,
      HeaderComponent,
      CancelComponent,
      CancelComponentText,
      darkMode,
      theme,
      styles: customStyles,
      onPress,
    } = props;

    const configSpring = {
      damping: 15,
      stiffness: 120,
      //duration: 200,
    };

    const configTiming = {
      duration: 300,
    };

    const { height } = useLayout();

    const [styles, setStyles] = useState(Styles.light);
    const [stylesTheme, setStylesTheme] = useState(Styles.ios);

    const translateY = useSharedValue<number>(height);
    const opacity = useSharedValue<number>(0);

    const [visible, setVisible] = useState(false);

    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: translateY.value,
          },
        ],
      };
    });

    const styleAnimationOverlay = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      };
    });

    const updateVisible = () => {
      setVisible(false);
    };

    const show = () => {
      setVisible(true);
      if (theme === 'flat') {
        translateY.value = withTiming(0, configTiming);
        opacity.value = withTiming(0.4, configTiming);
      } else {
        translateY.value = withSpring(0, configSpring);
        opacity.value = withSpring(0.4, configSpring);
      }
    };

    const hide = () => {
      translateY.value = withTiming(height, { duration: 200 }, (isFinished) => {
        if (isFinished) {
          opacity.value = withSpring(0, configSpring);
          runOnJS(updateVisible)();
        }
      });
      //setVisible(false);
    };

    const Header = useCallback((): JSX.Element => {
      if (isValidElement(HeaderComponent)) {
        return (
          <View style={[Styles.default.header, styles.header]}>
            {HeaderComponent}
          </View>
        );
      } else if (title || message) {
        return (
          <View style={[Styles.default.header, styles.header]}>
            {title ? (
              <Text
                style={[
                  Styles.default.title,
                  styles.title,
                  customStyles?.title,
                ]}
              >
                {title}
              </Text>
            ) : (
              <View />
            )}
            {message ? (
              <Text
                style={[
                  Styles.default.message,
                  styles.message,
                  customStyles?.message,
                ]}
              >
                {message}
              </Text>
            ) : (
              <View />
            )}
          </View>
        );
      }
      return <View />;
    }, [
      customStyles?.title,
      customStyles?.message,
      HeaderComponent,
      styles,
      title,
      styles,
    ]);

    useEffect(() => {
      if (ref) {
        ref.current = {
          show,
          hide,
        };
      }
    }, [ref, theme]);

    useEffect(() => {
      if (darkMode) {
        setStyles(Styles.dark);
      } else {
        setStyles(Styles.light);
      }
    }, [darkMode]);

    useEffect(() => {
      if (theme === 'flat') {
        setStylesTheme(Styles.flat);
      } else {
        setStylesTheme(Styles.ios);
      }
    }, [theme]);

    const ViewTop = (ViewTopProps: any) => {
      /*if (Platform.OS === 'android') {
        delete ViewTopProps?.blurType;
        delete ViewTopProps?.blurAmount;
        return <View {...ViewTopProps} />;
      }*/
      return <View {...ViewTopProps} />;
      // return <BlurView {...ViewTopProps} />;
    };

    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType={'none'}
        supportedOrientations={[
          'portrait',
          'landscape',
          'landscape-left',
          'landscape-right',
          'portrait-upside-down',
        ]}
        presentationStyle="overFullScreen"
        onRequestClose={hide}
      >
        <Reanimated.View
          style={[Styles.default.overlay, styleAnimationOverlay]}
        />
        <View style={Styles.default.model}>
          <Reanimated.View
            style={[Styles.default.body, stylesTheme.body, styleAnimation]}
          >
            <View
              style={[
                Styles.default.children,
                stylesTheme.children,
                customStyles?.children,
              ]}
            >
              <ViewTop
                //blurType={darkMode ? 'prominent' : 'light'}
                //blurAmount={30}
                style={[
                  Styles.default.viewTop,
                  styles.viewTop,
                  stylesTheme.viewTop,
                ]}
              >
                <View>
                  <Header />
                  <ScrollView style={[Styles.default.options]}>
                    {Array.isArray(options)
                      ? options.map((item, index) => {
                          return (
                            <TouchableOpacity
                              key={index}
                              activeOpacity={0.8}
                              onPress={() =>
                                onPress?.({ index, element: item })
                              }
                              style={[
                                Styles.default.optionItem,
                                styles.optionItem,
                                options.length === index + 1
                                  ? { borderBottomWidth: 0 }
                                  : {},
                              ]}
                            >
                              {isValidElement(item) ? (
                                item
                              ) : (
                                <Text
                                  style={[
                                    Styles.default.optionItemText,
                                    styles.optionItemText,
                                    customStyles?.optionText,
                                  ]}
                                >
                                  {item}
                                </Text>
                              )}
                            </TouchableOpacity>
                          );
                        })
                      : null}
                  </ScrollView>
                </View>
              </ViewTop>
              <View
                style={[
                  Styles.default.viewBottom,
                  styles.viewBottom,
                  stylesTheme.viewBottom,
                ]}
              >
                <View style={[Styles.default.options]}>
                  {isValidElement(CancelComponent) ? (
                    CancelComponent
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={hide}
                      style={[
                        Styles.default.optionItem,
                        Styles.default.cancelItem,
                        styles.optionItem,
                        stylesTheme.cancelItem,
                      ]}
                    >
                      {isValidElement(CancelComponentText) ? (
                        CancelComponentText
                      ) : (
                        <Text
                          style={[
                            Styles.default.cancelItemText,
                            Styles.default.optionItemText,
                            styles.cancelItemText,
                            customStyles?.cancelText,
                          ]}
                        >
                          Cancel
                        </Text>
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </Reanimated.View>
        </View>
      </Modal>
    );
  }
);

ActionSheet.defaultProps = {};

export default ActionSheet;
