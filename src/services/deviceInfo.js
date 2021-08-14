import {NativeModules, Platform} from 'react-native';

export const getDeviceId = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.clientUniqueId
    : NativeModules.PlatformConstants.fingerprint;
};
