'use client';
import { usePathname, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Loader from '../../../components/Loader'; 
import { FaRegBookmark, FaShareAlt, FaPrint } from "react-icons/fa";


interface Recipe {
    image_link: string;
    recipe_name: string;
    ingredients: string[];
    instructions: string;
    description: string;
    label: string;
};

export default function RecipeDetails() {
    // const pathname = typeof usePathname() === 'string' ? usePathname() : '';
    // const recipe = pathname !== null ? pathname.split('/').pop() : '';
    // const recipe_name = decodeURIComponent(recipe ? recipe : '');

    const params = useParams<{ recipe_name: string}>();

    const [loading, setLoading] = useState(true); // Track loading state

    const [recipeDetails, setRecipeDetails] = useState<Recipe>();

    const fetchRecipe = async () => {
        try {
            const response = await fetch(`/api/recipes/${params.recipe_name}`, {
                headers: {
                    Accept: 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRecipeDetails(data.recipe);
            setLoading(false);
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
                <link rel="icon" href="../../icon.ico" />
            </Head>
            <div className='min-h-screen'>
              {
                loading ? (
                    <Loader />
                ) :
                <>
                   {recipeDetails && (
                      <div className='min-h-screen flex flex-col items-center justify-center px-8 lg:px-12 lg:flex-row'>
                        <div className='mt-[130px] p-4 lg:w-1/2'>
                          <Image className='food-image w-full h-full'
                          src={recipeDetails.image_link} alt={recipeDetails.recipe_name} width={800} height={800} />
                        </div>

                        <div className=' flex flex-col justify-center items-start mx-8 space-y-8 mt-4 lg:px-16 lg:mt-[130px] lg:w-1/2'>
                            <div className='space-y-4'>
                                <h1 className='text-5xl font-playfair font-bold'>{recipeDetails.recipe_name}</h1>
                                <div className='flex space-x-4'>
                                    <FaRegBookmark className='text-xl hover:cursor-pointer'/>
                                    <FaShareAlt className='text-xl hover:cursor-pointer' />
                                    <FaPrint className='text-xl hover:cursor-pointer'/>
                                </div>
                                <p className='font-lato text-xl'>{recipeDetails.description}</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-lato font-bold lg:text-2xl'>INGREDIENTS</h1>
                                {recipeDetails.ingredients.map ((ingredient, index) => {
                                    return <li className="list-disc font-lato text-md lg:text-lg" key={index}>{ingredient}</li>
                                })}

                            </div>
                            <div className='pb-8'>
                                <h1 className='text-2xl font-lato font-bold lg:text-2xl'>INSTRUCTIONS</h1>
                                <h1>{recipeDetails.instructions.split(". ").map((instruction, index) => <li className="list-decimal font-lato text-md lg:text-lg" key={index}>{instruction}</li>)}</h1>
                            </div>
                        </div>
                      </div>
                    )}
                </>
              }
               
            </div>
        </>
    );
}