import { createContext, useContext, useState} from 'react';

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState({ message: '', data: {} });

    const updateSharedData = (message, data) => {
      setSharedData({ message, data });
    };

    return (
        <PromptContext.Provider value={{ sharedData, updateSharedData }}>
            {children}
        </PromptContext.Provider>
    );
};

export const usePromptContext = () => {
    return useContext(PromptContext)
};
