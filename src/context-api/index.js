import React, { useEffect, useState } from "react";
import { ThemeContext, themes } from "./Theme";
import Card from "./Card";

function ContextAPI() {
  const [token, setToken] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken('mq2c8754285vquy08u21n895u7v90845u')
    }, 4000)
  }, [setToken])
  
  return(
    <ThemeContext.Provider value={{...themes.primary, token}}>
      <Card />
    </ThemeContext.Provider>
  );
}

export default ContextAPI;