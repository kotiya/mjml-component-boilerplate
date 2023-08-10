
  import React from 'react';

  const BasicComponentComponent = ({ children }) => {

    return <div dangerouslySetInnerHTML={{ __html: <div style="">
        
      </div> }} >{ children }</div>;
  };

  export default BasicComponentComponent;
  