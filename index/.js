
  import React from 'react';

  const LayoutComponent = ({ children }) => {

    return <div dangerouslySetInnerHTML={{ __html: <div style="">
        
      </div> }} >{ children }</div>;
  };

  export default LayoutComponent;
  