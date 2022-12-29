import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MainCateTitle = (props) => {
    return (
        <View
            style={styles.mainView}
        >
            <View style={styles.subView}>
                <View
                    style={styles.colorView}>
                </View>
                <Text style={styles.recommendTest}>{props.title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex : 1,
        marginLeft : 10,
        flexDirection : 'row',
        borderColor: 'black',
        borderWidth: 1,
    },
    subView: {
        alignSelf: 'center',
        width: 'auto',
        height: 'auto',
        borderColor: 'black',
        borderWidth: 1,
    },
    colorView: {
        borderRadius : 10,
        height:50,
        marginBottom : 10,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
    },
    recommendTest: {
        top : 0,
        position : 'absolute',
        fontSize: 20
    }
});



export default MainCateTitle;
