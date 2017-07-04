import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"

import Particles from 'react-particles-js';


const rotate360 = keyframes`
	0% {
        color: transparent;
	}

	100% {
		 color: radboats;
	}
`;
//    //animation: ${rotate360} 2s linear infinite;

export const HeadBoardLink = styled(Link)`
    &:hover {
        -webkit-transition: all 0.5s;
        position: relative;
        font-weight: bold;
        font-size: 120%;
        &::after {
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            content: '';
            width: 70%;
            height: 2px;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgb(255,64,129);
            left: 15%;
        }
    }
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 42px;
`;

export const ResumeFrame = styled.iframe`
    width: 100%;
    height: 1150px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`;

export const ParticleStyle = styled(Particles)`
    min-height: 100% !important;
`;

export const ParticleBackground = styled.div`
    position: absolute;
    min-height: 100%;
    min-width: 100%;
`

export const ParticleBackground_About = styled(ParticleBackground)`
    background-color: rgb(0, 51, 102);
`;

export const ParticleBackground_Experiences = styled(ParticleBackground)`
    background-color: rgb(1, 24, 47);
`;

export const ParticleBackground_Projects = styled(ParticleBackground)`
    background-color: rgb(0, 0, 0);
`;

export const ParticleBackground_Resume = styled(ParticleBackground)`
    background-color: rgb(35,39,44);
`;

export const ParticleBackground_Contact = styled(ParticleBackground)`
    background-color: rgb(41, 36, 29);
`;