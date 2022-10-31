import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View, FlatList, ListRenderItem, Image} from 'react-native';
import agebreLogo from '../../../assets/AGEBRE07.png';
const initial = require('../../../assets/inicialLogo.png');
import math from '../../../assets/Logica-matematica.png';
import ciense from '../../../assets/cienciaambiente.png';
import comunication from '../../../assets/comunicacion.png';
import personal from '../../../assets/personalsocial.png';
import {DetaiLevelCard} from '../../../components/DetailLevelCard.tsx/DetailLevelCard';

const data = [
  {
    title: 'Lógico - Matemática',
    image: math,
    id: 1,
  },
  {
    title: 'Comunicación Integral',
    image: comunication,
    id: 2,
  },
  {
    title: 'Personal Social',
    image: personal,
    id: 3,
  },
  {
    title: 'Ciencia y Ambiente',
    image: ciense,
    id: 4,
  },
];

export const DetailEducationScreen = () => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<any> = ({item}) => (
    <DetaiLevelCard
      image={item.image}
      title={item.title}
      navigation={() => {
        console.log('hola');
      }}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Image source={agebreLogo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logo: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
  list: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});
