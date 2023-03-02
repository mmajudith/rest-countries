import axios from 'axios';
import { GetStaticProps } from 'next';

import Meta from '@/components/Meta';
import CountryDetails from '@/components/CountryDetails';

interface DProps {
  countryDetails: []  
}

const Details = ({countryDetails}: DProps) => {

  console.log(countryDetails, 'details');

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

export const getStaticProps: GetStaticProps = async (context) =>{
  const { name } = context.params!
  const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  const countryDetails = await res.data; 
  return {
    props: {
      countryDetails
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await axios.get('https://restcountries.com/v3.1/all');
  const countries = await res.data; 

  const names = countries.map((country: {name:{common:string}}) => country.name.common);
  const paths = names.map((name: string) => ({params: {name: name.toString()}}))

  return {
    paths,
    fallback: false
  }
}