import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="bg-[url(../public/kaitobg.png)] bg-cover bg-center h-screen w-screen">
            <Sidebar />
            <MainContainer />
        </div>
    )
}

export default App;