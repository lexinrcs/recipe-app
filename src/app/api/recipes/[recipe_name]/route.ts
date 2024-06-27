import { NextResponse, NextRequest } from 'next/server';
import { NextApiRequest } from 'next';
import fs from 'fs';
import path from 'path';
 
type Recipe = {
	image_link: string;
	recipe_name: string;
	ingredients: string[];
	instructions: string;
	label: string;
}



export async function GET(request: Request,{ params }: { params: { recipe_name: string } }){
  const recipe_name = params.recipe_name;

  const allRecipes = fs.readFileSync(path.join(process.cwd(), 'data', 'recipes.json'), 'utf8');

  const recipes: Recipe[] = JSON.parse(allRecipes);
  const recipe:Recipe | undefined = recipes.find((recipe) => recipe.recipe_name === recipe_name);

  if (recipe) {
    return NextResponse.json({message: 'Recipe found.', recipe : recipe});
  } else {
    return NextResponse.json({ message: 'Recipe not found.' });
  }
}