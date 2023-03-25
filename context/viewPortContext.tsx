import React, { useEffect, ReactNode, useLayoutEffect, useMemo } from 'react';

export type ViewportContextType = {
  width: number;
  height: number;
};

const ViewportContext = React.createContext<ViewportContextType>({
  height: 0,
  width: 0,
});

const ViewportProvider = ({ children }: { children: ReactNode }) => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const value = useMemo(() => {
    return { width, height };
  }, [width, height]);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = React.useContext(ViewportContext);
  return { width, height };
};

export default ViewportProvider;
