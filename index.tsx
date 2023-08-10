import * as React from 'react';
    import { Html, Body, Section, Column, Text } from '@react-email/components';
    
    export function IndexEmail(props) {
      const { url } = props;
    
      return (
        <Html><Body><Section><Column><BasicComponentComponent>I'm among stars</BasicComponentComponent></Column></Section><ImageTextComponent>MJML rules! hello modified</ImageTextComponent><LayoutComponent><Text style= {{"color":"blue","fontSize":"10px"}}>A super nice layout component</Text></LayoutComponent></Body></Html>
      );
    }
    
    export default IndexEmail;