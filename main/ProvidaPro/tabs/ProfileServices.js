import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import ProviderLocationMap from '../components/ProviderLocationMap';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';

const ProfileServices = () => {
    const { colors, dark } = useTheme();
    // Example provider coordinates
    const providerCoordinates = {
        latitude: 37.7749,
        longitude: -122.4194,
    };

    const initialNumberOfLines = 3;
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>Description</Text>
            <Text style={[styles.description, { 
                marginBottom: 10,
                color: dark ? COLORS.grayscale200 : COLORS.grayscale700,
                }]} numberOfLines={showFullDescription ? undefined : initialNumberOfLines}>
                Introducing our friendly cleaner! They're here to make your home sparkle. With their attention to detail and reliable service, you can count on them to leave your space fresh and tidy. Whether it's dusting, mopping, or vacuuming, they've got you covered. Sit back, relax, and let our cleaner take care of the dirty work for you!
            </Text>
            <TouchableOpacity onPress={toggleDescription}>
                <Text style={{ color: COLORS.primary }}>{showFullDescription ? 'View Less' : 'View More'}</Text>
            </TouchableOpacity>
            <Text style={[styles.title, { 
                color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Service Type</Text>
            <View style={styles.typeContainer}>
                <Image
                    source={icons.category}
                    resizeMode='contain'
                    style={styles.categoryIcon}
                />
                <Text style={[styles.description, { 
                    color: dark ? COLORS.grayscale200 : COLORS.grayscale700
                }]}>{"  "}Cleaning</Text>
            </View>
            <Text style={[styles.title, { 
                 color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Location</Text>
            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={14} color={COLORS.primary} />
                <Text style={[styles.description, { 
                     color: dark ? COLORS.grayscale200 : COLORS.grayscale700
                }]}>{"  "}255 Grand Park Avenue, New York.</Text>
            </View>
            <ProviderLocationMap providerCoordinates={providerCoordinates} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginVertical: 12
    },
    description: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.grayscale700,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    categoryIcon: {
        width: 14,
        height: 14,
        marginRight: 2,
        tintColor: COLORS.primary
    }
})

export default ProfileServices