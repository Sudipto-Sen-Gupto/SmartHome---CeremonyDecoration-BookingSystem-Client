import React from 'react';

import useRole from '../../customHook/useRole';
import UseAuthContext from '../../customHook/UseAuthContext';
import Errorpage from '../../pages/errorpage/Errorpage';
import Loading from '../loading/Loading';

const AdminPrivateRoute = ({children}) => {
      const {loader}=UseAuthContext()
      const {personRole,isLoading}=useRole()
          
         if(loader || isLoading){
             return <Loading />
         }

      if(personRole!=="admin"){
        return <Errorpage></Errorpage>
      }


    return   children
};

export default AdminPrivateRoute;