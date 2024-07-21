import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { cancelledBookings } from '../data';
import { useTheme } from '../theme/ThemeProvider';

const MyBookingsCancelled = () => {
  const navigation = useNavigation();
  const { dark, colors } = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        data={cancelledBookings}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.statusContainer}>
              <Text style={[styles.typeText, { 
                color: dark? COLORS.white : COLORS.greyscale900
              }]}>{item.serviceType}</Text>
              <Text style={[styles.statusText, { color: item.status == "Paid" ? COLORS.green : COLORS.red, marginLeft: 12 }]}>
                {item.status}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoLeft}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={[styles.itemName, { 
                    color: dark? COLORS.white : COLORS.greyscale900
                  }]}>{item.provider}</Text>
                  <View style={styles.itemSubDetails}>
                    <Text style={[styles.itemPrice, { 
                      color: dark ? COLORS.grayscale200 : COLORS.grayscale700
                    }]}>${item.price}</Text>
                    <Text style={[styles.itemDate, { 
                      color: dark ? COLORS.grayscale200 : COLORS.grayscale700
                    }]}> | {item.date}</Text>
                    <Text style={[styles.itemItems, { 
                      color: dark ? COLORS.grayscale200 : COLORS.grayscale700
                    }]}> | {item.address}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.receiptText}>{item.receipt}</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                onPress={() => console.log("Performing action...")}
                style={styles.rateButton}>
                <Text style={styles.rateButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("EReceipt")}
                style={styles.reorderButton}>
                <Text style={styles.reorderButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'column',
  },
  statusContainer: {
    borderBottomColor: COLORS.grayscale400,
    borderBottomWidth: .3,
    marginVertical: 12,
    flexDirection: 'row',
    paddingBottom: 4,
  },
  typeText: {
    fontSize: 14,
    fontFamily: "bold",
  },
  statusText: {
    fontSize: 14,
    fontFamily: "bold",
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemSubDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: "bold",
  },
  itemDate: {
    fontSize: 12,
    fontFamily: "regular",
    marginHorizontal: 2,
  },
  itemItems: {
    fontSize: 12,
    fontFamily: "regular",
  },
  receiptText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.gray5,
    fontFamily: "regular",
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
  },
  rateButton: {
    height: 38,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
  },
  rateButtonText: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: "regular",
  },
  reorderButton: {
    height: 38,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  reorderButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: "regular",
  },
});

export default MyBookingsCancelled