import React from 'react';
import { View } from 'react-native';

interface Spacer {
    value: number;
}

export default function Spacer({ value }: Spacer) {
    return <View style={{ marginTop: value }}></View>
    
}