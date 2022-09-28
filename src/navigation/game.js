import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, MainMenu, Question } from "../screens";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator
            initiaulRouteName="Menú"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'Candy',
                },
            }}
        >
            <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                options={{
                    title: 'Menú'
                }}
            />
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
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default GameNavigator;
