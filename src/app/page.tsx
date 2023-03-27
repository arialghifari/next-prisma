import Link from 'next/link'

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/post`, {
    next: { revalidate: 0 },
  })
  return await res.json()
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className='w-[1000px] mx-auto p-20'>
      <Link
        href={'/create'}
        className='px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'
      >
        Create
      </Link>
      <div className='flex flex-col mt-8 gap-4'>
        {posts?.map((post: any, index: number) => (
          <div key={index} className='border rounded-md p-4 flex flex-col'>
            <h2>ID: {post.id}</h2>
            <h2>
              published: {new Date(post.createdAt).toLocaleString('en-UK')}
            </h2>

            <br />

            <h1 className='font-bold'>{post.title}</h1>
            <p>{post.content}</p>

            <div className='inline-flex mt-4 gap-4'>
              <button className='text-xs hover:bg-zinc-200 font-bold p-1 rounded-md'>
                Update
              </button>
              <button className='text-xs text-red-500 hover:bg-zinc-200 font-bold p-1 rounded-md'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
