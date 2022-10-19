import type { MutableRefObject, ReactChild, ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';

export interface ActionSheetStyles {
  title?: TextStyle;
  message?: TextStyle;
  children?: ViewStyle;
  optionText?: TextStyle;
  cancelText?: TextStyle;
};
export interface ActionSheetProps {
  ref?: any;
  options?: Array<String | ReactChild>;
  title?: String | ReactNode;
  message?: String | ReactNode;
  theme?: 'flat' | 'ios';
  CancelComponent?: ReactNode;
  CancelComponentText?: ReactNode;
  HeaderComponent?: ReactNode;
  styles?: ActionSheetStyles;
  darkMode?: boolean;
  androidStatusBarTranslucent?: boolean;
  androidHardwareAccelerated?: boolean;
  onPress?: (e?: { index: number; element: String | ReactChild }) => void;
}

export type ActionSheetRef = {
  show: () => void;
  hide: () => void;
} | null;
