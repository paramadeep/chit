import * as ReactNative from 'react-native';

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'ios',
        Version: 123,
        isTesting: true,
        select: objs => objs.ios,
      },
      NativeModules: {
        SettingsManager: {
          clientUniqueId: 'testId',
        },
      },
    },
    ReactNative,
  );
});
