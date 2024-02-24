import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/btn";


function app(){
  const [alertVisible, setAlertVisible] = useState(false);

  return(
    <>
      {alertVisible && <Alert>my alert<Alert/>}
      <Button />
    </>
  );
}

export default app;