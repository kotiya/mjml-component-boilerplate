import * as React from 'react';
    import { Html, Body, Section, Column, Text } from '@react-email/components';
    
    export function IndexEmail(props) {
      const { url } = props;
    
      return (
        <Html><Body><Section><Column><BasicComponent>I'm among stars</BasicComponent></Column></Section><ImageText>MJML rules! hello modified</ImageText><Layout><Text style= {{"color":"blue","fontSize":"10px"}}>A super nice layout component</Text></Layout></Body></Html>
      );
    }
    
    export default IndexEmail;