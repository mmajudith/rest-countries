import Meta from '@/components/Meta';

const networkServer500 = () => {
  return (
    <>
      <Meta title={"Network/Server error"} description={"server error"}/>
      <main className='max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
       <div className='w-11/12 mx-auto mt-20 flex flex-col justify-center items-center'> 
        <h1 className='text-2xl'>
          {' '}
          Sorry something went wrong please check your internet connection!
        </h1>
       </div> 
      </main>
    </>
  )
}

export default networkServer500;