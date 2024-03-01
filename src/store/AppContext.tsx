import React, { useState } from "react";
import Person from "../models/person";

type AppContextObj = {
  personArray: Person[];
  clickedPerson: Person[];
  thumbHandler: (id: number) => void;
  // removeHandler: () => void;
  nextPersonHandler: (id: number) => void;
  previousPersonHandler: (id: number) => void;
};

export const AppContext = React.createContext<AppContextObj | undefined>(
  undefined
);

type Props = {
  children?: React.ReactNode;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const personArray: Person[] = [
    {
      id: 1,
      name: "Andrzej",
      surname: "Sałata",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt maiores accusamus quasi impedit corrupti nesciunt expedita ullam nam eveniet delectus nihil optio accusantium, corporis, commodi ea est voluptatibus labore.",
      photo: "img1.png",
    },
    {
      id: 2,
      name: "Błażej",
      surname: "Kolano",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt maiores accusamus quasi impedit corrupti nesciunt expedita ullam nam eveniet delectus nihil optio accusantium, corporis, commodi ea est voluptatibus labore.",
      photo: "img2.jfif",
    },
    {
      id: 3,
      name: "Mateusz",
      surname: "Mielonka",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt maiores accusamus quasi impedit corrupti nesciunt expedita ullam nam eveniet delectus nihil optio accusantium, corporis, commodi ea est voluptatibus labore.",
      photo: "img3.jfif",
    },
    {
      id: 4,
      name: "Krystyna",
      surname: "Kabłąk",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt maiores accusamus quasi impedit corrupti nesciunt expedita ullam nam eveniet delectus nihil optio accusantium, corporis, commodi ea est voluptatibus labore.",
      photo: "img4.jfif",
    },
  ];

  const [clickedPerson, setClickedPerson] = useState<Person[]>([
    personArray[0],
  ]);

  const thumbHandler = (id: number) => {
    const personClicked = personArray.filter((e) => e.id === id);
    setClickedPerson(personClicked);
  };

  // const removeHandler = () => {
  //   setClickedPerson([]);
  // };

  const nextPersonHandler = (id: number) => {
    const nextPerson = personArray.filter((e) => e.id === id + 1);

    if (nextPerson.length === 0) {
      setClickedPerson([personArray[0]]);
    } else {
      setClickedPerson(nextPerson);
    }
  };

  const previousPersonHandler = (id: number) => {
    const previousPerson = personArray.filter((e) => e.id === id - 1);
    if (previousPerson.length === 0) {
      setClickedPerson([personArray[personArray.length - 1]]);
    } else {
      setClickedPerson(previousPerson);
    }
  };

  const ctxValue: AppContextObj = {
    personArray: personArray,
    clickedPerson: clickedPerson,
    thumbHandler: thumbHandler,
    // removeHandler: removeHandler,
    nextPersonHandler: nextPersonHandler,
    previousPersonHandler: previousPersonHandler,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

export default AppContextProvider;
