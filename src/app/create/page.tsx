'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': ' application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
    router.push('/')
  }

  return (
    <form
      className='w-[500px] mx-auto pt-20 flex flex-col gap-2'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Masukkan Judul'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full border p-2 rounded-md'
      />
      <input
        type='text'
        placeholder='Masukkan Konten'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='w-full border p-2 rounded-md'
      />
      <button
        disabled={isLoading}
        className='bg-zinc-800 p-2 rounded-md text-white'
        type='submit'
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}
