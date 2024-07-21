import { View, Text, TouchableOpacity, Image, useWindowDimensions, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS,  icons } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../styles/CommonStyles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MyBookingCompleted, MyBookingsCancelled, MyBookingsUpcoming } from '../tabs';
import Header from '../components/Header';
import { useTheme } from '../theme/ThemeProvider';


const renderScene = SceneMap({
  first: MyBookingsUpcoming,
  second: MyBookingCompleted,
  third: MyBookingsCancelled
});

const MyBookings = ({ navigation }) => {
  const layout = useWindowDimensions();
  const { dark, colors } = useTheme();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Upcoming' },
    { key: 'second', title: 'Completed' },
    { key: 'third', title: 'Cancelled'}
  ])

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary
      }}
      style={{
        backgroundColor: colors.background
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={[{ 
            color: focused ? COLORS.primary : "gray",
            fontFamily: focused ? "semiBold" : "regular"
            }]}>
          {route.title}
        </Text>
      )}
    />
  );
  const renderHeader = () => {
    const navigation = useNavigation()
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={commonStyles.header1Icon}
          >
            <Image
              resizeMode='contain'
              source={icons.arrowLeft}
              style={{ height: 24, width: 24, tintColor: COLORS.black }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 12, fontSize: 17, fontFamily: "semiBold" }}>My Bookings</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          style={commonStyles.header1Icon}
        >
          <Image
            resizeMode='contain'
            source={icons.more}
            style={{ height: 24, width: 24, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background  }}>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, padding: 16, backgroundColor: colors.background  }}>
         <Header title="My Bookings" />
        <View style={{
          flex: 1
        }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyBookings