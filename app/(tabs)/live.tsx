import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import AntDesign from '@expo/vector-icons/AntDesign';

function LiveScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/lettering.png')}
        style={styles.image}
      />
      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', }}>Published Lottery Result</ThemedText>
      <ThemedText style={{ fontSize: 14, }}>Draw: 20 July 2024 at 4:10 pm</ThemedText>
      <ThemedText style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-end' }}>Ticket Is Open</ThemedText>
      <ThemedText style={{ fontSize: 14, alignSelf: 'flex-end' }}>End: 18 July 2024 at 4:10 pm</ThemedText>
      <ThemedText style={{ marginTop: 10, fontSize: 15, }}>Live draw will start soon. Get ready to join the live for the current lottery</ThemedText>
      <ThemedText style={{ fontSize: 16, }}>Time Remaining - 2D 1H 20M 20S</ThemedText>
      <ThemedView style={styles.liveView}>
        <TouchableOpacity style={styles.playButton}>
          <AntDesign name="play" size={56} color="#FF3742" />
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

function SellsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/coupon.png')}
        style={styles.image2}
      />
      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Recent Sell Tickets</ThemedText>
      {[...Array(3)].map((_, index) => (
        <ThemedView key={index} style={styles.card}>
          <ThemedView style={styles.cardContent}>
            <ThemedText style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 10, marginTop: 10 }}>S5692KL</ThemedText>
            <ThemedText style={{ marginRight: 10, marginTop: 10, color: 'white' }}>6m ago</ThemedText>
          </ThemedView>
          <ThemedText style={{ fontSize: 14, color: 'white', marginLeft: 10 }}>Ashulia, Dhaka, Bangladesh</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { paddingTop: insets.top },
        tabBarIndicatorStyle: { backgroundColor: '#D94F72' },
      }}
    >
      <Tab.Screen name="Live On" component={LiveScreen} />
      <Tab.Screen name="Recent Sells" component={SellsScreen} />
    </Tab.Navigator>
  );
}

// Main App Component
export default function MainApp() {
  return (
    // Assuming you already have a NavigationContainer at the root
    <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 296,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  image2: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
    marginTop: 15,
  },
  image3: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
    marginTop: 15,
  },
  card: {
    backgroundColor: '#D94F72',
    borderRadius: 5,
    width: '100%',
    height: 74,
    marginBottom: 7,
  },
  cardContent: {
    backgroundColor: '#D94F72',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center', // Aligns children vertically in the center
  },
  horizontalScroll: {
    flex: 1,
  },
  liveView: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    height: 270,
    backgroundColor: '#8F8F8F',
    marginVertical: 10,
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
