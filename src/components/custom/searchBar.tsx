// 'use client';

// import useDebounce from '@/lib/hooks/useDebounce'
// import React, { useEffect, useState } from 'react'
// import { Input } from '../ui/input'

// type Props = {
//     value: string,
//     onChangeFn: (event:string)=>void,
//     placeholderValue: string,
//     debounceTime: number
// }

// const SearchBar = (props: Props) => {
//     const [search, setSearch] = useState('')
//     const debouncedSearch = useDebounce(search, props.debounceTime)
//     useEffect(() => {
//         if (debouncedSearch) {
//             //
//             props.onChangeFn(debouncedSearch )
//         }
//         else{
//             props.onChangeFn('')
//         }
//     }, [debouncedSearch])

//     return <Input type='text' value={search}
//                   className={"p-2"}
//                   size={10}
//                   placeholder={props.placeholderValue} onChange={(e) => {
//         //
//         setSearch(e.target.value)
//     }}  />
// }

// export default SearchBar
