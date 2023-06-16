import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';

const ScanQRCode = ({navigation}) => {
  return (
    <View style={styles.QRCodeView}>
      <Header heading="Scan QR Code" />
      </View>
  );
};

export default ScanQRCode;
