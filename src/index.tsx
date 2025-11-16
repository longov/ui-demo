import { NitroModules } from 'react-native-nitro-modules';
import type { SdkUi } from './SdkUi.nitro';

const SdkUiHybridObject =
  NitroModules.createHybridObject<SdkUi>('SdkUi');

export function multiply(a: number, b: number): number {
  return SdkUiHybridObject.multiply(a, b);
}
