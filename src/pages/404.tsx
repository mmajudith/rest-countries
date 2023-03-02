import Meta from '@/components/Meta';
import Link from 'next/link';

const NotFound404 = () => {
  return (
    <>
      <Meta title={"404 Not found"} description={"something is wrong with your path"}/>
      <main className='max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
       <div className='w-11/12 mx-auto mt-16 flex flex-col justify-center items-center gap-2'> 
        <h1 className='text-4xl'>Ooops...</h1>
			  <h2 className='text-3xl'>That page can not be found :(</h2>
        <p className='text-xl'>
          {' '}
          Go back to the <Link href="/" className='w-fit h-fit p-1 bg-blue hover:opacity-60 rounded ml-5 text-White text-sm'>Home Page</Link>
        </p>
       </div> 
      </main>
    </>
  )
}

export default NotFound404;