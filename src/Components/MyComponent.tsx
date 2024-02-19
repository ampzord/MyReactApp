import React from "react";
import { myStore } from "../stores/myStore";
import SubComponent from "./SubComponent";

const MyComponent: React.FC = () => {

  const initialSettings = myStore.get("settings");

  return (
    <div>
        {initialSettings.type}
        <SubComponent />
    </div>
  );
};

export default MyComponent;