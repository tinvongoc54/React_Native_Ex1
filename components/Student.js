import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : 1
        };
    }

    render() {
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.state.age}</Text>
                <Text>{this.state.height}</Text>
            </View>
        );
    }
}