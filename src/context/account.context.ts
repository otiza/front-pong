import {createContext} from 'react'

declare type account = {  
    userId: string;
    username: string;
    email: string;
};

const accountsContextValue= {
    getAccounts: () : Promise<account[]> => {
        return Promise.reject("sdf");
    },
}

const accountContext = createContext(accountsContextValue);

export {accountContext, accountsContextValue, account};