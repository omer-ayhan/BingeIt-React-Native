import React from "react"
import { TouchableOpacity, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./FilterButtonStyle"

const FloatingButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.title}>Filter</Text>
            <Icon name="format-list-text" size={30} color="white" />
        </TouchableOpacity>
    )
};

export default FloatingButton;