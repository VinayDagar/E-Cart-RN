import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class SeeMoreComponent extends Component {
    render() {
        return(
            <View style={{flex: 1, justifyContent: "space-between", flexDirection: 'row'}}>
                <Text style={{ fontSize: 16, color: "lightblue" }}>{this.props.message}</Text>
                <AntDesign name="right" size={16} color="lightblue" />
            </View>
        );
    }
};