import React from 'react';
import {BaseCard} from '../../components/baseCard/BaseCard';
import trofeo from '../../assets/trofeo1.png';
import newsLogo from '../../assets/newsLogo.png';
import reflexionsLogo from '../../assets/reflexionsLogo.png';
import ProyectsLogo from '../../assets/proyectsLogo.png';
import LevelsLogo from '../../assets/levelsLogo.png';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  Text,
  Image,
} from 'react-native';
import agebreLogo from '../../assets/AGEBRE07.png';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    title: 'Niveles',
    image: LevelsLogo,
    id: 1,
  },
  {
    title: 'Concurso',
    image: trofeo,
    id: 2,
  },
  {
    title: 'Proyectos',
    image: ProyectsLogo,
    id: 3,
  },
  {
    title: 'Reflexiones',
    image: reflexionsLogo,
    id: 4,
  },
  {
    title: 'Noticias',
    image: newsLogo,
    id: 4,
  },
];

export const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItemperu: ListRenderItem<any> = ({item}) => (
    <BaseCard
      title={item.title}
      navigation={() => {
        navigation.navigate('Niveles');
      }}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItemperu}
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
