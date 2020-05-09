import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from 'react-native-elements';
import Video from 'react-native-video';
// import BackgroundVideo from '../../';    

export default function Home({navigation}: any){

    console.log(navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Video  source={require('./backgroundVideo.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat   // Can be a URL or a local file.
    //    ref={(ref) => {
    //      this.player = ref
    //    }}                                      // Store reference
       style={Styles.backgroundVideo} /> */}
            <Image style={Styles.logo} source={require('../../assets/images/white.png')} />
            <Text style={Styles.gretText}>Welcome!!!</Text>
            <Button title="Get Started" onPress={() => {navigation.navigate('Login', {name: 'Jane'})}} titleStyle={Styles.buttonTitle} buttonStyle={Styles.button}/>
        </View>
    )
}


const Styles = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
    },
    gretText: {
        fontSize: 40,
    },
    button: {
        width: 200,
        borderRadius: 100,
        marginTop: 130,
        // width: 200,
        // overflow: 'hidden',
        // borderRadius: 100,
        // fontSize: 1,

    },
    buttonTitle: {
        fontSize: 30,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})



