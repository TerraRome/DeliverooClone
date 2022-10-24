import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

//React Navigation
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView>

      {/* Header */}
      <View className="flex-row p-2 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="text-gray-400 font-bold text-xs">
            Delivery Now!
          </Text>
          <Text className="text-black font-bold text-xl">Current Location</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}