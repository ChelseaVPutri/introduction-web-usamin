import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="bg-[url(../public/kaitobg.png)] bg-cover bg-center h-screen w-screen items-center">
            <Sidebar />
        </div>
    )
}

export default App;