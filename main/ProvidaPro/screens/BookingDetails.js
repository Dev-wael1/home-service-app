import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import DatePickerView from '../components/DatePickerView';
import { getFormatedDate } from "react-native-modern-datepicker";
import { AntDesign } from '@expo/vector-icons';
import { hoursData } from '../data';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const BookingDetails = ({ navigation }) => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const today = new Date();
  const startDate = getFormatedDate(
    new Date(today.setDate(today.getDate() + 1)),
    "YYYY/MM/DD"
  );
  const [startedDate, setStartedDate] = useState("12/12/2023");
  const { colors, dark } = useTheme();

  const [count, setCount] = useState(2);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Function to handle hour selection
  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  // Render each hour as a selectable button
  const renderHourItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.hourButton,
          selectedHour === item.id && styles.selectedHourButton,
        ]}
        onPress={() => handleHourSelect(item.id)}
      >
        <Text style={[styles.hourText,
        selectedHour === item.id && styles.selectedHourText]}>{item.hour}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Booking Details" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>Select Date</Text>
          <DatePickerView
            open={openStartDatePicker}
            startDate={startDate}
            selectedDate={startedDate}
            onClose={() => setOpenStartDatePicker(false)}
            onChangeStartDate={(date) => setStartedDate(date)}
          />
          <View style={styles.ourContainer}>
            <View>
              <Text style={[styles.hourTitle, { 
                color: dark? COLORS.white : COLORS.greyscale900
              }]}>Working Hours</Text>
              <Text style={[styles.hourSubtitle, { 
                color: dark ? COLORS.grayscale200 : COLORS.grayscale700 
              }]}>Cost increase after 2 hrs of work</Text>
            </View>
            <View style={styles.viewContainer}>
              <TouchableOpacity style={styles.iconContainer} onPress={handleDecrease}>
                <AntDesign name="minus" size={16} color={dark ? COLORS.white : "black"} />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity style={styles.iconContainer} onPress={handleIncrease}>
                <AntDesign name="plus" size={16} color={dark ? COLORS.white : "black"} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.title, { 
            color: dark? COLORS.white : COLORS.greyscale900
          }]}>Choose Start Time</Text>
          <View style={{ marginVertical: 12 }}>
            <FlatList
              data={hoursData}
              renderItem={renderHourItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
      <View style={[styles.bottomContainer, { 
        backgroundColor: colors.background
      }]}>
        <Button
          title="Continue - $125"
          filled
          style={styles.button}
          onPress={() => navigation.navigate("YourAddress")}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  title: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black,
    marginTop: 12
  },
  ourContainer: {
    width: SIZES.width - 32,
    height: 72,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourTitle: {
    fontSize: 18,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginBottom: 12
  },
  hourSubtitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    justifyContent: "space-between"
  },
  iconContainer: {
    height: 38,
    width: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.tansparentPrimary
  },
  count: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black
  },
  hourButton: {
    padding: 10,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    borderColor: COLORS.primary,
    borderWidth: 1.4
  },
  selectedHourButton: {
    backgroundColor: COLORS.primary,
  },
  selectedHourText: {
    fontSize: 12,
    fontFamily: 'medium',
    color: COLORS.white
  },
  hourText: {
    fontSize: 12,
    fontFamily: 'medium',
    color: COLORS.primary
  },
  bottomContainer: {
    position: "absolute",
    bottom: 22,
    left: 0,
    right: 0,
    width: "100%",
    height: 54,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  button: {
    width: SIZES.width - 32,
    height: 54,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary
  }
})

export default BookingDetails