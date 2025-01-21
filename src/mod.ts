import { hash } from './utils.ts';
import { getNavigatorData } from './datapoints/navigator.ts';
import { getScreenData } from './datapoints/screen.ts';
/**
 * Retrieves a unique identifier based on the fingerprint object.
 */
export function getId(): number {
  return hash(JSON.stringify(getFingerprint()));
}
/**
 * Retrieves a fingerprint object containing various data points.
 */
export function getFingerprint(): { [key: string]: any } {
  return {
    navigator: getNavigatorData(),
    screen: getScreenData(),
  };
}
