import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Button } from 'react-native-elements';
import { Text, StyleSheet, View } from 'react-native';

const ViewBuku = (props) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/no_img.png')}
        style={styles.img}
      />

      <View style={styles.box}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'Bold' }}>
            {props.route.params.contacts.title}
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 7 }}>
        <Text style={{ color: '#8395a7', fontSize: 15 }}>
          {' '}
          {props.route.params.contacts.author}
        </Text>
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'Bold', marginBottom: 10 }}>
          {props.route.params.contacts.description}
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}>
          <Button
            title="Edit Buku"
            style={{marginRight: 10}}
          />
          <Button
            title="Delete Buku"
          />
      </View>

    </SafeAreaView>
  );
};

export default ViewBuku;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
  },

  img: {
    width: '100%',
    height: 300,
  },

  box: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginLeft: 0,

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
