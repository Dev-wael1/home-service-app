import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { mapDarkStyle, mapStandardStyle } from '../data/mapData';

const ProviderLocationMap = ({ providerCoordinates }) => {
  const { dark } = useTheme();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={dark ? mapDarkStyle : mapStandardStyle}
        initialRegion={{
          latitude: providerCoordinates.latitude,
          longitude: providerCoordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: providerCoordinates.latitude,
            longitude: providerCoordinates.longitude,
          }}
          title="Provider Location"
          description="This is where your provider is located"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width - 32,
    height: 252,
    borderRadius: 16,
    paddingVertical: 12,
  },
  map: {
    width: SIZES.width - 32,
    height: 252,
    borderRadius: 12,
  },
});

export default  ProviderLocationMap;