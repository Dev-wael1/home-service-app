import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import BookingItem from '../components/BookingItem';
import { bookingItems } from '../data';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const BookingStep1 = ({ navigation }) => {
    const { colors, dark } = useTheme();

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Header title="House Cleaning" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.itemNum, { 
                        color: dark? COLORS.white : COLORS.greyscale900,
                        marginTop: 22
                    }]}>Enter the number of item to be cleaned</Text>
                    <FlatList
                        data={bookingItems.cleaning}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <BookingItem name={item.name} />
                        )}
                    />
                </ScrollView>
            </View>
            <View style={[styles.bottomContainer, { 
                backgroundColor: dark ? COLORS.dark1 : COLORS.white
            }]}>
                <Button
                    title="Continue - $125"
                    style={styles.bottomBtn}
                    filled
                    onPress={() => navigation.navigate('BookingDetails')}
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
    itemNum: {
        fontSize: 16,
        fontFamily: "regular",
        color: COLORS.black
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: 84,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white
    },
    bottomBtn: {
        width: SIZES.width - 32
    }
})

export default BookingStep1