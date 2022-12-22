import React from 'react'
import Table from '../Components/Table'
import Form from '../Components/Form'
const Home = () => {
  return (
    <div>
      <div className='flex w-full mt-4'>
          <div className='w-2/3 pl-4 '>
            <Table/>
          </div>
          <div className='w-1/3 pl-4'>
            <Form/>
          </div>
      </div>
    </div>
  )
}

export default Home