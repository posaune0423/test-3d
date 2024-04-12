const History = () => {
  return (
    <main className='mb-[80px] min-h-[calc(100vh-80px)] w-full'>
      <section className='p-4'>
        <h1 className='mb-4 text-3xl font-bold'>History</h1>
        <div className='rounded-lg bg-white p-4 shadow'>
          <ul className='divide-y divide-gray-200'>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>3 minutes ago</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>2 hours ago</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>2 weeks ago</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>1 month ago</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>2 month ago</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>Yesterday</p>
              </div>
            </li>
            <li className='flex items-center py-4'>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Your color was changed</p>
                <p className='text-sm text-gray-500'>Yesterday</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default History
