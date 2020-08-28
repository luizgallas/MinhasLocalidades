import React from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { Container, BackDrop } from './styles';
import { StoreState } from '../../store/createStore';

export default function Loader() {
    const loadState = useSelector((state: StoreState) => state.enableLoader.enable);
    console.log(loadState);

    return loadState ? (
        <Container transparent>
            <BackDrop>
                <ActivityIndicator size="large"
                    color="#E50191" />
            </BackDrop>
        </Container>
    )
    : null;
};