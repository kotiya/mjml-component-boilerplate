
  import React from 'react';

  const BasicComponent = ({ children }) => {

    return <div dangerouslySetInnerHTML={{ __html: <div style="">
        
      </div> }} >{ children }</div>;
  };

  export default BasicComponent;
  