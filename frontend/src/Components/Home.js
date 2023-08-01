import React from 'react'

function Home() {
  return (
    <div className='flex flex-col'>
      <h1 className='flex justify-center align-middle font-extrabold text-2xl'>John doe railways</h1>
      <table className='mt-14'>
          <tr>
            <th className='border border-gray-800 p-3'>Train Name</th>
            <th className='border border-gray-800 p-3'>Train Number</th>
            <th className='border border-gray-800 p-3'>Departure Time</th>
            <th className='border border-gray-800 p-3'>Seat Available</th>
            <th className='border border-gray-800 p-3'>Price</th>
            <th className='border border-gray-800 p-3'>Delayed by</th>
          </tr>
              <tr>
                <td className='border border-gray-800 p-2'>Delhi Door hai exp</td>
                <td className='border border-gray-800 p-2'>2344</td>
                <td className='border border-gray-800 p-2'>9:45:36</td>
                <td className='border border-gray-800 p-2'>
                  <td className='border border-gray-800 p-2'>sleeper : 32</td>
                  <td className='border border-gray-800 p-2'>AC : 1</td>
                </td>
                <td className='border border-gray-800 p-2'>
                  <td className='border border-gray-800 p-2'>sleeper : 10</td>
                  <td className='border border-gray-800 p-2'>AC : 700</td>
                </td>
                <td className='border border-gray-800 p-2'>30 Min</td>
              </tr>
        </table>
    </div>
  )
}

export default Home
