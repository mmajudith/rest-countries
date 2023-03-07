import { useState, useEffect } from 'react';
import { fetchData } from '@/hooks/fetchData';
import Meta from '@/components/Meta';
import SpinnerLoader from '@/components/SpinnerLoader';
import SearchFilter from '@/components/SearchFilter';
import Country from '@/components/Country';

type HSProps = {
    capital?:[] | string
    svgFlags: string
    common: string
    population: number
    region: string
}[]

type HProps = {
  countriesData: HSProps
}

export default function Home({countriesData}: HProps) {
  
  const [countries, setCountries] = useState<HSProps>();
  const [ isLoading, setIsLoading] = useState(true)
  const [inputValue, setInputValue] = useState('')

  //Function that fetches countries based on region
  const getCountriesByRegion = async (region: string) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const countriesData = await fetchData(url);
    
    setCountries(countriesData)  
  }
  
  // //Mount based on inputValue change and countriesData
  useEffect(() => {
    
    if(countriesData){
      setCountries(countriesData)
      setIsLoading(false)
    }

    if(inputValue !== ""){
      const filteredCountry = countriesData.filter((country) => 
              country.common.toLowerCase().includes(inputValue.toLowerCase()));
      setCountries(filteredCountry)
      setIsLoading(false)
    }
    
  }, [inputValue, countriesData]);
  
  return (
    <>
      <Meta title={"Rest Countries"} description={"All countries and their populations, region and capitals"}/>
      <main className='max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
        <SearchFilter 
          getCountriesByRegion={getCountriesByRegion} 
          inputValue={inputValue} 
          setInputValue={setInputValue}
        />

        {isLoading && (
          <SpinnerLoader />
        )}

        <div className="w-[80%] sm:w-11/12 mx-auto mt-0 mb-12 sm:my-12 grid grid-cols-fluid gap-12">
          {countries && (
            countries.map((country, index)=>(
              <Country 
                key={index} 
                country={country}
              />
            ))
          )}
        </div>
        
      </main>
    </>
  )
}

export const getStaticProps = async () =>{
  
  const countriesData = await fetchData('https://restcountries.com/v3.1/all');
    
  return {
    props: {
      countriesData
    }
  }
}