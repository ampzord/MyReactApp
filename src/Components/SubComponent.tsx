import React from "react";
import { myStore } from "../stores/myStore";

const SubComponent: React.FC = () => {
   // const [, setHasCookies] = myStore.use('hasCookies', false);
   // Using the key, but not using the value

    
    const updateSettings = (value: number) => {
        if (value === 1)
            myStore.update({ settings: { ...myStore.get('settings'), type: 'INITIAL' } });
        else if (value === 2)
            myStore.update({ settings: { ...myStore.get('settings'), type: 'HelloWorld' } });
        // else

        // myStore.setAll({
        //   ...myStore.useAll(),
        //   myString: 'newAdddedValue',
        // });
    }

    console.log('myStore.getAll():', myStore.getAll());
    console.log('myStore.useAll():', myStore.useAll());
    

  return (
    <div className="SubComponent">
        <button onClick={() => updateSettings(1)}>change to INITIAL</button>
        <button onClick={() => updateSettings(2)}>change to HelloWorld</button>
        {/* <button onClick={() => updateSettings(2)}>change to HelloWorld</button> */}
    </div>
  );
};

export default SubComponent;
