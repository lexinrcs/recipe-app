'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
 
interface Recipe {
    image_link: string;
    recipe_name: string;
    ingredients: string[];
    instructions: string;
    label: string;
};

export default function RecipeDetails() {
    const pathname:string = usePathname();
    const recipe = pathname.split('/').pop();

    const recipe_name = decodeURIComponent(recipe ? recipe: ''); 

    const [recipeDetails, setRecipeDetails] = useState<Recipe>();

    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${recipe_name}`, {
          headers: {
            Accept: 'application/json',
            method: "GET",
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipeDetails(data.recipe);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    useEffect(() => {
      fetchRecipe();
    }, []);

    
    return (
        <>
            <Head>
                <title>GFGL | Recipe Details</title>
            </Head>
            <div className='min-h-screen'>
                {recipeDetails && <div className='pt-[130px]'>
                    <Image src={recipeDetails.image_link} alt={recipeDetails.recipe_name} width={800} height={800}></Image>
                    <h1>{recipeDetails.recipe_name}</h1>
                    <h1>{recipeDetails.ingredients}</h1>
                    <h1>{recipeDetails.instructions}</h1>
                </div>}
            </div>
        </>
    );
}