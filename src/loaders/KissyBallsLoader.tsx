import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from './utilities';
import LoaderBox from './wrapper';



export interface KissyBallsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 60,
    duration: .5,
    colors: [Colors.Purple, Colors.Purple]
}


const KissyBallsLoader = (props: KissyBallsProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const Bounce1 = keyframes`
        0% {
            transform: translatex(0px);
        } 
        65% {
            height: ${size ? size*0.33 : dProps.size*0.33}px;
            width: ${size ? size*0.33 : dProps.size*0.33}px;
        }
        100% {
            height: ${size ? size*0.41 : dProps.size*0.41}px;
            width: ${size ? size*0.22 : dProps.size*0.22}px;
            transform: translatex(${size ? size*0.25 : dProps.size*0.25}px);
        }
    `;

    const Bounce2 = keyframes`
        0% {
            transform: translatex(0px);
        } 
        65% {
            height: ${size ? size*0.33 : dProps.size*0.33}px;
            width: ${size ? size*0.33 : dProps.size*0.33}px;
        }
        100% {
            height: ${size ? size*0.41 : dProps.size*0.41}px;
            width: ${size ? size*0.22 : dProps.size*0.22}px;
            transform: translatex(-${size ? size*0.25 : dProps.size*0.25}px);
        }
    `;

    const KissyBalls = styled('div')`
        position: relative;
        width: inherit;
        height: ${size ? size/2 : dProps.size/2}px;

        &:after, &:before {
            position: absolute;
            content: "";
            height: ${size ? size*0.33 : dProps.size*0.33}px;
            width: ${size ? size*0.33 : dProps.size*0.33}px;
            top: ${size ? size*0.055 : dProps.size*0.055}px;
            border-radius: 50%;
        }

        &:after {
            background-color: ${colors ? colors[0] : dProps.colors[0]};
            left: ${size ? size*0.66 : dProps.size*0.66}px;
            animation: ${Bounce2} ${loaderDuration(duration, dProps.duration)} ease-in-out infinite;
            animation-direction: alternate;
            animation-play-state: ${pauseAnim(pause)};
        }
        
        &:before {
            background-color: ${colors ? colors[1] : dProps.colors[1]};
            animation: ${Bounce1} ${loaderDuration(duration, dProps.duration)} ease-in-out infinite;
            animation-direction: alternate;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <KissyBalls></KissyBalls>
        </LoaderBox>
    )
}

export default KissyBallsLoader;