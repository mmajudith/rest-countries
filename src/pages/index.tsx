import { useState, useEffect } from 'react';
import axios from 'axios';

import Meta from '@/components/Meta';
import SearchFilter from '@/components/SearchFilter';
import Country from '@/components/Country';

interface HomeProps {
  data: [] 
}

export default function Home({data}: HomeProps) {
  const [countries, setCountries] = useState({data: [], loading: true, err: ''});
  const [inputValue, setInputValue] = useState('')

  //Mount once
  useEffect(() => {
    if(data){
      setCountries({...countries, data, loading: false})
    }
  }, []);
  
  //Mount based on inputValue change
  useEffect(() => {
    
      if(data && inputValue !== ""){
        const filteredCountry = data.filter((country: any) => 
                country.name.common.toLowerCase().includes(inputValue.toLowerCase()));
        setCountries({...countries, data: filteredCountry, loading: false})
      }
    
  }, [inputValue]);
  
  return (
    <>
      <Meta title={"Rest Countries"} description={"All countries and their populations, region and capitals"}/>
      <main className='max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
        <SearchFilter setCountries={setCountries} inputValue={inputValue} setInputValue={setInputValue}/>

        {countries.loading && (
          <p className='mt-16 text-3xl'>Loading...</p>
        )}

        <div className="w-[80%] sm:w-11/12 mx-auto mt-0 mb-12 sm:my-12 grid grid-cols-fluid gap-12">
          {countries?.data?.length > 0 && (
            countries.data.map((country, index)=>(
              <Country key={index} country={country}/>
            ))
          )}
        </div>
        
        {countries.err && (
          <p className='mt-16 text-lg'>Sorry something went wrong please check your internet connection!</p>
        )}
      </main>
    </>
  )
}

export const getStaticProps = async () =>{
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countriesData = await response.data; 
  return {
    props: {
      data: countriesData
    }
  }
}