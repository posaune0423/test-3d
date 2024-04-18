const NotificationPage = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md p-4'>
      <h1 className='text-center text-lg font-bold'>Notifications</h1>
      <ul className='mt-4 space-y-2'>
        <li className='relative rounded-lg bg-white p-3 shadow'>
          <p className='text-sm'>
            Reminder: Return &quot;The Great Gatsby&quot; to your local library today.
          </p>
          <p className='text-xs text-gray-500'>Just now</p>
          <span className='absolute right-2 top-1/2 inline-block size-2 -translate-y-1/2 rounded-full bg-red-500' />
        </li>
        <li className='rounded-lg bg-white p-3 shadow'>
          <p className='text-sm'>
            &quot;1984&quot; by George Orwell is now available for borrowing.
          </p>
          <p className='text-xs text-gray-500'>1 hour ago</p>
        </li>
        <li className='rounded-lg bg-white p-3 shadow'>
          <p className='text-sm'>
            Anna has accepted your book loan request for &quot;To Kill a Mockingbird&quot;.
          </p>
          <p className='text-xs text-gray-500'>Yesterday</p>
        </li>
      </ul>
    </main>
  )
}

export default NotificationPage
