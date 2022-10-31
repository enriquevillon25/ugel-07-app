import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View, FlatList, ListRenderItem, Image} from 'react-native';
import agebreLogo from '../../../assets/AGEBRE07.png';
const initial = require('../../../assets/inicialLogo.png');
import firstLevel from '../../../assets/02.png';
import secondLevel from '../../../assets/35.png';
import {DetaiLevelCard} from '../../../components/DetailLevelCard.tsx/DetailLevelCard';

const data = [
  {
    title: '0 - 2 años',
    image: firstLevel,
    id: 1,
  },
  {
    title: '3 - 5 años',
    image: secondLevel,
    id: 2,
  },
];

export const EducationScreen = () => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<any> = ({item}) => (
    <DetaiLevelCard
      image={item.image}
      title={item.title}
      navigation={() => {
        navigation.navigate('3 a 5 años');
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
