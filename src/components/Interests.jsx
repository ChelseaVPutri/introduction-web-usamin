function Interests() {
    return (
        <div className="ml-7 pt-7 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                List of my interests
            </h1>

            {/* Interests List */}
            <ul className="text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                <li className="mb-2">♬  Fate/Grand Order (and another nasuverse)</li>
                <li className="mb-2">♬  Project Sekai and Vocaloid</li>
                <li className="mb-2">♬  Umamusume</li>
                <li className="mb-2">♬  Nikkiverse (Love Nikki and Shining Nikki)</li>
                <li className="mb-2">♬  Ascendance of a Bookworm</li>
                <li className="mb-2">♬  Royal Scandal</li>
                <li className="mb-2">♬  Ensemble Stars!!</li>
                <li className="mb-2">♬  Love Live!</li>
            </ul>
        </div>
    );
}

export default Interests;