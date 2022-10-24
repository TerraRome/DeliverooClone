import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'

//React Navigation
import { useNavigation } from '@react-navigation/native'

//Heroicons
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

//Components
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-white pt-2">

      {/* Header */}
      <View className="flex-row p-2 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">
            Delivery Now!
          </Text>
          <View className="flex-row items-end">
            <Text className="text-black font-bold text-xl">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 items-center px-2">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            className="text-black"
            placeholderTextColor={'gray'}
            placeholder="Restaurants and cuisines"
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
          flexGrow: 1
        }}
        className="bg-gray-100"
      >

        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placement from our partners"
          featuredCategory="featured"
        />

        {/* Tasty Discount */}
        <FeaturedRow
          id="1234"
          title="Tasty Discount"
          description="Everyone's been enjoting these juicy discounts!"
          featuredCategory="discounts"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurants tonight!"
          featuredCategory="offers"
        />

      </ScrollView>


    </SafeAreaView>
  )
}