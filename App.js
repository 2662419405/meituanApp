import React from 'react';

import TabNavigator from 'react-native-tab-navigator';

import {StyleSheet, Text, View, Image} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={{color: 'blue'}}
            title="首页"
            renderIcon={() => <Image style={styles.image} />}
            renderSelectedIcon={() => (
              <Image style={[styles.image, {tintColor: 'blue'}]} />
            )}
            badgeText="1"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <View style={styles.page1}>
              <Text>12332</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'chat'}
            selectedTitleStyle={{color: 'blue'}}
            title="聊天"
            renderIcon={() => <Image style={styles.image} />}
            renderSelectedIcon={() => (
              <Image style={[styles.image, {tintColor: 'blue'}]} />
            )}
            onPress={() => this.setState({selectedTab: 'chat'})}>
            <View style={styles.page1}>
              <Text>12332</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tong'}
            selectedTitleStyle={{color: 'blue'}}
            title="通讯录"
            renderIcon={() => <Image style={styles.image} />}
            renderSelectedIcon={() => (
              <Image style={[styles.image, {tintColor: 'blue'}]} />
            )}
            onPress={() => this.setState({selectedTab: 'tong'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'account'}
            selectedTitleStyle={{color: 'blue'}}
            title="设置"
            renderIcon={() => <Image style={styles.image} />}
            renderSelectedIcon={() => (
              <Image style={[styles.image, {tintColor: 'blue'}]} />
            )}
            onPress={() => this.setState({selectedTab: 'account'})}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  page3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  image: {
    height: 22,
    width: 22,
  },
});

export default App;
