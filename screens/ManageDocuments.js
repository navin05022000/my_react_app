import { View, Text, ImageBackground} from 'react-native';

export default function ManageDocuments() {
    return (
      <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/water.png')}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
                    onPress={()=>{}} title="Register" >
                </Button>
      </View>
      </ImageBackground>
    );
}