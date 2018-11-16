import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

export default CardSection;

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5, // spaceing between content and border
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
  });