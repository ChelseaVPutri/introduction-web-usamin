import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
    const [activeTab, setActiveTab] = useState("about-me");

    return (
        <div className="bg-[url(/kaitobg.png)] bg-cover bg-center h-screen w-screen">
            <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
            <MainContainer activeTab={activeTab} />
        </div>
    )
}

export default App;