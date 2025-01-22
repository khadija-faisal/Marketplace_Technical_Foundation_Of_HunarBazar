'use client'
import { Category } from '@/sanity.types'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'

import { cn } from '@/lib/utils'
interface Props {
    categories : Category[]
}
const CategorySelect = ({categories} :Props ) => {
    const [openCategory, setopenCategory] = useState(false);
    const[value, setValue] = useState('');
    const router = useRouter()
  return (
    <Popover open={openCategory} onOpenChange={setopenCategory} >
   <PopoverTrigger asChild>
    <Button variant={'outline'} role='combobox' aria-expanded={openCategory} className='w-[250px] text-base font-montserrat justify-between'>
           {value ? categories.find((category) => category._id === value)?.title : "Filter by category"}
        <ChevronsUpDown />
    </Button>
   </PopoverTrigger>
   <PopoverContent className=' w-[250px]' >
    <Command >
        <CommandInput placeholder="Search Category..." className="h-9 font-montserrat" 
        onKeyDown={(e) =>{
          if(e.key === 'Enter'){
            const selectcatogory = categories.find((category)=> category.title?.toLowerCase().includes(e.currentTarget.value.toLowerCase()))
          }
        }}
        />
    <CommandList>
      <CommandEmpty>
        No Category Found.
      </CommandEmpty>
      <CommandGroup>
        {categories?.map((category) => (
          <CommandItem key={category?._id} value={category.title }
          className='font-montserrat font-medium text-base '
          onSelect={() =>{
            setValue( value === category._id ? category?._id : '');
            router.push(`/categories/${category.slug?.current}`)
            setopenCategory(false)
          }}
          >
            {category?.title}
            <Check className={ cn('ml-auto', value === category?._id ? 'opacity-100' : 'opacity-0')}/>
          </CommandItem>
       ) )}
      </CommandGroup>
    </CommandList>
    </Command>
   </PopoverContent>
    </Popover>
  )
}

export default CategorySelect