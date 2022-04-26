import { useState } from "react";
import { Body, TabTypes } from "./Body";
import { Header } from "./Header";

export const Tab: React.FC = () => {
    const [activeTab, setActiveTab] = useState(TabTypes.ANTRAGLISTE);
    const handleTabClick = (active) => {
        setActiveTab(active);
        console.log("the current state is", activeTab);
    };

    return (
        <div className="">
            <Header activeTab={activeTab} onClick={handleTabClick} />
            <Body activeTab={activeTab} />
        </div>
    );
};
