import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const ReviewStars = ({ review, size, color }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < review; i++) {
      stars.push(
        <View
          style={{marginRight: 4}}
          key={i}
        >
            <FontAwesome key={i} name="star" size={size} color={color} />
        </View>
      
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {renderStars()}
    </View>
  );
};

export default ReviewStars;