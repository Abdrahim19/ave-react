import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define the types for your context
interface YourContextProps {
  step: number;
  showPopup:boolean;
  userType:string;
  handleNext: () => void;
  handlePrevious: () => void;
  toggleshowPopup:() => void;
  handleButtonClick:(value:string) => void;
  ToStep:(stepNumber:number) => void
}

// Create the context
const YourContext = createContext<YourContextProps | undefined>(undefined);

// Create a provider for your context
interface YourContextProviderProps {
  children: ReactNode;
}

const YourContextProvider: React.FC<YourContextProviderProps> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [userType, setuserType] = useState<string>('Particulier');

  const handleButtonClick = (value:string) => {
    setuserType(value);
  };
  
  const ToStep = (stepNumber:number) => {
    if ( step > stepNumber ) {
       return setStep(stepNumber)
    }
  }


  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const toggleshowPopup = () => {
    setShowPopup(!showPopup)
  };

  const contextValue: YourContextProps = {
    step,
    handleNext,
    handlePrevious,
    showPopup,
    toggleshowPopup,
    userType,
    handleButtonClick,
    ToStep
  };

  return <YourContext.Provider value={contextValue}>{children}</YourContext.Provider>;
};

// Create a custom hook for using the context
const useYourContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourContextProvider');
  }
  return context;
};

export { YourContextProvider, useYourContext };
