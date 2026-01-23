import AboutMe from "./AboutMe";
import Interests from "./Interests";
import Faves from "./Faves";

function MainContainer({ activeTab }) {
    return (
        <div className="backdrop-blur-sm bg-[#023e8a]/50 ml-28 md:ml-32 lg:ml-40 mr-3 md:mr-6 lg:mr-6 h-[75%] relative top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
            <div className="w-full h-full p-0">
                {activeTab === 'about-me' && <AboutMe key={'about-me'} />}
                {activeTab === 'interests' && <Interests key={'interests'} />}
                {activeTab === 'faves' && <Faves key={'faves'} />}
            </div>
        </div>
    );
}

export default MainContainer;