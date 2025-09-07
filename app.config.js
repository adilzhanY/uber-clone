// Dynamic Expo config to inject the Google Maps API key at build time.
// Make sure you have EXPO_PUBLIC_GOOGLE_API_KEY defined in your .env file.
import 'dotenv/config';

/** @type {import('@expo/config').ExpoConfig} */
export default ({ config }) => {
  return {
    ...config,
    extra: {
      ...(config.extra || {}),
      expoPublicGoogleApiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY || ''
    },
    android: {
      ...config.android,
      config: {
        ...(config.android?.config || {}),
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY || ''
        }
      }
    }
  };
};
