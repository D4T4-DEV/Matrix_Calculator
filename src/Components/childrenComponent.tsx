import { ReactNode } from "react";

const ChildrenComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <h1 className="title">{children}</h1> ;
}

export default ChildrenComponent;