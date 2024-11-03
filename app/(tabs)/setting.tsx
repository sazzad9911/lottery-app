import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const Setting = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  return (
    // <View style={styles.container}>
    //   <Image 
    //     source={require('../../assets/images/Cloud folder.png')} // Update with your image path
    //     style={styles.image}
    //   />
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/Cloud folder.png')}
          style={styles.image}
        />
      }>
      <ThemedView style={styles.container}>
      <ThemedView style={styles.settingItem}>
        <Icon name="language" type="material" size={30} color="#fff" />
        <ThemedText style={styles.settingText}>Language</ThemedText>
        <ThemedText style={styles.settingText}>{isEnglish ? 'English' : 'Other'}</ThemedText>
        <Switch
          value={isEnglish}
          onValueChange={(value) => setIsEnglish(value)}
          trackColor={{ false: '#767577', true: '#000000' }}
          thumbColor={isEnglish ? '#2CA9BC' : '#f4f3f4'}
        />
      </ThemedView>

      <ThemedView style={styles.settingItem}>
        <Icon name="wb-sunny" type="material" size={30} color="#fff" />
        <ThemedText style={styles.settingText}>Theme</ThemedText>
        <ThemedText style={styles.settingText}>{isLightTheme ? 'Light' : 'Dark'}</ThemedText>
        <Switch
          value={isLightTheme}
          onValueChange={(value) => setIsLightTheme(value)}
          trackColor={{ false: '#767577', true: '#000000' }}
          thumbColor={isLightTheme ? '#2CA9BC' : '#f4f3f4'}
        />
      </ThemedView>

      <ThemedView style={styles.settingItem}>
        <Icon name="notifications" type="material" size={30} color="#fff" />
        <ThemedText style={styles.settingText}>Notification</ThemedText>
        <ThemedText style={styles.settingText}>{isNotificationOn ? 'On' : 'Off'}</ThemedText>
        <Switch
          value={isNotificationOn}
          onValueChange={(value) => setIsNotificationOn(value)}
          trackColor={{ false: '#767577', true: '#000000' }}
          thumbColor={isNotificationOn ? '#2CA9BC' : '#f4f3f4'}
        />
      </ThemedView>

      <TouchableOpacity style={styles.settingItem}>
        <MaterialCommunityIcons name="ruler-square-compass" size={30} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Lottery Rules & Act</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <MaterialIcons name="rule" size={30} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Tearms and Conditions</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Fontisto name="arrow-return-left" size={28} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Return Policy</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Fontisto name="arrow-return-left" size={28} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Return Policy</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Fontisto name="arrow-return-left" size={28} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Return Policy</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Fontisto name="arrow-return-left" size={28} color="white" />
        <ThemedText style={{color: 'white', marginLeft: 20, fontSize: 16}}>Return Policy</ThemedText>
      </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    //backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 251,
    resizeMode: 'contain',
    //marginBottom: 10,
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    backgroundColor: '#D94F72',
    padding: 5,
    borderRadius: 10,
    marginBottom: 7,
    height: 50,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});

export default Setting;
