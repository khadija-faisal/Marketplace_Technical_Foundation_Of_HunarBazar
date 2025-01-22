import { Category } from '@/sanity.types'
import React from 'react'
import CategorySelect from './categoryselect'

const Categories = ({categories}:{categories: Category[]}) => {
  return (
    <div className='py-5 px-5'>
      <CategorySelect categories={categories} />
    </div>
  )
}

export default Categories