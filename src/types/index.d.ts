import type { MutableRefObject, ReactChild, ReactNode } from 'react';
import type { StyleProp } from 'react-native';

export interface ActionSheetProps {
  ref?: any;
  options?: Array<String | ReactChild>;
  title?: String | ReactNode;
  message?: String | ReactNode;
  theme?: 'flat' | 'ios';
  CancelComponent?: ReactNode;
  HeaderComponent?: ReactNode;
  styles?: StyleProp;
  darkMode?: boolean;
  onPress?: (e?: {index : number, element : String | ReactChild}) => void;
}

export type ActionSheetRef = {
  show: () => void;
  hide: () => void;
} | null;
