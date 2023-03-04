import axios from "axios";

export const fetchData = async (url: string) => {
    
    const response = await axios.get(url);
    const data = await response.data; 
    const countriesData = data.map((country: any) => {
    const { flags, name, population, region } = country;
    const { svg } = flags
    const { common } = name;

    return { capital: country?.capital || null, svgFlags: svg, common, population, region };
  })

  return countriesData

}