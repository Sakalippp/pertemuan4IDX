import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>duba duba</Text>
      <View>
        <Text>Karakter Duba Duba Di Baalveer</Text>
        <Image
          source={{
            uri: 'https://e0.pxfuel.com/wallpapers/961/992/desktop-wallpaper-duba-duba-character-in-baalveer-balveer.jpg',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="डेरी एक विश्वसनीय वाहक की तरह एक महान व्यक्ति है
        "
      />
    </ScrollView>
  );
};

export default App;