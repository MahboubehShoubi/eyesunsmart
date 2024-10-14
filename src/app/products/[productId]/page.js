import React from 'react'

function TisProduct({params}) {
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <h1 className=' text-[3rem] text-secondery'>{params.productId}</h1>
    </div>
  )
}

export default TisProduct;
