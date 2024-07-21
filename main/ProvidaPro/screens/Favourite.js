import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { category, myWishlistServices as initialWishlistServices } from '../data';
import RBSheet from "react-native-raw-bottom-sheet";
import Button from '../components/Button';
import WishlistServiceCard from '../components/WishlistServiceCard';
import { useTheme } from '../theme/ThemeProvider';

const Favourite = ({ navigation }) => {
    const refRBSheet = useRef();
    const [selectedWishlistItem, setSelectedWishlistItem] = useState(null);
    const [myWishlistServices, setMyWishlistServices] = useState(initialWishlistServices || []);
    const { colors, dark } = useTheme();

    const handleRemoveBookmark = () => {
        // Implement your logic to remove the selectedWishlistItem from the bookmark list
        if (selectedWishlistItem) {
            const updatedBookmarkCourses = myWishlistServices.filter(
                (course) => course.id !== selectedWishlistItem.id
            );
            setMyWishlistServices(updatedBookmarkCourses);

            // Close the bottom sheet
            refRBSheet.current.close();
        }
    };
    
    /**
     * Render header
     */
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.arrowBack}
                            resizeMode='contain'
                            style={[styles.backIcon, { 
                                tintColor: dark? COLORS.white : COLORS.greyscale900
                            }]}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { 
                        color: dark? COLORS.white : COLORS.greyscale900
                    }]}>
                        My Wishlist
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={icons.moreCircle}
                        resizeMode='contain'
                        style={[styles.moreIcon, { 
                            tintColor: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    /**
       * Render my bookmark courses
       */
    const renderMyWishlistServices = () => {
        const [selectedCategories, setSelectedCategories] = useState(["1"]);

        const filteredServices = myWishlistServices.filter(course => selectedCategories.includes("1") || selectedCategories.includes(course.categoryId));

        // Category item
        const renderCategoryItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    backgroundColor: selectedCategories.includes(item.id) ? COLORS.primary : "transparent",
                    padding: 10,
                    marginVertical: 5,
                    borderColor: COLORS.primary,
                    borderWidth: 1.3,
                    borderRadius: 24,
                    marginRight: 12,
                }}
                onPress={() => toggleCategory(item.id)}>
                <Text style={{
                    color: selectedCategories.includes(item.id) ? COLORS.white : COLORS.primary
                }}>{item.name}</Text>
            </TouchableOpacity>
        );

        // Toggle category selection
        const toggleCategory = (categoryId) => {
            const updatedCategories = [...selectedCategories];
            const index = updatedCategories.indexOf(categoryId);

            if (index === -1) {
                updatedCategories.push(categoryId);
            } else {
                updatedCategories.splice(index, 1);
            }

            setSelectedCategories(updatedCategories);
        };

        return (
            <View>
                <View style={styles.categoryContainer}>
                    <FlatList
                        data={category}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={renderCategoryItem}
                    />
                </View>
                <FlatList
                    data={filteredServices}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <WishlistServiceCard
                                name={item.name}
                                image={item.image}
                                providerName={item.providerName}
                                price={item.price}
                                isOnDiscount={item.isOnDiscount}
                                oldPrice={item.oldPrice}
                                rating={item.rating}
                                numReviews={item.numReviews}
                                onPress={() => navigation.navigate("ServiceDetails")}
                                categoryId={item.categoryId}
                                bookmarkOnPress={() => {
                                    // Show the bookmark item in the bottom sheet
                                    setSelectedWishlistItem(item);
                                    refRBSheet.current.open()
                                }}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                {renderHeader()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {renderMyWishlistServices()}
                </ScrollView>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={380}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    draggableIcon: {
                        backgroundColor: dark ? COLORS.greyscale300 : COLORS.greyscale300,
                    },
                    container: {
                        borderTopRightRadius: 32,
                        borderTopLeftRadius: 32,
                        height: 380,
                        backgroundColor: dark ? COLORS.dark2 : COLORS.white,
                        alignItems: "center",
                        width: "100%"
                    }
                }}>
                <Text style={[styles.bottomSubtitle, { 
                    color: dark ? COLORS.white : COLORS.black
                }]}>Remove from Bookmark?</Text>
                <View style={styles.separateLine} />

                <View style={[styles.selectedBookmarkContainer, { 
                    ackgroundColor: dark ? COLORS.dark2 : COLORS.tertiaryWhite
                }]}>
                    <WishlistServiceCard
                        name={selectedWishlistItem?.name}
                        image={selectedWishlistItem?.image}
                        providerName={selectedWishlistItem?.providerName}
                        price={selectedWishlistItem?.price}
                        isOnDiscount={selectedWishlistItem?.isOnDiscount}
                        oldPrice={selectedWishlistItem?.oldPrice}
                        rating={selectedWishlistItem?.rating}
                        numReviews={selectedWishlistItem?.numReviews}
                        onPress={() => navigation.navigate("ServiceDetails")}
                        categoryId={selectedWishlistItem?.categoryId}
                        containerStyles={{
                            backgroundColor: COLORS.white
                        }}
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <Button
                        title="Cancel"
                        style={{
                            width: (SIZES.width - 32) / 2 - 8,
                            backgroundColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary,
                            borderRadius: 32,
                            borderColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary
                        }}
                        textColor={dark ? COLORS.white : COLORS.primary}
                        onPress={() => refRBSheet.current.close()}
                    />
                    <Button
                        title="Yes, Remove"
                        filled
                        style={styles.removeButton}
                        onPress={handleRemoveBookmark}
                    />
                </View>
            </RBSheet>
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
    headerContainer: {
        flexDirection: "row",
        width: SIZES.width - 32,
        justifyContent: "space-between",
        marginBottom: 16
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.black
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'bold',
        color: COLORS.black,
        marginLeft: 16
    },
    moreIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    categoryContainer: {
        marginTop: 0
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
        paddingHorizontal: 16,
        width: "100%"
    },
    cancelButton: {
        width: (SIZES.width - 32) / 2 - 8,
        backgroundColor: COLORS.tansparentPrimary,
        borderRadius: 32
    },
    removeButton: {
        width: (SIZES.width - 32) / 2 - 8,
        backgroundColor: COLORS.primary,
        borderRadius: 32
    },
    bottomTitle: {
        fontSize: 24,
        fontFamily: "semiBold",
        color: "red",
        textAlign: "center",
    },
    bottomSubtitle: {
        fontSize: 22,
        fontFamily: "bold",
        color: COLORS.greyscale900,
        textAlign: "center",
        marginVertical: 12
    },
    selectedBookmarkContainer: {
        marginVertical: 16
    },
    separateLine: {
        width: "100%",
        height: .2,
        backgroundColor: COLORS.greyscale300,
        marginHorizontal: 16
    }
})

export default Favourite