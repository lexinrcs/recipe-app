import { NextResponse } from 'next/server'
import fs from 'fs';
import path from 'path';

export async function GET() {
	//path.join(process.cwd(), 'data', 'recipes.json') is the file path
	// readFileSync to read the file and ecncode it as a utf-8 string

	const recipes = fs.readFileSync(path.join(process.cwd(), 'data', 'recipes.json'), 'utf8');

	return NextResponse.json(JSON.parse(recipes)); //return the string as a json data

}