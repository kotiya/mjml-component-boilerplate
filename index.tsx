import * as React from 'react';
    import { Html, Body, Section, Column, BasicComponent, ImageText, Layout, Text } from '@react-email/components';
    
    export function IndexEmail(props) {
      const { url } = props;
    
      return (
        <Html><Body><Section><Column><BasicComponent style= {{"color":"green"}}>I'm among stars</BasicComponent></Column></Section><ImageText style= {{"backgroundColor":"#DD685B","fontSize":"24px"}} attributes= {{"imageSrc":"https://mjml.io/assets/img/mjml-logo.png","imageWidth":"100px","imagePosition":"left"}}>MJML rules! hello modified</ImageText><Layout><Text style= {{"color":"blue","fontSize":"10px"}}>A super nice layout component</Text></Layout></Body></Html>
      );
    }
    
    export default IndexEmail;