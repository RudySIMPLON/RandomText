<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker\Factory as Faker;

class LoremController extends Controller
{
	public function generateParagraphs($nbrOfparagraphs,$rangeMinSentences,
		$rangeMaxSentences){
		$faker = Faker::create();
		$paragraphs = '';
		$rangeMinSentences = intval($rangeMinSentences);
		$rangeMaxSentences = intval($rangeMaxSentences);
		for ($i=0; $i < $nbrOfparagraphs; $i++) { 
			$paragraphs .= $faker->paragraph(
				rand($rangeMinSentences, $rangeMaxSentences), true);
			$paragraphs .= "\n\n";
		}
		return $paragraphs;
	}
}