import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

function BodyText(props) {
    return (
        <Text>
            {props.children}
        </Text>
    );
}


export default BodyText;