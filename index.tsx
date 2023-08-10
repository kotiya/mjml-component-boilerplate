import * as React from 'react';
    import { Html, Body, Section, Column, BasicComponentComponent, ImageTextComponent, LayoutComponent, Text } from '@react-email/components';
    
    export function IndexEmail(props) {
      const { url } = props;
    
      return (
        <Html><Body><Section><Column><BasicComponentComponent style= {{"color":"green"}}>I'm among stars</BasicComponentComponent></Column></Section><ImageTextComponent style= {{"backgroundColor":"#DD685B","fontSize":"24px"}} attributes= {{"imageSrc":"https://mjml.io/assets/img/mjml-logo.png","imageWidth":"100px","imagePosition":"left"}}>MJML rules! hello modified</ImageTextComponent><LayoutComponent><Text style= {{"color":"blue","fontSize":"10px"}}>A super nice layout component</Text></LayoutComponent></Body></Html>
      );
    }
    
    export default IndexEmail;