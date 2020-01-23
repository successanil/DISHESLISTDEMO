import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const dataSource = [
  {
    key: 'Anil',
    title: 'CEO',
    profilepic:
      'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
  },
  {
    key: 'Sunil',
    title: 'DIRECTOR',
    profilepic:
      'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
  },
  {
    key: 'Kittu',
    title: 'DIRECTOR',
    profilepic:
      'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
  },
  {
    key: 'Kittu2',
    title: 'DIRECTOR',
    profilepic:
      'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
  },
];

renderItemFunc = ({item}) => {
  return <Text style={styles.item}>{item.key}</Text>;
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <View>
              <MyListItem
                title={item.title}
                name={item.key}
                itemStyle={styles}
                pp={{uri: item.profilepic}}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  itemwrapper: {
    elevation: 1,
    borderRadius: wp('3%'),
    marginTop: wp('5%'),
    marginLeft: wp('8%'),
    marginRight: wp('4%'),
  },
  item: {
    fontSize: hp('3%'),
    color: '#9077DA',
  },
  itemtitle: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    height: 30,
    fontStyle: 'italic',
  },
  itemImage: {
    height: hp('15%'),
    width: wp('40%'),
    borderRadius: wp('3%'),
  },
  headingText: {
    fontSize: 50,
    textAlign: 'center',
  },
});

class MyListItem extends React.PureComponent {
  render() {
    return (
      <View
        style={[styles.itemwrapper, {flexDirection: 'row', padding: wp('2%')}]}>
        <View
          style={{
            position: 'absolute',
            marginLeft: wp('-5%'),
            marginTop: hp('4%'),
          }}>
          <Image
            resizeMode={'cover'}
            style={this.props.itemStyle.itemImage}
            source={require('./assets/images/imagefood.png')}
          />
        </View>
        <View style={{flex: 0.8}}></View>
        <View style={[{flex: 1, paddingBottom: hp('2.5%')}]}>
          <Text style={[this.props.itemStyle.item, {fontFamily:'Montserrat-SemiBold',fontSize: hp('4%')}]}>
            Paneer Tikka
          </Text>
          <View style={{flexDirection: 'row',alignItems:'flex-start',marginBottom:hp('1%')}}>
            <View style={{}}>
            <Image
            resizeMode={'contain'}
            style={{marginRight:wp('1%'),width:wp('4%'),height:wp('4%')}}
            source={require('./assets/images/location_icon.png')}
            />
          </View>
          
            <Text style={{fontFamily:'Montserrat-Regular',color: '#b3b6bc', fontSize: hp('1.6%')}}>
              Khyaban shabaz (karachi)
            </Text>
          </View>
          {this.renderRepeatedTimings({arr:['Check In Time','03:00,00']})}
          {this.renderRepeatedTimings({arr:['Check Out Time','04:00,00']})}
          {this.renderRepeatedTimings({arr:['People','04']})}
          {this.renderRepeatedTimings({arr:['Occassion','Family Dinner']})}
        </View>
      </View>
    );
  }
 
  renderRepeatedTimings(arrObj){
    return(
      <View style={{flexDirection: 'row',marginTop:hp('0.5%')}}>
            <Text style={{fontFamily:'Montserrat-Regular',flex: 1, fontSize: hp('1.5%'), color: '#b3b6bc'}}>
              {arrObj.arr[0]}
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: hp('1.5%'),
                color: '#b3b6bc',
                fontFamily:'Montserrat-Regular',
                textAlign: 'right',
                paddingRight:wp('5%')
              }}>
              {arrObj.arr[1]}
            </Text>
          </View>
          
    );
  }


}
