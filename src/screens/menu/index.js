import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CategoryItem } from "../../components";
import {styles} from "./styles";

const MainMenu = () => {
    const renderItem = () => <CategoryItem/>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interrogados</Text>
            <Text style={styles.text}>El juego consiste en responder preguntas al estilo trivia, ganarás si logras 3 respuestas correctas. Si respondes incorrectamente se reiniciará la partida</Text>
            <Button
            color={'#CCBC8E'}
            title="Comenzar el juego!"
            style={styles.button}
            renderItem={renderItem}
            >Comenzar Juego</Button>
        </View>
    )
}

export default MainMenu;