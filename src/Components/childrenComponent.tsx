import { ReactNode } from "react";

const ChildrenComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div>{children}</div> ;
}

export default ChildrenComponent;