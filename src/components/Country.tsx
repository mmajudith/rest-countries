import Link from "next/link"
import Image from "next/image"

interface CountryProps {
    country:{
        capital?:[]
        svgFlags: string
        common: string
        population: number
        region: string
    }
} 

const Country = ({ country }: CountryProps) =>{

    const { capital, svgFlags, common, population, region } = country;
    
    return(
        <div className="bg-White dark:bg-dark-blue rounded-lg shadow-xl hover:scale-105 hover:transition hover:duration-700 ease-in-out">
            <Link href={`/${common}`} >
                <div className="w-full h-[180px] rounded-t-lg">
                        <Image 
                            className="w-full h-full object-cover rounded-t-lg"   
                            src={svgFlags} alt={'country flag'} 
                            width={280}
                            height={180}
                            priority
                        />
                </div>
                <div className="h-[180px] pl-5">
                    <p className="font-extrabold py-4">{common}</p>
                    <p className="font-medium pb-1">Populations: <span className="font-light">{population?.toLocaleString()}</span></p>
                    <p className="font-medium pb-1">Region: <span className="font-light">{region}</span></p>
                    <p className="font-medium">Capital: <span className="font-light">{capital}</span></p>
                </div>
            </Link>
        </div>
    )
}

export default Country;