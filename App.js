import React from 'react';

import TabNavigator from 'react-native-tab-navigator';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTab : 'home'
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={{color:'blue'}}
            title="主页"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/home.png')} />}
            renderSelectedIcon={() => <Image  style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/home.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}>
              <Text>
                12332
              </Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'chat'}
            selectedTitleStyle={{color:'blue'}}
            title="通讯录"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/chat.png')} />}
            renderSelectedIcon={() => <Image  style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/chat.png')} />}
            onPress={() => this.setState({ selectedTab: 'chat' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'account'}
            selectedTitleStyle={{color:'blue'}}
            title="账号"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/user.png')} />}
            renderSelectedIcon={() => <Image  style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/user.png')} />}
            onPress={() => this.setState({ selectedTab: 'account' })}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#f5fcff"
  },
  page1:{
    flex: 1,
    backgroundColor: 'red'
  },
  page2:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  page3:{
    flex: 1,
    backgroundColor: 'blue'
  },
  image:{
    height:22,
    width:22,
  }
});

export default App;
