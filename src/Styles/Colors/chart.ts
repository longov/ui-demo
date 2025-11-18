import Colors from './colors';

export enum EChart {
  'CHART_INCREASE' = 'CHART_INCREASE',
  'CHART_DECREASE' = 'CHART_DECREASE',
}

export const BORDER_COLORS = {
  dark: {
    [EChart.CHART_DECREASE]: Colors.red_70,
    [EChart.CHART_INCREASE]: Colors.green_70,
  },
  light: {
    [EChart.CHART_INCREASE]: Colors.green_70,
    [EChart.CHART_DECREASE]: Colors.red_70,
  },
};
