function AboutMe() {
    return (
        <div className="ml-7 pt-7 w-full h-full overflow-auto w3-animate-right">
            {/* Title */}
            <h1
                style={{ fontFamily: 'Anonymous Pro',  }}
                className="text-[#F0EEEB] text-3xl font-semibold mb-3"
            >
                Hello!
            </h1>

            <div className="flex flex-col md:flex-row gap8 items-start">
                <img src="/pfpkaito.jpg" alt="" width={250} height={150} />

                {/* Description */}
                <div className="w-full ml-0 md:ml-5 lg:ml-5 mb-5 text-[#F0EEEB] text-lg md:text-xl lg:text-xl">
                    <p>♬  call me Chelsea/Usamin</p>
                    <p>♬  she/her</p>
                    <p>♬  20+</p>
                    <p>♬  mostly tweet in ID but sometimes I use ENG too</p>
                </div>
            </div>
                
            <div className="text-[#F0EEEB] mt-5 text-lg md:text-xl lg:text-xl">
                <p>this website will contains:</p>
                <p>├── about me (this section)</p>
                <p>├── interests</p>
                <p>├── faves</p>
                <p>├── before you follow</p>
                <p>└── don't interact/don't follow</p>
            </div>
        </div>
    );
}

export default AboutMe;