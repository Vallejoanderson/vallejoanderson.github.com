import React from 'react';
import { AppRouter } from './routers/AppRouter';

export const PortfolioApp = () => {

  return(
    <div className=" bg-deskImage bg-center bg-cover bg-fixed bg-black w-screen h-screen">
      <div className="bg-black/75 bg-cover w-screen h-screen">
        <AppRouter />
      </div>
    </div>
  )
}