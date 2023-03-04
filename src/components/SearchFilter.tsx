import { Dispatch, SetStateAction, useState } from "react";

type SFProps = {
    getCountriesByRegion: (region: string) => void
    setInputValue: Dispatch<SetStateAction<string>>
    inputValue: string
}

const SearchFilter = ({ getCountriesByRegion, inputValue, setInputValue}: SFProps) =>{
    const [ isOpen, setIsOpen] = useState(false);

    //Function that handle filter region dropdown
    const dropDownHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="w-11/12 h-fit my-12 flex flex-col md:flex-row justify-center md:justify-between gap-12 md:gap-0">
            <div className="w-full md:w-[350px] lg:w-[500px] ">
                <input 
                    className="w-full py-4 pl-12 placeholder:text-dark-gray dark:placeholder:text-White text-dark-gray dark:text-White
                         bg-White dark:bg-dark-blue shadow-lg border-none outline-none rounded bg-[url('/assets/search-light.svg')] dark:bg-[url('/assets/search.svg')] bg-no-repeat bg-[20px]" 
                    type={'text'} 
                    placeholder='Search country by name'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="w-[230px] sm:w-[250px] dropdown relative">
                <button 
                    className="w-full px-5 py-4 bg-White dark:bg-dark-blue shadow-lg border-none outline-none rounded text-very-dark-blue-text dark:text-White
                        bg-[url('/assets/arrow-up-light.svg')] dark:bg-[url('/assets/arrow-up.svg')] bg-no-repeat bg-[195px] sm:bg-[215px] text-base flex justify-start"
                    onClick={dropDownHandler}
                >
                    Filter by Region
                </button>

                <div id="dropdown"
                    className={`w-full h-fit pl-5 absolute top-16 bg-White dark:bg-dark-blue shadow-lg rounded z-10
                            ${isOpen ? `block`: `hidden`}`}
                > 
                    {[['Africa'], ['Americas'], ['Asia'], ['Europe'], ['Oceania']].map(([region], index) => (
                        <ul key={index} className="w-fit h-fit my-3">
                            <li 
                                onClick={() => {
                                    getCountriesByRegion(region)
                                    dropDownHandler()
                                }} 
                                className="cursor-pointer"
                            >
                                {region}
                            </li>
                        </ul>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;