import { View, Text } from 'react-native'
import React from 'react'
import './global.css';
import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const Index = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />
  }
  return <Redirect href="/welcome" />;
}

export default Index;