import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const ReasonItem = ({ checked, onPress, title }) => {
    const { dark } = useTheme();
    
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={{ marginLeft: 8 }} onPress={onPress}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 10,
                        }}
                    >
                        {checked && <View style={{
                            height: 10,
                            width: 10,
                            backgroundColor: COLORS.primary,
                            borderRadius: 999
                        }} />}
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={[styles.title, {
                        color: dark ? COLORS.white : COLORS.black
                    }]}>{title}</Text>
                </View>
            </View>
            <View style={styles.leftContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 26,
        width: 26,
        marginRight: 16
    },
    title: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.black
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default ReasonItem