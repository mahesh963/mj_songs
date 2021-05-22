import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworkUrl: '',
      arstistName: '',
      releaseDate: '',
      trackCollectionName: '',
      trackOrCollection: 'Track Name',
      trackOrCollectionprice: '',
      description: '',
    };
  }

  async componentDidMount() {
    console.log('chjeck', this.props.route.params.songInfo);
    try {
      this.setState({
        artworkUrl: this.props.route.params.songInfo.artworkUrl100,
        arstistName: this.props.route.params.songInfo.artistName,
        trackCollectionName:
          this.props.route.params.songInfo.trackName == undefined ||
          this.props.route.params.songInfo.trackName == 'undefined'
            ? this.props.route.params.songInfo.collectionName
            : this.props.route.params.songInfo.trackName,
        trackOrCollection:
          this.props.route.params.songInfo.trackName == undefined ||
          this.props.route.params.songInfo.trackName == 'undefined'
            ? 'Collection Name'
            : 'Track Name',
        releaseDate: this.props.route.params.songInfo.releaseDate,
        trackOrCollectionprice:
          this.props.route.params.songInfo.collectionPrice,
        description:
          this.props.route.params.songInfo.longDescription == undefined
            ? this.props.route.params.songInfo.description
            : this.props.route.params.songInfo.longDescription,
      });
    } catch (error) {
      console.log('getprops_err', error);
    }
  }

  onBack() {
    this.props.navigation.goBack();
  }

  render() {
    console.log('this.state.description', this.state.description);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftRight}
            onPress={this.onBack.bind(this)}>
            <Image
              source={require('../../images/leftArrow.png')}
              style={styles.leftArrow}
            />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Text style={styles.headerText}>SONG DETAILS</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.imgBgView}>
              <Image
                source={{uri: this.state.artworkUrl}}
                style={styles.artworkImg}
              />
            </View>
            <View style={styles.centerContainer}>
              <Text style={styles.leftTitle}>
                Artist Name :
                <Text style={styles.rightName}> {this.state.arstistName}</Text>
              </Text>
              <Text style={styles.dateText}>
                Released Date :{''} {this.state.releaseDate.substr(0, 10)}
              </Text>
              <Text style={styles.trackTitle}>
                {this.state.trackOrCollection}
              </Text>
              <Text style={styles.trackCollection}>
                {this.state.trackCollectionName}
              </Text>

              <Text style={styles.priceText}>
                Price :{''} ${this.state.trackOrCollectionprice}
              </Text>

              {this.state.description == undefined ? null : (
                <View>
                  <Text style={styles.descriptionTitle}>Description</Text>
                  <Text style={styles.descriptionText}>
                    {this.state.description}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Details;
