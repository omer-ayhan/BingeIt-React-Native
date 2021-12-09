import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./ModalCardStyle"
import Modal from "react-native-modal"


const genres = ["ACTION", "COMEDY", "DRAMA", "FANTASY", "HORROR", "ROMANCE", "THRILLER",]



const ModalCard = ({ visible, onClose, onSelect }) => {

    const handleSelect = (title) => {
        onSelect(title);
        onClose();
    }


    const Item = ({ title }) => (
        <TouchableOpacity style={styles.title} onPress={() => handleSelect(title)}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );


    const renderItem = ({ item, index }) => (
        <Item title={item} key={index} />
    );
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
        >
            <View style={styles.container}>
                <FlatList
                    data={genres}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        </Modal>
    )
};

export default ModalCard;