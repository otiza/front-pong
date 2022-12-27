import { rejects } from 'assert';
import axios from 'axios';
import fetch from 'node-fetch'
import { resolve } from 'path';
import { useCallback } from 'react';
import { account, accountContext  } from '../../context/account.context';

 // @ts-ignore
const useAccounts = ({children}) => {

   const mapAccount = useCallback((a: any) => {
      return {
         userId: a?.userId,
         username: a?.username,
         email: a?.email
      };
   },[])

   
   const getAccounts =  (): Promise<account[]>  =>  {
     return  new Promise<account[]>((resolve, rejects) => {
      // rejects('sdf')
      axios.get(
            'http://localhost:5000/users/all')
            .then((res)=> {
               if (res.status === 200)
               {
               //@ts-ignore
               resolve(JSON.parse(res.data).map((a) => mapAccount(a)));
               }
               rejects(res.status);
            }).catch((err) => rejects(err));

         });
   };

   return (
      <accountContext.Provider
      value={
       {
        getAccounts: getAccounts
       }
      }
      >
         {children}
      </accountContext.Provider>
   );

};
// class   useAccounts {

//     // change to env 
//    //   return new Promise(async (resolve, reject) => {
//    //      try {
//    //         const data = await fetch(
//    //            'http://localhost:5000/users/all');
//    //         return resolve(data.text);
//    //      } catch (err) {
//    //         return reject(err);
//    //      }
//    //   });
// }
export default useAccounts;
