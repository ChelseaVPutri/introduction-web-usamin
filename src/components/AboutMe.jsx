import kaito from '../assets/pfpkaito.jpg';

function AboutMe() {
    return (
        <div className="ml-7 pt-7 pr-10 md:pr-0 lg:pr-0 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold pb-5"
            >
                Hello!
            </h1>

            <div className="flex flex-col md:flex-row gap-3 items-start">
                <img src={kaito} alt="" width={250} height={150} />

                {/* Description */}
                <div className="w-full ml-0 md:ml-5 lg:ml-5 mb-5 text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                    <p>♬  call me Chelsea/Usamin</p>
                    <p>♬  she/her</p>
                    <p>♬  20+</p>
                    <p>♬  mostly tweet in ID but sometimes I use ENG too</p>
                    <p className="mt-5">⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹</p>
                </div>
            </div>
                
        </div>
    );
}

export default AboutMe;