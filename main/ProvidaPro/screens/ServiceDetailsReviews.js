import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import ReviewCard from '../components/ReviewCard';
import { Fontisto } from "@expo/vector-icons";
import { useTheme } from '../theme/ThemeProvider';
import Rating from '../components/Rating';
import Button from '../components/Button';
import { reviews } from '../data';

const ServiceDetailsReviews = ({ navigation }) => {
    const { colors, dark } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true);
    }, []);
    
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
                            source={icons.back}
                            resizeMode='contain'
                            style={[styles.backIcon, {
                                tintColor: dark ? COLORS.white : COLORS.greyscale900
                            }]}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, {
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>
                        4.8 (4,479 reviews)
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={icons.moreCircle}
                        resizeMode='contain'
                        style={[styles.moreIcon, {
                            tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 
     * @returns render reviews modal
     */

    const renderModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}>
                    <View style={[styles.modalContainer]}>
                        <View style={[styles.modalSubContainer, {
                            backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
                        }]}>
                            <View style={styles.backgroundIllustration}>
                                <Image
                                    source={illustrations.background}
                                    resizeMode='contain'
                                    style={styles.modalIllustration}
                                />
                                <Image
                                    source={icons.editPencil}
                                    resizeMode='contain'
                                    style={styles.editPencilIcon}
                                />
                            </View>
                            <Text style={styles.modalTitle}>Booking Completed!</Text>
                            <Text style={[styles.modalSubtitle, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>
                                Please leave a review  for others.
                            </Text>
                            <Rating
                                color={COLORS.primary}
                            />
                            <TextInput
                                placeholder="This service is so nice 🔥"
                                placeholderTextColor={dark ? COLORS.secondaryWhite : COLORS.black}
                                style={styles.modalInput}
                            />
                            <Button
                                title="Write Review"
                                filled
                                onPress={() => {
                                    setModalVisible(false)
                                    navigation.goBack()
                                }}
                                style={{
                                    width: "100%",
                                    marginTop: 12
                                }}
                            />
                            <Button
                                title="Cancel"
                                onPress={() => {
                                    setModalVisible(false)
                                }}
                                textColor={dark ? COLORS.white : COLORS.primary}
                                style={{
                                    width: "100%",
                                    marginTop: 12,
                                    backgroundColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary,
                                    borderColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    /*
    ** render content
    */
    const renderContent = () => {
        const [selectedRating, setSelectedRating] = useState("All");

        const renderRatingButton = (rating) => (
            <TouchableOpacity
                key={rating}
                style={[styles.ratingButton, selectedRating === rating && styles.selectedRatingButton]}
                onPress={() => setSelectedRating(rating)}
            >
                <Fontisto name="star" size={12} color={selectedRating === rating ? COLORS.white : COLORS.primary} />
                <Text style={[styles.ratingButtonText, selectedRating === rating && styles.selectedRatingButtonText]}>{rating}</Text>
            </TouchableOpacity>
        );

        const filteredReviews = selectedRating === "All" ? reviews : reviews.filter(review => review.avgRating === selectedRating);
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.container, { backgroundColor: colors.background }]}>
                {/* Horizontal FlatList for rating buttons */}
                <FlatList
                    horizontal
                    data={["All", 5, 4, "3", "2", "1"]}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => renderRatingButton(item)}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.ratingButtonContainer}
                />
                <FlatList
                    data={filteredReviews}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <ReviewCard
                            avatar={item.avatar}
                            name={item.name}
                            description={item.description}
                            avgRating={item.avgRating}
                            date={item.date}
                            numLikes={item.numLikes}
                        />
                    )}
                />
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                {renderHeader()}
                {renderContent()}
            </View>
            {renderModal()}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        flexDirection: "row",
        width: SIZES.width - 32,
        justifyContent: "space-between",
        marginBottom: 0
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
    reviewHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12
    },
    reviewHeaderLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    starIcon: {
        width: 16,
        height: 16,
    },
    starTitle: {
        fontSize: 16,
        fontFamily: "bold",
        color: COLORS.black2
    },
    seeAll: {
        fontSize: 16,
        fontFamily: "semiBold",
        color: COLORS.primary
    },
    // Styles for rating buttons
    ratingButtonContainer: {
        paddingVertical: 10,
        marginVertical: 12
    },
    ratingButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1.4,
        borderColor: COLORS.primary,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    selectedRatingButton: {
        backgroundColor: COLORS.primary,
    },
    ratingButtonText: {
        color: COLORS.primary,
        fontSize: 16,
        marginLeft: 10,
    },
    selectedRatingButtonText: {
        color: COLORS.white,
    },
    modalTitle: {
        fontSize: 24,
        fontFamily: "bold",
        color: COLORS.primary,
        textAlign: "center",
        marginVertical: 12
    },
    modalSubtitle: {
        fontSize: 16,
        fontFamily: "regular",
        color: COLORS.black,
        textAlign: "center",
        marginVertical: 12,
        marginHorizontal: 16
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalSubContainer: {
        height: 622,
        width: SIZES.width * 0.86,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    backgroundIllustration: {
        height: 150,
        width: 150,
        marginVertical: 22,
        alignItems: "center",
        justifyContent: "center",
        zIndex: -999
    },
    modalIllustration: {
        height: 150,
        width: 150,
    },
    modalInput: {
        width: "100%",
        height: 52,
        backgroundColor: COLORS.tansparentPrimary,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderColor: COLORS.primary,
        borderWidth: 1,
        marginVertical: 12
    },
    editPencilIcon: {
        width: 42,
        height: 42,
        tintColor: COLORS.white,
        zIndex: 99999,
        position: "absolute",
        top: 54,
        left: 60,
    }
})

export default ServiceDetailsReviews