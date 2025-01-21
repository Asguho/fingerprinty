import { hash } from './utils.ts';
import { getNavigatorData } from './datapoints/navigator.ts';
import { getScreenData } from './datapoints/screen.ts';

export function getId(): number {
  return hash(JSON.stringify(getFingerprint()));
}
export function getFingerprint(): { [key: string]: any } {
  return {
    navigator: getNavigatorData(),
    screen: getScreenData(),
  };
}
