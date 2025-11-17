import { NitroModules } from 'react-native-nitro-modules';
import type { SdkUi } from './SdkUi.nitro';

import './unistyles';
import { Typography } from './components/Typography';

const SdkUiHybridObject = NitroModules.createHybridObject<SdkUi>('SdkUi');

export function multiply(a: number, b: number): number {
  return SdkUiHybridObject.multiply(a, b);
}

export { Typography };
