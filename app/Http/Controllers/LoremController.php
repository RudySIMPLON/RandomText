<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker\Factory as Faker;

class LoremController extends Controller
{
	public function generateParagraphs($numberOfParagraphs){
		$faker = Faker::create();
    	dd($faker->paragraphs($numberOfParagraphs, true));
	}	
}