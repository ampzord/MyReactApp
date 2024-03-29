import React from "react";
import { myStore } from "../stores/myStore";

const OtherComponent: React.FC = () => {
    const [initialSettings] = myStore.use("settings");

  return (
    <div className="OtherComponent">
        { initialSettings.type === 'HelloWorld' && <p> Its Hello World</p>}
        { initialSettings.type === 'INITIAL' && <p> Its INITIAL</p>}
    </div>
  );
};

export default OtherComponent;
