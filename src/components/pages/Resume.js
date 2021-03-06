import React from 'react'
import { Div, Text, Flex, Button } from '../atoms'
import { Header, InfoRow} from '../molecules'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled(Div)`
  height: 100%;
`;

const Content = styled(Flex)`
  align-items: center;
  padding-bottom: 32px;
  display: flex;
`;

const Label = styled(Text)`
  border-bottom: 1px solid ${p => p.theme.colors.text};
  width: auto;
  padding: 8px 16px;
  margin: 32px 0px 32px 0px;
  display: inline-block;
  font-size: 24px;
  @media(max-width: 767px){
    margin-top: 16px;
  }
`;

const Img = styled.img`
  max-width: 720px;
  height: auto;
  box-shadow: ${p => p.theme.colors.card};
`;

function Resume(props) {
  return (
    <Container bg="light">
      <Header/>
      <Content>
        <Label value="Resumé"/>
        <Img src="./photos/ResumeLight.jpg"/>
      </Content>
    </Container>
  );
}

export default Resume;
