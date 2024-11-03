import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>DEAR LOTTERY</Text>
        <Text style={styles.ticketPrice}>₹6</Text>
        <Text style={styles.ticketText}>Ticket</Text>
        <Text style={styles.description}>
          "Dear Lottery" is a compelling drama that revolves around the lives of individuals whose fates are intertwined by a massive lottery win. 
          The story delves into the complexities of luck, greed, and human nature, exploring how sudden wealth can both transform and complicate relationships. 
          As characters navigate their newfound fortunes, they face moral dilemmas, unexpected challenges, and the poignant realization that money can't buy happiness.
        </Text>
        <Text style={styles.commissionText}>
          Earn 5% commission on every ticket you resell! Join our program today and start making extra money by helping others find tickets to their favorite events!!!
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take a Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join as Reseller</Text>
        </TouchableOpacity>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://www.pexels.com/search/beautiful%20girl/' }} 
          style={styles.image}
        />
      </View>

      {/* Introduction Section */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>Introduction</Text>
        <Text style={styles.introText}>
          The lottery process starts with players purchasing tickets from authorized retailers or online platforms. Each ticket has a unique set of numbers, either chosen by the player or randomly generated.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e31b0c',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketPrice: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  ticketText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  commissionText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ffc107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  introContainer: {
    padding: 20,
  },
  introTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
