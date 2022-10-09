import type { MutableRefObject, ReactChild, ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';

export interface ActionSheetProps {
  ref?: any;
  options?: Array<String | ReactChild>;
  title?: String | ReactNode;
  message?: String | ReactNode;
  theme?: 'flat' | 'ios';
  CancelComponent?: ReactNode;
  titleTextStyle?: TextStyle;
  messageTextStyle?: TextStyle;
  cancelTextStyle?: TextStyle;
  optionTextStyle?: TextStyle;
  HeaderComponent?: ReactNode;
  childrenStyles?: ViewStyle;
  darkMode?: boolean;
  onPress?: (e?: {index : number, element : String | ReactChild}) => void;
}

export type ActionSheetRef = {
  show: () => void;
  hide: () => void;
} | null;
