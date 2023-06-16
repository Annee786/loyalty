import {StyleSheet, TextInput, Image, View} from 'react-native';
import React from 'react';
import Images from '../../utils/images';
import {colors, fonts} from '../../utils';

const SearchButton = ({placeHolder}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.searchimage} source={Images.Search} />

      <TextInput
        placeholderTextColor={''}
        placeholder={placeHolder}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.searchButton,
    backgroundColor: colors.searchButton,
    height: 50,
    width: '90%',
    marginLeft: 15,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  textInput: {
    colors: colors.searchinput,
    fontSize: 14,
    fontFamily: fonts.light,
    paddingLeft: 10,
    width:'90%'
  },
  searchimage: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
});
