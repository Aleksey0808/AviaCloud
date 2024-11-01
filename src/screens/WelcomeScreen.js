
import {Image, View, Text, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
