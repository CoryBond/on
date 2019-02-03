import { Link } from "react-router-dom";
import styled from "styled-components";

import Particles from "react-particles-js";

export const HeadBoardLink = styled(Link)`
  &:hover {
    -webkit-transition: all 0.5s;
    position: relative;
    font-weight: bold;
    font-size: 120%;
    color: #fafafa;
    &::after {
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      content: "";
      width: 70%;
      height: 2px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgb(255, 64, 129);
      left: 15%;
    }
  }
  color: #eeeeee !important;
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
`;

export const ParticleBackgroundAbout = styled(ParticleBackground)`
  background-color: #f5f5f5;
`;

export const ParticleBackgroundExperiences = styled(ParticleBackground)`
  background-color: #f5f5f5;
`;

export const ParticleBackgroundProjects = styled(ParticleBackground)`
  background-color: #f5f5f5;
`;

export const ParticleBackgroundResume = styled(ParticleBackground)`
  background-color: #f5f5f5;
`;

export const ParticleBackgroundContact = styled(ParticleBackground)`
  background-color: #f5f5f5;
`;

export const ShrinkingImage = styled.img`
  max-width: 100%;
  height: auto;
  width: auto\9;
`;
