import React from "react";
import { isAndroid } from "../utils";
import {Categories, Question} from '../screens'
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator
           initiaulRouteName ="Categories"
           screenOptions={{
            headerStyle: {
                backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontFamily: 'Lato-Bold',
            },
           }}
        >
            <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
                title: 'Categorias'
            }}
            />

            <Stack.Screen
            name="Question"
            component={Question}
            options={{
                title: 'Pregunta'
            }}
            />
        </Stack.Navigator>
    )
}

export default GameNavigator;
  