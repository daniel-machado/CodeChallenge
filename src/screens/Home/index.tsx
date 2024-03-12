import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { quickAccessData, quickAccessType } from '../../mocks/quickAccessData';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  const [clicks, setClicks] = useState([]);

  const handleItemClick = (id: string) => {
    setClicks([...clicks, id]);
    console.log("CLICKs ", clicks)
  };

  const ordenarArrayPorCliques = () => {
    const count = {};
    clicks.forEach((item) => {
      count[item] = (count[item] || 0) + 1;
    });
    return quickAccessData.sort((a, b) => (count[b.id] || 0) - (count[a.id] || 0));
  };

  return (
    <View>
      <StatusBar 
        style="inverted" 
        translucent
      />
      <View style={styles.header}>
        <View style={styles.TitleEIconHeader}>
          <AntDesign name="minuscircle" size={24} color="yellow" />
          <Text style={styles.headerText}>Olá, Daniel</Text>
        </View>

        <View style={styles.iconsHeader}>
          <MaterialIcons name="visibility" style={{paddingRight: 10}} size={24} color="white" />
          <AntDesign name="message1" size={24} style={{paddingRight: 10}} color="white" />
          <Feather name="log-out" size={24} color="white" />
        </View>
      </View>

      <Text>Array da Central de Pagamento</Text>

      {ordenarArrayPorCliques().map((item: quickAccessType) => (
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContent} 
            key={item.id} 
            onPress={() => handleItemClick(item.id)}
          >
            <Ionicons name={item.icon} size={24} color="blue" />
            </TouchableOpacity>
          <Text>{item.title}</Text>
        </View>

      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    backgroundColor: 'blue',
    height: 72
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 12
  },
  headerTextBold: {
    fontWeight:"bold",
  },
  iconsHeader: {
    flexDirection: 'row',
  },
  TitleEIconHeader: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    paddingTop: 10,
    alignItems: 'center',
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 65,
    borderRadius: 35,
    backgroundColor: 'rgba(0, 0, 255, 0.1)'
  },
})
export default Home;
