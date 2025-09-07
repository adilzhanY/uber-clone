import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";
import { useLocationStore } from '@/store';
import { calculateRegion } from '@/lib/map';

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude
  } = useLocationStore();
  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude
  })
  return (
    <View className='rounded-full'>
      <MapView
        provider={PROVIDER_DEFAULT}
        className='w-full h-full rounded-2xl'
        tintColor="black"
        mapType="standard"
        showsPointsOfInterest={false}
        // initialRegion={region}
        showsUserLocation={true}
        userInterfaceStyle='light'
      >
        <Text className='text-5xl'>
          HEllloooooofasdfadfasdfasdfasdfdfasdfadfasdfasdfasdfasdfasdfasdfasdfsdadfasdfasdfasdfas
        </Text>
      </MapView>
    </View>
  )
}

export default Map