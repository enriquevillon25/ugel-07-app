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

export const BaseCard = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigation}>
      <Image source={props.image} style={styles.image} />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width / 2 - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E8E8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    paddingVertical: 20,
    marginVertical: 7,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    marginBottom: 5,
  },
});
