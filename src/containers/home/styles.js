import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    width: windowWidth,
    minHeight: windowWidth / 6,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: windowWidth * 0.0136,
    justifyContent: 'space-between',
    padding: windowWidth * 0.0136,
  },
  image: {
    width: windowWidth * 0.136,
    height: windowWidth * 0.136,
    borderRadius: (windowWidth * 0.136) / 2,
    marginRight: windowWidth * 0.0316,
  },
  rowCenterContainer: {
    flex: 0.86,
    flexDirection: 'row',
    paddingLeft: windowWidth * 0.0136,
    alignSelf: 'center',
  },
  innerRowContainer: {flexDirection: 'column'},
  titleText: {
    fontSize: windowWidth * 0.0416,
    color: '#666666',
  },
  subTitleText: {
    fontSize: windowWidth * 0.036,
    color: '#666666',
  },
  rightArrow: {
    width: windowWidth * 0.0516,
    height: windowWidth * 0.0516,
    alignSelf: 'center',
    marginLeft: windowWidth * 0.096,
  },
  textInputStyle: {
    height: windowWidth * 0.136,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0f0f0f',
    backgroundColor: '#FFFFFF',
    fontSize: windowWidth * 0.0416,
  },
  header: {
    minHeight: windowWidth * 0.1946,
    width: windowWidth,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: windowWidth * 0.0416,
    color: '#ffffff',
  },
});
