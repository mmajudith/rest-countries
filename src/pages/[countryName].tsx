import axios from 'axios';
import { GetStaticProps } from 'next';

import Meta from '@/components/Meta';
import CountryDetails from '@/components/CountryDetails';

interface DProps {
  countryDetails:{
    countryBorders?: [] | string
    countryCapital?: [] | string
    conCurrencies?: {} | string
    common: string 
    conNativeName?: {nld: {common: string} } | string
    svg: string
    conLanguages?: {} 
    population: number
    region: string
    conSubRegion?: string 
    conTLD?: [] | string
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
  const { borders, capital, flags, name, population, region, subregion, tld } = country[0];
  const { svg } = flags;
  const { common } = name;
  const countryBorders =  borders === undefined ? 'Nil' : borders;
  const countryCapital = capital === undefined ? 'Nil': capital;
  const conCurrencies =  country[0]?.currencies || 'Nil';
  const conLanguages = country[0]?.languages || 'Nil';
  const conSubRegion = subregion === undefined ? 'Nil': subregion;
  const conTLD = tld === undefined ? 'Nil': tld;
  const conNativeName = country[0]?.name?.nameNative || 'Nil';

  return {
    props: {
      countryDetails: { countryBorders, countryCapital, conCurrencies, common, conNativeName, svg, conLanguages, population, region, conSubRegion, conTLD}
    }
  }
}