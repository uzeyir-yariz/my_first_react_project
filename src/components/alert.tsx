import { ReactNode } from "react";

interface props{
    childiren: ReactNode;
}

const Alert = ({childiren}: props) => {
  return (
    <div className='alert alert-primary'> {childiren} </div>
  )
}

export default Alert
