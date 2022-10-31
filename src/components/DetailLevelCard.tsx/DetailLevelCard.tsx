import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import trofeo from '../../assets/trofeo1.png';
import ButtonIcon from '../../assets/button-icon.svg';

export const DetaiLevelCard = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigation}>
      <View style={styles.containerLeft}>
        <View style={styles.containerImage}>
          <Image source={props.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.containerIcon}>
        <ButtonIcon width={10} height={10} />
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 60;
const height = Dimensions.get('window').height / 15;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF8F8',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    height,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 7,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  containerImage: {
    backgroundColor: '#E7E8E8',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 5,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  containerIcon: {
    borderColor: '#ADA4A5',
    borderRadius: 100,
    borderWidth: 1,
    padding: 2,
  },
});
