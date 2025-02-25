import Link from 'next/link'
 
export default function NotFound() {
  return (
    <article>
      <h2 className='text-9xl mb-24'>😕 Oops ...</h2>
      <p className='mb-8 text-2xl'>Could not find the pages you were looking for.</p>
      <Link href="/" className="rounded-md border border-white px-4 py-2">Return Home</Link>
    </article>
  )
}