import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import RBSheet from "react-native-raw-bottom-sheet";
import LocationItem from '../components/LocationItem';
import Button from '../components/Button';
import { locations, positionList } from '../data';
import { useTheme } from '../theme/ThemeProvider';
import { mapDarkStyle, mapStandardStyle } from '../data/mapData';

const YourAddress = ({ navigation }) => {
    const bottomSheetRef = useRef(null);
    const detailsSheetRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const { colors, dark } = useTheme();

    useEffect(() => {
        bottomSheetRef.current.open();
    }, []);

    /**
     * Handle search input change
     * @param {string} text - The input text
     */
    const handleSearchInput = (text) => {
        setSearchInput(text);

        // Filter locations based on the search input
        const filtered = locations.filter(
            (location) =>
                location.location.toLowerCase().includes(text.toLowerCase()) ||
                location.address.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredLocations(filtered);
    };


    /**
     * 
     * @returns Render header
     */
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.headerIconContainer, { 
                        borderColor: dark? COLORS.dark1 : COLORS.grayscale200
                    }]}>
                    <Image
                        source={icons.arrowBack}
                        resizeMode='contain'
                        style={[styles.arrowBackIcon, { 
                            tintColor: dark? COLORS.white : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { 
                    color: dark? COLORS.white : COLORS.greyscale900
                }]}>Your Address</Text>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={24} color={dark? COLORS.white : COLORS.greyscale900} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                {renderHeader()}
                <MapView
                    style={styles.map}
                    customMapStyle={dark ? mapDarkStyle : mapStandardStyle}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 48.8566,
                        longitude: 2.3522,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {positionList.map((item, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                            image={icons.mapMarkerIcon}
                            title={item.name}
                            description={item.description}
                            onPress={() => console.log("Move to another screen")}
                        >
                            <Callout tooltip>
                                <View>
                                    <View style={styles.bubble}>
                                        <Text
                                            style={{
                                                ...FONTS.body4,
                                                fontWeight: 'bold',
                                                color: COLORS.black,
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={styles.arrowBorder} />
                                    <View style={styles.arrow} />
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
            <RBSheet
                ref={bottomSheetRef}
                height={300}
                openDuration={250}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    draggableIcon: {
                        backgroundColor: dark ? COLORS.grayscale700 : COLORS.grayscale400,
                        width: 100
                    },
                    container: {
                        backgroundColor: dark ? COLORS.dark1 : COLORS.white
                    }
                }}>
                <View style={{
                    width: SIZES.width - 32,
                    marginHorizontal: 16,
                    flexDirection: 'column',
                    marginVertical: 22
                }}>
                    <View style={[styles.searchBarContainer, { 
                        backgroundColor: dark ? COLORS.dark2 : "#F9F9F9",
                    }]}>
                        <TouchableOpacity>
                            <Feather name="search" size={24} color={dark ? COLORS.grayscale400 : COLORS.greyscale900 } />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Search Location'
                            placeholderTextColor={dark ? COLORS.grayscale200 : COLORS.greyscale900}
                            style={styles.searchInput}
                            value={searchInput}
                            onChangeText={handleSearchInput}
                        />
                    </View>
                    <FlatList
                        data={filteredLocations}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <LocationItem
                                location={item.location}
                                address={item.address}
                                distance={item.distance}
                                onPress={() => {
                                    try {
                                        if (bottomSheetRef.current && detailsSheetRef.current) {
                                            // Close the bottom sheet after 0 milliseconds
                                            bottomSheetRef.current.close();

                                            // Wait for 3 seconds before opening the details sheet
                                            setTimeout(() => {
                                                detailsSheetRef.current.open();
                                            }, 2000);
                                        } else {
                                            console.error("bottomSheetRef or detailsSheetRef is not properly defined.");
                                        }
                                    } catch (error) {
                                        console.error("Error:", error);
                                    }
                                }}
                            />
                        )}
                    />
                </View>
            </RBSheet>
            <RBSheet
                ref={detailsSheetRef}
                height={370}
                openDuration={250}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    draggableIcon: {
                        backgroundColor: dark ? COLORS.greyscale900 : COLORS.secondaryWhite,
                        width: 100
                    },
                    container: {
                        backgroundColor: colors.background
                    }
                }}>
                <View style={{
                    width: SIZES.width - 32,
                    marginHorizontal: 16,
                    flexDirection: 'column',
                    marginVertical: 22,
                    alignItems: "center"
                }}>
                    <View style={[styles.boxContainer, { 
                        backgroundColor: dark ? COLORS.dark1 : "#F2F4F9",
                    }]}>
                        <Image
                            source={icons.pin}
                            resizeMode='contain'
                            style={styles.pinIcon}
                        />
                    </View>
                    <Text style={[styles.locationName, { 
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>New Montgomery</Text>
                    <Text style={styles.locationAddress}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                    <View style={styles.viewLine}>
                        <View style={[styles.viewTime, { marginRight: 36 }]}>
                            <MaterialCommunityIcons name="clock" size={20} color={COLORS.primary} />
                            <Text style={[styles.timeline, { 
                                color: dark? COLORS.white : COLORS.greyscale900
                            }]}>09:00 AM - 05:00PM</Text>
                        </View>
                        <View style={styles.viewTime}>
                            <Image
                                source={icons.routing}
                                resizeMode='contain'
                                style={styles.routingIcon}
                            />
                            <Text style={[styles.timeline, { 
                                 color: dark? COLORS.white : COLORS.greyscale900
                            }]}>4.5 KM from you</Text>
                        </View>
                    </View>
                    <View style={styles.separateLine} />
                    <Text style={styles.trackNumber}>0812274616352</Text>
                    <View style={styles.separateLine} />
                    <Button
                        title="Continue"
                        filled
                        style={{
                            height: 56,
                            borderRadius: 30,
                            width: SIZES.width - 32,
                            marginBottom: 12
                        }}
                        onPress={() => {
                            bottomSheetRef.current.close();
                            detailsSheetRef.current.close();
                            navigation.navigate("PaymentMethods")
                        }}
                    />
                </View>
            </RBSheet>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingBottom: 40
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 16
    },
    headerIconContainer: {
        height: 46,
        width: 46,
        borderWidth: 1,
        borderColor: COLORS.grayscale200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999
    },
    arrowBackIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: "bold",
        color: COLORS.black
    },
    map: {
        height: '100%',
        zIndex: -9999
    },
    // Callout bubble
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 'auto',
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    body3: {
        fontSize: 12,
        color: COLORS.gray5,
        marginVertical: 3,
    },
    h3: {
        fontSize: 12,
        color: COLORS.gray5,
        marginVertical: 3,
        fontFamily: "bold",
        marginRight: 6
    },
    searchBarContainer: {
        width: SIZES.width - 32,
        backgroundColor: "#F9F9F9",
        height: 52,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8
    },
    searchInput: {
        paddingHorizontal: 6,
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.black
    },
    boxContainer: {
        width: 80,
        height: 80,
        borderRadius: 18,
        backgroundColor: "#F2F4F9",
        alignItems: "center",
        justifyContent: "center"
    },
    pinIcon: {
        width: 32,
        height: 32,
        tintColor: COLORS.primary
    },
    locationName: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginVertical: 8
    },
    locationAddress: {
        fontSize: 14,
        fontFamily: "medium",
        color: "gray"
    },
    viewTime: {
        flexDirection: "row",
        alignItems: "center"
    },
    timeline: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.black,
        marginLeft: 12
    },
    routingIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.primary
    },
    viewLine: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    separateLine: {
        height: .6,
        borderWidth: .2,
        borderColor: COLORS.gray,
        marginVertical: 12,
        width: SIZES.width - 32
    },
    trackNumber: {
        fontSize: 14,
        fontFamily: "medium",
        color: "gray",
        textAlign: "center"
    }
})

export default YourAddress