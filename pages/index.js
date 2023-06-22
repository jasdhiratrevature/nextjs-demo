import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
  
    <h2>Hello Next .... JS !!!</h2>
    <Link href="/friends/">
       See Friends Listing
      </Link>
  
   </div>
  )
}
