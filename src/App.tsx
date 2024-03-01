import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import AppContextProvider from "./store/AppContext";
import { useState, useEffect } from "react";
import styles from "./App.module.scss";

function App() {
  const [isNarrow, setIsNarrow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setIsNarrow(true);
      } else {
        setIsNarrow(false);
      }
    });
  }, [window.innerWidth]);

  return (
    <AppContextProvider>
      <div className={styles.mainContainer}>
        {!isNarrow && <LeftContainer />}
        <RightContainer />
      </div>
    </AppContextProvider>
  );
}

export default App;
