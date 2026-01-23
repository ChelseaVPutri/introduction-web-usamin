function Faves() {
    return (
        <div className="ml-7 pt-7 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                Faves ⏦ﾟ♡︎
            </h1>

            {/* Faves List */}
            <div className="overflow-auto">
                <ul className="text-[#F0EEEB] flex flex-col md:flex-row items-start gap-10 text-lg md:text-xl lg:text-xl">
                    <li className="mb-2">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Fate/series and another Nasuverse</span>
                        <p>├── Sherlock Holmes</p>
                        <p>├── James Moriarty</p>
                        <p>├── Charlemagne</p>
                        <p>├── Kirschtaria Wodime</p>
                        <p>├── Morgan le Fae</p>
                        <p>├── Hansa Cervantes</p>
                        <p>└── Ciel</p>
                    </li>

                    <li className="mb-2">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Project Sekai</span>
                        <p>├── KAITO</p>
                        <p>├── Megurine Luka</p>
                        <p>├── All WxS members</p>
                        <p>├── Shizuku Hinomori</p>
                        <p>└── Mafuyu Asahina</p>
                    </li>

                    <li className="mb-2">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Umamusume</span>
                        <p>├── Fuji Kiseki</p>
                        <p>├── Katsuragi Ace</p>
                        <p>├── Sirius Symboli</p>
                        <p>├── Symboli Rudolf</p>
                        <p>├── Mr. CB</p>
                        <p>├── Gentildonna</p>
                        <p>└── Orfevre</p>
                    </li>

                    <li className="mb-2">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Ensemble Stars!!</span>
                        <p>├── Hokuto Hidaka</p>
                        <p>├── Shu Itsuki</p>
                        <p>├── Mika Kagehira</p>
                        <p>└── HiMERU</p>
                    </li>
                </ul>

                <ul className="text-[#F0EEEB] flex flex-col md:flex-row items-start gap-10 text-lg md:text-xl lg:text-xl">
                    <li className="mb-2 mt-10">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Honorable Mention</span>
                        <p>├── Chelsea Carrol (Royal Scandal)</p>
                        <p>├── Umi Sonoda (Love Live!)</p>
                        <p>├── Rozemyne (Honzuki)</p>
                        <p>├── Ferdinand (Honzuki)</p>
                        <p>├── Furina (Genshin Impact)</p>
                        <p>├── Neuvillette (Genshin Impact)</p>
                        <p>├── Pure Vessel (Hollow Knight)</p>
                        <p>├── Hornet (Hollow Knight)</p>
                        <p>└── Yi (Nine Sols)</p>
                    </li>

                    <li className="mb-2 md:mt-10 lg:mt-10">
                        <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">♬  Fav Ship</span>
                        <p>├── Neuvillete x Furina</p>
                        <p>├── Ferdinand x Rozemyne</p>
                        <p>├── Zhongli x Guizhong</p>
                        <p>├── Sirius x Rudolf</p>
                        <p>├── Ace x CB</p>
                        <p>├── KAITO x Luka</p>
                        <p>├── Arthur x Morgan (Fate)</p>
                        <p>├── Kirschtaria x Ophelia</p>
                        <p>├── Kadoc x Gudako</p>
                        <p>├── John x Sherlock (Sherlock Holmes)</p>
                        <p>└── Shakra x Hornet</p>
                    </li>
                </ul>
            </div>         
        </div>
    );
}

export default Faves;