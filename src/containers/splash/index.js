import React, {Component} from 'react';
import {View, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.push('Home');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.splashImage}
          source={require('../../images/mjsplash.jpeg')}
        />
      </View>
    );
  }
}

export default Splash;
