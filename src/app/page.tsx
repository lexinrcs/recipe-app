'use client'
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRef } from "react";
import PhotoSlide from "@/components/photo-slide";
import RecipeSection from "@/components/recipe-section";

interface Recipe {
  image_link: string;
  recipe_name: string;
  ingredients: string[];
  instructions: string;
  label: string;
};

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipesRef = useRef<HTMLDivElement>(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('/api/get-recipes', {
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

  const handleExploreClick = () => {
    setTimeout(() => {
        scrollToSection(recipesRef);
    }, 100); // Adjust the delay as needed
};

const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({
        behavior: 'smooth'
    });
};


  return (
    <>
      <Head>
        <title>GFGL | Home</title>
      </Head>
      <div className="flex flex-col">
        {/* Welcome Section */}
        <div className="min-h-screen">          
          <div className="px-4 md:px-8 lg:px-12 xl:px-16 py-2 flex items-center flex-col mt-[120px] lg:space-x-8 lg:flex-row lg:mt-[200px]">
            <div className="flex items-center w-full lg:w-1/2">
              <PhotoSlide/>
            </div>
            <div className="flex items-center space-y-8 flex-col lg:items-end lg:w-1/2">
              <h1 className="text-4xl font-bold font-playfair mt-12 lg:text-right md:text-5xl lg:mt-0 lg:text-7xl">Good food, good life.</h1>
              <p className="font-lato text-normal text-center xl:text-lg lg:text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <button className="bg-black font-lato font-bold text-white px-8 py-2 mt-4 w-fit hover:scale-105" onClick={handleExploreClick}>Explore recipes</button>
            </div>

          </div>
        </div>

        {/* Recipes Section */}
        <div ref={recipesRef} className="space-y-8">
          <h1 className="text-4xl font-bold font-playfair text-center pt-[130px] md:text-5xl lg:text-7xl">RECIPES</h1>
          <RecipeSection />
        </div>
      </div>
    
    </>

  );
}
