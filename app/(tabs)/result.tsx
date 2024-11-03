import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

function LotteryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/Businessman meditating.png')}
        style={styles.image}
      />
      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Published Lottery Result</ThemedText>
      {[...Array(5)].map((_, index) => (
        <ThemedView key={index} style={styles.curd}>
          <ThemedText style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 10, marginTop: 10 }}>Kazi Nazrul Islam Lottery</ThemedText>
          <ThemedText style={{ fontSize: 14, color: 'white', marginLeft: 10 }}>Draw Date: 12 June 2024</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

function WinnerScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/Woman standing.png')}
        style={styles.image2}
      />
      <ThemedText>Winners</ThemedText>
      <ScrollView horizontal style={styles.horizontalScroll}>
        {[...Array(5)].map((_, index) => (
          <ThemedView key={index} style={styles.card}>
            <Image
              source={require('../../assets/images/Mask group.png')}
              style={styles.image3}
            />
            <ThemedText style={styles.lotteryName}>Kazi Nazrul Islam Lottery</ThemedText>
            <ThemedText style={styles.prize}>1st Prize (10 Lakh)</ThemedText>
            <ThemedText style={styles.name}>Munia Islam</ThemedText>
            <ThemedText style={styles.location}>Kurigram, Rangpur</ThemedText>
            <ThemedText style={styles.date}>Draw Date: 11 Jun 2021</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { marginTop: insets.top },
        tabBarIndicatorStyle: { backgroundColor: '#D94F72' },
      }}
    >
      <Tab.Screen name="Lottery Result" component={LotteryScreen} />
      <Tab.Screen name="Winners" component={WinnerScreen} />
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
  curd: {
    backgroundColor: '#D94F72',
    borderRadius: 5,
    width: '100%',
    height: 74,
    marginBottom: 7,
  },
  horizontalScroll: {
    flex: 1,
  },
  card: {
    width: 200, // Adjust width as needed
    alignItems: 'center',
    margin: 10,
  },
  lotteryName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  prize: {
    fontSize: 14,
  },
  name: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
  },
});
