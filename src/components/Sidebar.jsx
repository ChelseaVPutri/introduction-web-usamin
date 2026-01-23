function Sidebar({ onTabChange, activeTab }) {
    return (
        <div className="backdrop-blur-xs bg-[#023e8a]/40 fixed ml-5 md:ml-8 lg:ml-10 xl:ml-10 h-[70%] top-1/2 -translate-y-1/2 rounded-full w-17.5 flex flex-col items-center justify-center py-10">
            <ul className="flex flex-col gap-8 overflow-y-auto h-full justify-center">
                {/* About Me */}
                <li>
                    <button
                        onClick={() => onTabChange('about-me')}
                        className={`block transition-transform hover:scale-110 ${activeTab === 'about-me' ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-10 h-10">
                            <g fill="none">
                                <path fill="#66e1ff" d="M18.845 8.177V3.705a.456.456 0 0 0-.456-.456h-1.825a.457.457 0 0 0-.457.456v1.953L12.31 2.164a.456.456 0 0 0-.619 0L1.652 11.583a.457.457 0 0 0 .31.792h2.282v8.67a.913.913 0 0 0 .912.912h13.69a.91.91 0 0 0 .912-.912v-8.67h2.281a.456.456 0 0 0 .31-.792z" />
                                <path fill="#c2f3ff" d="M1.962 12.375h2.05l7.634-7.163a.525.525 0 0 1 .708 0l4.351 4.003l3.137 2.886l.282.274h1.915a.455.455 0 0 0 .31-.792l-3.504-3.406V3.705a.456.456 0 0 0-.456-.456h-1.825a.457.457 0 0 0-.457.456v1.953L12.31 2.165a.456.456 0 0 0-.619 0L1.652 11.583a.457.457 0 0 0 .31.792" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M18.845 8.177V3.705a.456.456 0 0 0-.456-.456h-1.825a.457.457 0 0 0-.457.456v1.953L12.31 2.164a.456.456 0 0 0-.619 0L1.652 11.583a.457.457 0 0 0 .31.792h2.282v8.67a.913.913 0 0 0 .912.912h13.69a.91.91 0 0 0 .912-.912v-8.67h2.281a.456.456 0 0 0 .31-.792z" />
                            </g>
                        </svg>
                    </button>
                </li>

                {/* Interests */}
                <li>
                    <button
                        onClick={() => onTabChange('interests')}
                        className={`block transition-transform hover:scale-110 ${activeTab === 'interests' ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-10 h-10">
                            <g fill="none"><path fill="#e3e3e3" d="M21.625 2.375a.916.916 0 0 1 .917.917v18.333a.917.917 0 0 1-.917.917H2.375a.917.917 0 0 1-.916-.917V3.292a.917.917 0 0 1 .916-.917z" />
                                <path fill="#fff" d="M2.17 22.518L22.153 2.539a.9.9 0 0 0-.528-.164H2.375a.917.917 0 0 0-.916.917v18.333a.916.916 0 0 0 .71.893" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M11.542 2.375h10.083a.916.916 0 0 1 .917.917v18.333a.917.917 0 0 1-.917.917H2.375a.917.917 0 0 1-.916-.917V3.292a.917.917 0 0 1 .916-.917h2.75" />
                                <path fill="#ff808c" d="M11.541 10.625c0 .504-.275.606-.604.227L8.333 7.875l-2.607 2.976c-.333.379-.604.274-.604-.227v-8.25a.917.917 0 0 1 .917-.917h4.583a.917.917 0 0 1 .917.917z" />
                                <path fill="#ffbfc5" d="M11.542 4.208V2.375a.917.917 0 0 0-.917-.917H6.042a.917.917 0 0 0-.917.917v1.833z" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M11.541 10.625c0 .504-.275.606-.604.227L8.333 7.875l-2.607 2.976c-.333.379-.604.274-.604-.227v-8.25a.917.917 0 0 1 .917-.917h4.583a.917.917 0 0 1 .917.917zm2.751-3.668h5.5m-5.5 3.667h5.5M4.209 14.29h15.583M4.209 17.957H19.33" />
                            </g>
                        </svg>
                    </button>
                </li>

                {/* Faves */}
                <li>
                    <button
                        onClick={() => onTabChange('faves')}
                        className={`block transition-transform hover:scale-110 ${activeTab === 'faves' ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-10 h-10">
                            <g fill="none">
                                <path fill="#e3e3e3" d="M1 19.174a21 21 0 0 1 5.74-.957c2.869 0 7.173 1.913 10.043 1.913a17.7 17.7 0 0 0 5.594-1.19a.96.96 0 0 0 .623-.897V4.77a.955.955 0 0 0-1.264-.906a16.6 16.6 0 0 1-4.953.963c-2.87 0-7.174-1.913-10.044-1.913A21 21 0 0 0 1 3.871z" />
                                <path fill="#fff" d="M12.478 4.06A25.7 25.7 0 0 0 6.74 2.914a21 21 0 0 0-5.739.957v15.304a21 21 0 0 1 5.74-.957a25.7 25.7 0 0 1 5.738 1.148z" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M1 23V1m0 18.174a21 21 0 0 1 5.74-.957c2.869 0 7.173 1.913 10.043 1.913a17.7 17.7 0 0 0 5.594-1.19a.96.96 0 0 0 .623-.897V4.77a.955.955 0 0 0-1.264-.906a16.6 16.6 0 0 1-4.953.963c-2.87 0-7.174-1.913-10.044-1.913A21 21 0 0 0 1 3.871z" /><path fill="#ff808c" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12.81 15.003a.456.456 0 0 1-.663 0l-2.93-3.057a1.93 1.93 0 1 1 2.729-2.727l.532.532l.533-.532a1.93 1.93 0 0 1 2.728 2.728z" />
                            </g>
                        </svg>
                    </button>
                </li>

                {/* BYF */}
                <li>
                    <button
                        onClick={() => onTabChange('byf')}
                        className={`block transition-transform hover:scale-110 ${activeTab === 'byf' ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-10 h-10">
                            <g fill="none">
                                <path fill="#ffef5e" d="M23 17.26a.957.957 0 0 1-.957.957H11.522l-3.826 3.827v-3.827h-5.74A.956.956 0 0 1 1 17.261V2.913a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956z" /><path fill="#fff9bf" d="M21.267 1.957H1.957A.957.957 0 0 0 1 2.913v14.348a.957.957 0 0 0 .957.956h3.049z" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23 17.26a.957.957 0 0 1-.957.957H11.522l-3.826 3.827v-3.827h-5.74A.956.956 0 0 1 1 17.261V2.913a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956z" />
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M9.609 7.696a2.87 2.87 0 1 1 4.017 2.63a1.91 1.91 0 0 0-1.147 1.754v.398" />
                                <path stroke="#191919" d="M12.478 15.109a.24.24 0 0 1 0-.479m0 .479a.24.24 0 0 0 0-.479" />
                            </g>
                        </svg>
                    </button>
                        
                </li>


                {/* Social Links */}
                <li>
                    <button
                        onClick={() => onTabChange('social-links')}
                        className={`block transition-transform hover:scale-110 ${activeTab === 'social-links' ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-10 h-10">
                            <g fill="none">
                                <path fill="#66e1ff" d="M23 7.215V19.65a1.913 1.913 0 0 1-1.913 1.913H2.913A1.913 1.913 0 0 1 1 19.65V7.215z"/>
                                <path fill="#c2f3ff" d="M2.913 21.563h1.913L19.174 7.215H1V19.65a1.913 1.913 0 0 0 1.913 1.913"/>
                                <path fill="#fff" d="M23 7.215H1v-2.87a1.913 1.913 0 0 1 1.913-1.912h18.174A1.913 1.913 0 0 1 23 4.346z"/>
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M21.087 2.437H2.913A1.913 1.913 0 0 0 1 4.35v15.304a1.913 1.913 0 0 0 1.913 1.913h18.174A1.913 1.913 0 0 0 23 19.654V4.35a1.913 1.913 0 0 0-1.913-1.913M1 7.22h22"/>
                                <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m5.782 12.002l2.392 2.391l-2.392 2.391m5.739-1.912h3.826"/>
                                <path stroke="#191919" d="M7.217 5.067a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478m-2.869.478a.24.24 0 0 1 0-.478"/>
                                <path stroke="#191919" d="M4.347 5.067a.24.24 0 0 0 0-.478m5.74.481a.24.24 0 0 1 0-.477"/>
                                <path stroke="#191919" d="M10.086 5.07a.24.24 0 1 0 0-.477"/>
                            </g>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;