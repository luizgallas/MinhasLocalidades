import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoaderState } from '../../store/modules/Loader/types';
import { Image } from 'react-native';
import { Container } from './styles';

export default function Loader() {
    const loadState = useSelector((state: LoaderState) => state.enable);

    if (loadState) {
        return (
            <Container>
                <Image source={require('../../../assets/img/preloader.gif')} />
            </Container>
        )
    } else {
        return null;
    }
};