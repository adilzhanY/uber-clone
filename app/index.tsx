import { View, Text } from 'react-native'
import React from 'react'
import './global.css';
import { Redirect } from 'expo-router';

const Index = () => {
  return <Redirect href="/welcome" />;
}

export default Index;