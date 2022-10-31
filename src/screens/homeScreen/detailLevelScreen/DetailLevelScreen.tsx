import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View, FlatList, ListRenderItem, Image} from 'react-native';
import agebreLogo from '../../../assets/AGEBRE07.png';
const initial = require('../../../assets/inicialLogo.png');
import primary from '../../../assets/primaryLogo.png';
import secondary from '../../../assets/secondaryLogo.png';
import {DetaiLevelCard} from '../../../components/DetailLevelCard.tsx/DetailLevelCard';

const data = [
  {
    title: 'Ciclo VI',
    image: initial,
    id: 1,
  },
  {
    title: 'Ciclo VII',
    image: primary,
    id: 2,
  },
];

export const DetailLevelScreen = () => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<any> = ({item}) => (
    <DetaiLevelCard
      image={item.image}
      title={item.title}
      navigation={() => {
        navigation.navigate('Ciclo VI');
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
