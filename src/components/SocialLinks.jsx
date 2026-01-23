function SocialLinks() {
    return (
        <div className="ml-7 pt-7 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                Social Links ‧₊˚♪ 𝄞₊˚⊹
            </h1>

            {/* Social Links List */}
            <ul className="text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                {/* Twitter */}
                <li className="mb-2">
                    <span>♬ Twitter: </span>
                    <span className="ml-2">
                        <a href="https://x.com/ChePsea1" className="hover:underline">@ChePsea1</a>
                    </span>
                </li>

                {/* Discord */}
                <li className="mb-2">
                    <span>♬ Discord: </span>
                    <span className="ml-2">
                        usamin_1
                    </span>
                </li>

                {/* Steam */}
                 <li className="mb-2">
                    <span>♬ Steam: </span>
                    <span className="ml-2">
                        <a href="https://steamcommunity.com/profiles/76561199539859476" className="hover:underline">chelseaputri563</a>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default SocialLinks;