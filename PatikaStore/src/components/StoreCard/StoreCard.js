import React from "react";
import { View,Text,Image } from "react-native";
import styles from './StoreCard.style';


const StoreCard = ({product}) =>{

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL}}/>
            <View>
                <Text style = {styles.title}>{product.title}</Text>
                <Text style = {styles.price}>{product.price}</Text>
               
                <Text 
                style={styles.instock}>{product.inStock ? "" : "Stokta Yok"}</Text>
            </View>

        </View>
    );
};

export default StoreCard;