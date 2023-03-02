import { useRouter } from "next/router";
import Image from "next/image";

interface CDProps {
    [key: string]: any 
}

type CurrencyType = {
    name: string 
}

const CountryDetails = ( {countryDetails}: CDProps ) => {
    const router = useRouter();

    const { borders, capital, currencies, flags,  languages, name, population, region, subregion, tld } = countryDetails[0];
    const currencyName = Object.values(currencies)[0] as CurrencyType;
    const { alt, svg } = flags;
    const { common, nativeName } = name;
    const langs = Object.values(languages)

    return(
        <div className="w-11/12 mx-auto my-8">
    
            <p 
                onClick={() => router.back()}
                className="w-fit h-fit mt-7 cursor-pointer flex justify-center items-center gap-3 dark:bg-[url('/assets/white-arrow.png')] 
                    bg-[url('/assets/back-arrow-icon.png')] bg-no-repeat bg-[20px] bg-[length:18px_18px]
                    bg-White dark:bg-dark-blue px-12 py-2 rounded shadow-lg"
            >
                Back
            </p>

            <div className="w-full my-12 flex flex-col md:flex-row justify-center sm:justify-between items-center gap-9">
                <div className="w-full md:w-2/5 h-[300px] sm:h-[350px] ">
                    <Image className="w-full h-full shadow-lg" src={svg} alt={alt} width={300} height={350}/>
                </div>
                <div className="w-full md:w-[55%] xl:w-3/6 flex flex-col justify-center gap-8">
                    <p className="font-extrabold text-2xl">{common}</p>
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-between gap-8 sm:gap-5">
                        <div className=""> 
                            <p className="font-medium pb-2 sm:pb-1">Native Name: <span  className="font-light">{nativeName?.nld?.common}</span></p>
                            <p className="font-medium pb-2 sm:pb-1">Populations: <span className="font-light">{population.toLocaleString()}</span></p>
                            <p className="font-medium pb-2 sm:pb-1">Region: <span className="font-light">{region}</span></p>
                            <p className="font-medium pb-2 sm:pb-1">Sub Region: <span className="font-light">{subregion}</span></p>
                            <p className="font-medium">Capital: <span className="font-light">{capital}</span></p>
                        </div>
                        <div className=""> 
                            <p className="font-medium pb-2 sm:pb-1">Top Level Domain:  <span className="font-light">{tld}</span></p>
                            <p className="font-medium pb-2 sm:pb-1">Currencies:  <span className="font-light">{currencyName.name} </span></p>
                            <p className="font-medium">Languages:  <span className="font-light">{Array.isArray(langs) && langs.join(', ')}</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <p className="font-medium mb-4 sm:mb-0">Border Countries: </p>
                        <div className="flex flex-wrap gap-3">
                            {borders?.map((border: string, i: number) =>(
                                <ul key={i} className=''>
                                    <li className="flex flex-col justify-center items-center py-1 px-4 rounded bg-White dark:bg-dark-blue font-light shadow-lg text-sm cursor-auto">
                                        {border}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;