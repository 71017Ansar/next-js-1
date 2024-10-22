"use client"
import Hello from '@/componets/Hello'
import Link from 'next/link'
import React,{useState} from 'react'
const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>home page</h1>
      <Link href="/about">about</Link>
      <Hello/>
    </div>
  )
}

export default Home