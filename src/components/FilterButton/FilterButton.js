import React from "react"
import { TouchableOpacity, Text } from "react-native"

import styles from "./FilterButtonStyle"

const FloatingButton = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.title}>Filter</Text>
        </TouchableOpacity>
    )
};

export default FloatingButton;