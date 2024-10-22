import Link from 'next/link'
import React from 'react'

const products = () => {
  return (
    <div className=' grid grid-cols-3 gap-y-20'>
        <div className="myclass">
            <Link href={'/products/1'}> product1 </Link>
        </div>
        <div className="myclass">
        <Link href={'/products/2'}> product2 </Link>
        </div>
        <div className="myclass">
        <Link href={'/products/3'}> product3</Link>
        </div>
        <div className="myclass">
        <Link href={'/products/4'}>product4 </Link>
        </div>
        <div className="myclass">
        <Link href={'/products/5'}> product5</Link>
        </div>
    </div>
  )
}

export default products