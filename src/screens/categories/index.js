import React from "react";
import { FlatList, Text, View } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { categories } from "../../constants/data";

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Question', { name: item.title, categoryId: item.id });
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Elija su categoria!</Text>
            { <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.containerList}
            /> }
        </View>
    )
};

export default Categories;