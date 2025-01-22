import { Puff } from 'react-loader-spinner'
 const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen '>
        <Puff
  visible={true}
  height="100"
  width="100"
  color="#222222"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader;