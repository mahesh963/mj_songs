import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {getCollection} from '../../redux/actions/initial';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songsList: [],
      search: '',
      filterSongsList: [],
    };
  }

  async componentDidMount() {
    await this.props.getCollection();
    await this.setState({songsList: this.props.initial.songsList.results});
  }

  onSelectedSong(item) {
    this.props.navigation.push('Details', {
      songInfo: item,
    });
  }

  renderItem({item}) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.onSelectedSong.bind(this, item)}
        style={styles.rowContainer}>
        <View style={styles.rowCenterContainer}>
          <Image source={{uri: item.artworkUrl100}} style={styles.image} />
          <View style={styles.innerRowContainer}>
            <Text style={styles.titleText} numberOfLines={1}>
              {item.trackName}
            </Text>
            <Text style={styles.subTitleText}>{item.artistName}</Text>
          </View>
        </View>
        <Image
          source={require('../../images/rightArrow.png')}
          style={styles.rightArrow}
        />
      </TouchableOpacity>
    );
  }

  async searchFilterFunction(searchText) {
    this.setState({search: searchText});
    let filteredData = this.state.songsList.filter(function (item) {
      let value = item.artistName.toLowerCase();
      return value.includes(searchText.toLowerCase());
    });

    await this.setState({filterSongsList: filteredData});
    await console.log('this.state.filterSongsList', this.state.filterSongsList);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MJ SONGS</Text>
        </View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.searchFilterFunction(text)}
          value={this.state.search}
          underlineColorAndroid="transparent"
          placeholder="Search"
        />
        <FlatList
          contentContainerStyle={{paddingVertical: windowWidth * 0.006}}
          data={
            this.state.search == ''
              ? this.state.songsList
              : this.state.filterSongsList
          }
          extraData={this.state}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    initial: state.initial,
  }),
  {getCollection},
)(Home);
