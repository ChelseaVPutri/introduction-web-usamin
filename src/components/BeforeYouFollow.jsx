function BeforeYouFollow() {
    return(
        <div className="ml-7 pr-10 md:pr-0 lg:pr-0 pb-3 md:pb-0 lg:pb-0 pt-7 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                BYF & DNI ⭒˗⚠˗⭒
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-10 overflow-auto text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                {/* BYF */}
                <div>
                    <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">── .✦ Before You Follow</span>
                    <p>♬ Not spoiler and leak free</p>
                    <p>♬ Very rarely to use CW or TW in my posts</p>
                    <p>♬ Heavy RT account (mostly fanart)</p>
                    <p>♬ Sometimes my words or saying are very harsh</p>
                    <p>♬ Full yapping of current hyperfixation</p>
                    <p>♬ Selective follow</p>
                    <p>♬ Block-unblock or hard block to break mutual</p>
                </div>

                {/* DNI */}
                <div>
                    <span className="font-bold bg-[#84A3BA] px-2 rounded-sm">── .✦ Do Not Interact</span>
                    <p>♬ 02 voters, islamophobic, homophobic, zionist</p>
                    <p>♬ Hate or don't like BxG or GxG couple</p>
                    <p>♬ NSFW account</p>
                    <p>♬ LADS player (except current moots)</p>
                    <p>♬ Fandom police or puritan</p>
                    <p>♬ Kpopers/heavy kpop account</p>
                    <p>♬ Stantwt/American pop enjoyer</p>
                    <p>♬ HC neuvifuri as father-daughter relationship</p>
                    <p>♬ You ship one of these couple:</p>
                    <div className="ml-6">
                        <p>├── Wriothesley x Neuvillette</p>
                        <p>├── Zhongli x Childe</p>
                        <p>├── Neuvillette x Navia</p>
                        <p>├── Sherlock x William (MTP)</p>
                        <p>└── Arlecchino x Furina</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeforeYouFollow;