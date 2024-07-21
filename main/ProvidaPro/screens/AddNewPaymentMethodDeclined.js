import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, illustrations } from '../constants';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../theme/ThemeProvider';

const AddNewPaymentMethodDeclined = ({ navigation }) => {
  const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar hidden={true} />
      <View style={[styles.contentContainer, { backgroundColor: colors.background }]}>
        <Image
          source={illustrations.error1}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={[styles.heading, { 
          color: dark? COLORS.white : COLORS.greyscale900
        }]}>Credit card declined.</Text>
        <Text style={[styles.description, { 
          color: dark? COLORS.white : COLORS.greyscale900
        }]}>
          Something went wrong, please verify your card information.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            filled
            title="RETRY"
            onPress={() => navigation.navigate('PaymentMethod')}
            color={COLORS.red}
            style={styles.retryButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  image: {
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.5,
  },
  heading: {
    ...FONTS.h3,
    marginVertical: 12,
  },
  description: {
    ...FONTS.body4,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: SIZES.width - 32,
  },
  retryButton: {
    borderColor: COLORS.red,
    borderRadius: 30
  },
});

export default AddNewPaymentMethodDeclined;