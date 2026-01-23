function Interests() {
    return (
        <div className="ml-7 pt-7 pr-10 md:pr-0 lg:pr-0 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                List of my interests ✎ᝰ.ᐟ⋆⑅˚
            </h1>

            {/* Interests List */}
            <ul className="text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                <li className="mb-2">♬  Fate/Grand Order (and another nasuverse)</li>
                <li className="mb-2">♬  Project Sekai and Vocaloid</li>
                <li className="mb-2">♬  Hollow Knight</li>
                <li className="mb-2">♬  Umamusume</li>
                <li className="mb-2">♬  Nikkiverse (Love Nikki and Shining Nikki)</li>
                <li className="mb-2">♬  Ascendance of a Bookworm</li>
                <li className="mb-2">♬  Royal Scandal</li>
                <li className="mb-2">♬  Ensemble Stars!!</li>
                <li className="mb-2">♬  Nine Sols</li>
                <li className="mb-2">♬  Expedition 33</li>
            </ul>
        </div>
    );
}

export default Interests;