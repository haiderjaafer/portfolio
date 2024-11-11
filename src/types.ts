import { ReactNode } from "react";

export interface navLinksProps {
    tittle: string;
    path : string;
  } 


  export interface TabData {
    id: string;
    tittle:string;
    content: ReactNode;
  
  
  }


  export interface navLinksDataTypes {
 
    tittle:string;
    href:string;
  
  
  }

  export interface TabButtonDataType {    
    active: boolean;
    selectTab: (event: React.MouseEvent<HTMLButtonElement>) => void; // Define selectTab as a function
    children: ReactNode;
  
  
  }