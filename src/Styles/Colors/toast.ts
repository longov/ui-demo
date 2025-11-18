import Colors from './colors';

export enum EToast {
  'TOAST_FILL' = 'TOAST_FILL',
}

export const TOAST = {
  dark: {
    [EToast.TOAST_FILL]: Colors.gray_90,
  },
  light: {
    [EToast.TOAST_FILL]: Colors.white_a100,
  },
};
