import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExportApp = () => {
    const [categories, setCategories] = useState(['Pokemon']);
  return (
    <>
    <h2>Gif Explorer</h2>
    <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
        {
            categories.map(category =>
                <GifGrid 
                key={category}
                category={category}/>
            )
        }
        </ol>
    </>
)
}
