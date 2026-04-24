import React from 'react';

import useRole from '../../customHook/useRole';
import UseAuthContext from '../../customHook/UseAuthContext';

import Loading from '../loading/Loading';
import Error from '../error/Error';

const AdminPrivateRoute = ({children}) => {
      const {loader}=UseAuthContext()
      const {personRole,isLoading}=useRole()
          
         if(loader || isLoading){
             return <Loading />
         }

      if(personRole!=="admin"){
        return <Error></Error>
      }


    return   children
};

export default AdminPrivateRoute;