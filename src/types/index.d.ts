import type { ReactChild, ReactNode } from 'react';
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
  onPress?: () => void;
}

export interface ActionSheetRef {
  current?: {
    show?: Function;
    hide?: Function;
  }
}
