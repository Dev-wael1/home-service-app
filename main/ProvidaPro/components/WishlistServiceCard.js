import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

const WishlistServiceCard = ({
    name,
    image,
    providerName,
    price,
    isOnDiscount,
    oldPrice,
    rating,
    numReviews,
    onPress,
    bookmarkOnPress,
    containerStyles
}) => {
    const { dark } = useTheme();

    return (
        <TouchableOpacity onPress={onPress} 
        style={[styles.container, containerStyles, { 
            backgroundColor: dark ? COLORS.dark2 : COLORS.white
        } ]}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.courseImage}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.topContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>{providerName}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={bookmarkOnPress}>
                        <Image
                            source={icons.heart}
                            resizeMode='contain'
                            style={styles.bookmarkIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.name, { 
                    color: dark ? COLORS.secondaryWhite : COLORS.greyscale900,
                }]}>{name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${price}</Text>
                    {
                        isOnDiscount && <Text style={[styles.oldPrice, { 
                            color: dark ? COLORS.greyscale300 : COLORS.grayscale700
                        }]}>{"   "}${oldPrice}</Text>
                    }
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star-half-empty" size={16} color="orange" />
                    <Text style={[styles.rating, { color: dark ? COLORS.greyscale300 : COLORS.grayscale700 }]}>{rating}</Text>
                    <Text style={[styles.numReviews, { color: dark ? COLORS.greyscale300 : COLORS.grayscale700 }]}> |  {numReviews} reviews</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:"center",
        height: 148,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0,
        marginVertical: 8
    },
    courseImage: {
        width: 124,
        height: 124,
        borderRadius: 16,
        marginRight: 16,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: COLORS.transparentTertiary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 14,
        fontFamily: 'semiBold',
        color: COLORS.primary
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.red
    },
    name: {
        fontSize: 16,
        fontFamily: 'bold',
        color: COLORS.black,
        marginVertical: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    price: {
        fontSize: 18,
        fontFamily: 'bold',
        color: COLORS.primary,
    },
    oldPrice: {
        fontSize: 14,
        fontFamily: 'medium',
        color: "gray",
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        fontFamily: 'medium',
        color: "gray",
    },
    numReviews: {
        fontSize: 14,
        fontFamily: 'medium',
        color: "gray",
        marginLeft: 8,
    }
})

export default WishlistServiceCard