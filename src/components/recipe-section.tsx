'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Recipe {
    image_link: string;
    recipe_name: string;
    ingredients: string[];
    instructions: string;
    label: string;
  };

export default function RecipeSection() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const fetchRecipes = async () => {
        try {
            const response = await fetch('/api/recipes', {
            headers: {
                Accept: 'application/json',
                method: "GET",
            }
            });
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
      
    useEffect(() => {
    fetchRecipes();
    console.log(recipes);
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {recipes.map((recipe:Recipe, index:number) => (
                <div key={index} className="bg-white max-w-xs border-2 border-black shadow mx-5 my-5 hover:scale-105">
                    <div className="m-4">
                        <Image src={recipe.image_link} alt={recipe.recipe_name} width={800} height={800}/>
                    </div>
                    <div className="p-5">
                    <a className='hover:cursor-pointer' href={`/recipes/${recipe.recipe_name}`}>
                        <h5 className="mb-2 text-2xl font-bold font-playfair tracking-tight text-gray-900 dark:text-white hover:underline">{recipe.recipe_name}</h5>
                    </a>
                    <p className="mb-3 font-lato text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            ))}
        </div>
    )
}