import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const LocationItem = ({ location, address, distance, onPress }) => {
    const { dark } = useTheme();

  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}>
        <View style={{ 
            flexDirection: "row",
            alignItems: "center"
            }}>
         <Image
            source={icons.pin}
            resizeMode='contain'
            style={[styles.pinIcon, { 
                tintColor: dark ? COLORS.white : COLORS.black,
            }]}
            />
            <View>
                <Text style={[styles.location, { 
                    color: dark? COLORS.white : COLORS.greyscale900
                }]}>{location}</Text>
                <Text style={[styles.address, { 
                    color: dark ? COLORS.grayscale200 : COLORS.greyscale900
                }]}>{address}</Text>
            </View>
        </View>
        <Text style={[styles.distance, { 
            color: dark? COLORS.grayscale200 : COLORS.greyscale900
        }]}>{distance}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: SIZES.width - 32,
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: 12
    },
    pinIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black,
        marginRight: 12
    },
    location: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black,
        marginBottom: 6
    },
    address: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.gray
    },
    distance: {
        fontSize: 12,
        fontFamily: "bold",
        color: COLORS.black
    }
})

export default LocationItem