import AboutMe from "./AboutMe";

function MainContainer() {
    return (
        <div className="backdrop-blur-sm bg-[#023e8a]/40 ml-28 md:ml-32 lg:ml-40 mr-3 md:mr-6 lg:mr-6 h-[75%] relative top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
            <AboutMe />
        </div>
    );
}

export default MainContainer;