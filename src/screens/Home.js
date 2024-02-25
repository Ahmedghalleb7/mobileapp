import { View, Text } from 'react-native'
import React from 'react'
import ImagedCardView from "react-native-cardview";

export default function home() {
  return (
    <CardView
    stars={5}
    reviews={456}
    ratings={4.5}
    title="Yosemite"
    rightSideValue="$990"
    subtitle="California"
    leftSideValue="3 Days"
    backgroundColor="#ff6460"
    source={{
      uri: yosemite
    }}
  />
  )
}