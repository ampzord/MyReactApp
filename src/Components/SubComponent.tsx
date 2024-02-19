import React from "react";
import { myStore } from "../stores/myStore";

const SubComponent: React.FC = () => {
    const [initialSettings, setInitialSettings] = myStore.use("settings");
    
    const updateSettings = (value: number) => {
        // if (value === 1)
        //     setInitialSettings({ ...initialSettings, type: 'INITIAL'});
        // else
        //     setInitialSettings({ ...initialSettings, type: 'HelloWorld'});
        myStore.update({ settings.type: 'asdada'})
    }

    console.log('myStore.getAll():', myStore.getAll());
    

  return (
    <div>
        <button onClick={() => updateSettings(1)}>change to INITIAL</button>
        <button onClick={() => updateSettings(2)}>change to HelloWorld</button>
    </div>
  );
};

export default SubComponent;
