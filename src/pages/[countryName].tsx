import axios from 'axios';
import { GetStaticProps } from 'next';

import Meta from '@/components/Meta';
import CountryDetails from '@/components/CountryDetails';

interface DProps {
  countryDetails:{
    borders: []
    capital?: [] 
    currencies: {} 
    common: string 
    nativeName: {nld: {common: string} }
    svg: string
    languages: {}
    population: number
    region: string
    subregion: string 
    tld: []
  }
}

const Details = ({countryDetails}: DProps) => {

  return (
    <>
      <Meta title={"Country Details"} description={"Country and their details"}/>
      <main className='max-w-[1440px] h-fit mx-auto flex flex-col justify-center items-center'>
        <CountryDetails countryDetails={countryDetails}/>
      </main>
    </>
  )
}

export default Details

export const getStaticPaths = async () =>{
  const res = await axios.get('https://restcountries.com/v3.1/all');
  const countries = await res.data; 

  const names = countries.map((country: any) => country.name.common);
  const paths = names.map((name: string) => ({params: {countryName: name.toString() }}))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) =>{
  const { countryName } = context.params!

  const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  const country = await res.data; 
  const { borders, capital, currencies, flags,  languages, name, population, region, subregion, tld } = country[0];
  const { svg } = flags;
  const { common, nativeName } = name;
  const countryBorders =  borders === undefined ? null : borders;
  const countryCapital = capital === undefined ? null: capital;
  const conCurrencies =  currencies === undefined ? null: currencies;
  const conLanguages = languages === undefined ? null : languages;
  const conSubRegion = subregion === undefined ? null: subregion;
  const conTLD = tld === undefined ? null: tld;
  const conNativeName = nativeName === undefined ? null: nativeName;

  return {
    props: {
      countryDetails: { countryBorders, countryCapital, conCurrencies, common, conNativeName, svg, conLanguages, population, region, conSubRegion, conTLD}
    }
  }
}