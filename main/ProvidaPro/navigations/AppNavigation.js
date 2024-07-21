import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { AddNewCard, AddNewPaymentMethod, AddNewPaymentMethodDeclined, AddNewPaymentMethodSuccess, BookingDetails, BookingStep1, Call, CancelBooking, CancelBookingPaymentMethods, ChangeEmail, ChangePIN, ChangePassword, Chat, CreateNewPIN, CreateNewPassword, CustomerService, EReceipt, EditProfile, FillYourProfile, Fingerprint, ForgotPasswordEmail, ForgotPasswordMethods, ForgotPasswordPhoneNumber, HelpCenter, InviteFriends, Login, MyBookings, Notifications, OTPVerification, Onboarding1, Onboarding2, Onboarding3, Onboarding4, PaymentMethod, PaymentMethods, PopularServices, ReviewSummary, Search, ServiceDetails, ServiceDetailsReviews, SettingsLanguage, SettingsNotifications, SettingsPayment, SettingsPrivacyPolicy, SettingsSecurity, Signup, Welcome, YourAddress } from '../screens';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched')
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true')
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(false)
                }
            } catch (error) {
                setIsFirstLaunch(false)
            }
            setIsLoading(false) // Set loading state to false once the check is complete
        }

        checkIfFirstLaunch()
    }, [])

    if (isLoading) {
        return null // Render a loader or any other loading state component
    }

  return (
    <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{ headerShown: false }}
              // replace the second onboaring1 with login in order to make the user not to see the onboarding 
              // when login the next time
              initialRouteName={isFirstLaunch ? 'Onboarding1' : 'Signup'}>
                <Stack.Screen name="Onboarding1" component={Onboarding1}/>
                <Stack.Screen name="Onboarding2" component={Onboarding2}/>
                <Stack.Screen name="Onboarding3" component={Onboarding3}/>
                <Stack.Screen name="Onboarding4" component={Onboarding4}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="ForgotPasswordMethods" component={ForgotPasswordMethods}/>
                <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail}/>
                <Stack.Screen name="ForgotPasswordPhoneNumber" component={ForgotPasswordPhoneNumber}/>
                <Stack.Screen name="OTPVerification" component={OTPVerification}/>
                <Stack.Screen name="CreateNewPassword" component={CreateNewPassword}/>
                <Stack.Screen name="FillYourProfile" component={FillYourProfile}/>
                <Stack.Screen name="CreateNewPIN" component={CreateNewPIN}/>
                <Stack.Screen name="Fingerprint" component={Fingerprint}/>
                <Stack.Screen name="Main" component={BottomTabNavigation}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="SettingsNotifications" component={SettingsNotifications}/>
                <Stack.Screen name='SettingsPayment' component={SettingsPayment}/>
                <Stack.Screen name="AddNewCard" component={AddNewCard}/>
                <Stack.Screen name="SettingsSecurity" component={SettingsSecurity}/>
                <Stack.Screen name="ChangePIN" component={ChangePIN}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword}/>
                <Stack.Screen name="ChangeEmail" component={ChangeEmail}/>
                <Stack.Screen name="SettingsLanguage" component={SettingsLanguage}/>
                <Stack.Screen name="SettingsPrivacyPolicy" component={SettingsPrivacyPolicy}/>
                <Stack.Screen name="InviteFriends" component={InviteFriends}/>
                <Stack.Screen name="HelpCenter" component={HelpCenter}/>
                <Stack.Screen name="CustomerService" component={CustomerService}/>
                <Stack.Screen name="EReceipt" component={EReceipt}/>
                <Stack.Screen name="Call" component={Call}/>
                <Stack.Screen name="Chat" component={Chat}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="PopularServices" component={PopularServices}/>
                <Stack.Screen name="ServiceDetails" component={ServiceDetails}/>
                <Stack.Screen name="ServiceDetailsReviews" component={ServiceDetailsReviews}/>
                <Stack.Screen name="BookingStep1" component={BookingStep1}/>
                <Stack.Screen name="BookingDetails" component={BookingDetails}/>
                <Stack.Screen name="YourAddress" component={YourAddress}/>
                <Stack.Screen name="PaymentMethods" component={PaymentMethods}/>
                <Stack.Screen name="AddNewPaymentMethod" component={AddNewPaymentMethod}/>
                <Stack.Screen name="AddNewPaymentMethodDeclined" component={AddNewPaymentMethodDeclined}/>
                <Stack.Screen name="AddNewPaymentMethodSuccess" component={AddNewPaymentMethodSuccess}/>
                <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
                <Stack.Screen name="CancelBooking" component={CancelBooking}/>
                <Stack.Screen name="CancelBookingPaymentMethods" component={CancelBookingPaymentMethods}/>
                <Stack.Screen name="MyBookings" component={MyBookings}/>
                <Stack.Screen name="ReviewSummary" component={ReviewSummary}/>
              </Stack.Navigator> 
     </NavigationContainer>
  )
}

export default AppNavigation