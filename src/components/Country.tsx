import Link from "next/link"

interface CountryProps {
    [key: string]: any 
} 

const Country = ({country}: CountryProps) =>{
    
    const { capital, flags, name, population, region } = country;
    
    return(
        <div className="bg-White dark:bg-dark-blue rounded-lg shadow-xl hover:scale-105 hover:transition hover:duration-700 ease-in-out">
            <Link href={`/details/${name.common}`} >
                <div className="w-full h-[180px] rounded-t-lg">
                        <img 
                            className="w-full h-full object-cover rounded-t-lg"   
                            src={flags.svg} alt={'country flag'} />
                </div>
                <div className="h-[180px] pl-5">
                    <p className="font-extrabold py-4">{name.common}</p>
                    <p className="font-medium pb-1">Populations: <span className="font-light">{population.toLocaleString()}</span></p>
                    <p className="font-medium pb-1">Region: <span className="font-light">{region}</span></p>
                    <p className="font-medium">Capital: <span className="font-light">{capital}</span></p>
                </div>
            </Link>
        </div>
    )
}

export default Country;