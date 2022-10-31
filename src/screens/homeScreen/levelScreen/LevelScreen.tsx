import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
// import trofeo from '../../../assets/trofeo1.png';
const initial = require('../../../assets/inicialLogo.png');
import primary from '../../../assets/primaryLogo.png';
import secondary from '../../../assets/secondaryLogo.png';
import {BaseCard} from '../../../components/baseCard/BaseCard';
import agebreLogo from '../../../assets/AGEBRE07.png';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    title: 'Inicial',
    image: initial,
    id: 1,
  },
  {
    title: 'Primaria',
    image: primary,
    id: 2,
  },
  {
    title: 'Sencundaria',
    image: secondary,
    id: 3,
  },
];

export const LevelScreen = () => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<any> = ({item}) => (
    <BaseCard
      title={item.title}
      navigation={() => {
        navigation.navigate('Inicial');
      }}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
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
