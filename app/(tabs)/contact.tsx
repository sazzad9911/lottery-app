import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { AntDesign } from '@expo/vector-icons';

function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/contacts.png')}
        style={styles.image}
      />
      <ThemedText style={{fontSize:16, fontWeight:'bold'}}>Contact Us</ThemedText>
      <ThemedView style={styles.contactIcons}>
        <TouchableOpacity>
          <FontAwesome5 name="facebook-messenger" size={40} color="#00C6FF" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
         <FontAwesome name="whatsapp" size={40} color="#25D366" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="telegram" size={40} color="#0088CC" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="phone" size={40} color="#1B98F5" style={styles.icon} />
        </TouchableOpacity>
      </ThemedView>
      <ThemedText style={styles.contactText}>With Email Support</ThemedText>
      <ThemedText style={{fontSize:16, marginBottom:5}}>Name</ThemedText>
      <ThemedTextInput style={styles.input} placeholder="Write your name..." />
      <ThemedText style={{fontSize:16, marginBottom:5}}>Email</ThemedText>
      <ThemedTextInput style={styles.input} placeholder="Your email" keyboardType="email-address" />
      <ThemedText style={{fontSize:16, marginBottom:5}}>Message</ThemedText>
      <ThemedTextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe your problems"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ComplainScreen() {
  const [selectedPoint, setSelectedPoint] = React.useState(null);
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={{fontSize:16, fontWeight:'bold', alignSelf:'center',marginBottom:10}}>Complain Box</ThemedText>
      <ThemedText style={{fontSize:16,marginBottom:5,}}>Name</ThemedText>
      <ThemedTextInput style={styles.input} placeholder="Write your name..." />
      <ThemedText style={{fontSize:16,marginBottom:5,}}>Contact Number</ThemedText>
      <ThemedTextInput style={styles.input} placeholder="Contact Number 11 digit" />
      <ThemedText style={{fontSize:16,marginBottom:5,}}>Select a point</ThemedText>
      <RNPickerSelect useNativeAndroidPickerStyle={false}
        onValueChange={(value) => setSelectedPoint(value)}
        items={[
          { label: 'Point 1', value: 'point1' },
          { label: 'Point 2', value: 'point2' },
          { label: 'Point 3', value: 'point3' },
        ]}
        placeholder={{ label: 'Nothing Selected...', value: null }}
        style={{
          inputAndroid: styles.pickerAndroid,
          inputIOS: styles.pickerIOS,
          inputAndroidContainer: styles.pickerContainer,
          inputIOSContainer: styles.pickerContainer,
        }}
        Icon={()=><AntDesign style={{
          marginTop:10,marginRight:10
        }} name="down" size={24} color="gray" />}
      />
      <ThemedText style={{fontSize:16,marginBottom:5,}}>Message</ThemedText>
      <ThemedTextInput style={[styles.input,styles.textArea]} placeholder="Describe your problems" multiline />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit Complain</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const inset=useSafeAreaInsets()
  return (
    <Tab.Navigator 
      screenOptions={{
      tabBarLabelStyle: { marginTop: inset.top }, // Adjust the margin top to move the labels down
      tabBarIndicatorStyle: { backgroundColor: '#D94F72' },
    }}
    >
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="ComplainBox" component={ComplainScreen} />
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
    //backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  contactIcons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  icon: {
    marginHorizontal: 5,
    marginTop: 5,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#D94F72',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    marginBottom:20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
  pickerAndroid: {
    color: 'gray',
  },
  pickerIOS: {
    color: 'black',
  },
});
