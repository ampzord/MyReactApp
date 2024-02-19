import React from "react";
import { myStore } from "../stores/myStore";

const SubComponent: React.FC = () => {
    
    const updateSettings = (value: number) => {
        if (value === 1)
            myStore.update({ settings: { ...myStore.get('settings'), type: 'INITIAL' } });
        else
            myStore.update({ settings: { ...myStore.get('settings'), type: 'HelloWorld' } });
    }

    console.log('myStore.getAll():', myStore.getAll());
    console.log('myStore.useAll():', myStore.useAll());
    

  return (
    <div>
        <button onClick={() => updateSettings(1)}>change to INITIAL</button>
        <button onClick={() => updateSettings(2)}>change to HelloWorld</button>
    </div>
  );
};

export default SubComponent;
