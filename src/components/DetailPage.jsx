import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCocktailById } from '../services/api';

function DetailPage() {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState(null);

	useEffect(() => {
		fetchCocktailById(id)
			.then(data => setCocktail(data))
			.catch(error => console.error(error));
	}, [id]);

	if (!cocktail) {
		return <div>Loading...</div>;
	}

	const combineIngredientsAndMeasurements = () => {
		const ingredientsWithMeasurements = [];
		for (let i = 1; i <= 15; i++) {
			const ingredient = cocktail[`strIngredient${i}`];
			const measurement = cocktail[`strMeasure${i}`];
			if (ingredient) {
				ingredientsWithMeasurements.push(`${measurement ? measurement + ' ' : ''}${ingredient}`);
			}
		}
		return ingredientsWithMeasurements;
	};

	const ingredientsWithMeasurements = combineIngredientsAndMeasurements();

	return (
		<div className='detail-page'>
			<div className='cocktail-details'>
				<div className='left-container'>
					<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
				</div>
				<div className='right-container'>
					<div className='info'>
						<h1>{cocktail.strDrink}</h1>
						<p>
							<b>Category:</b> {cocktail.strCategory}
						</p>
						<p>
							<b>Glass:</b> {cocktail.strGlass}
						</p>
						<p>
							<b>Ingredients:</b>
						</p>
						<ul>
							{ingredientsWithMeasurements.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
						<p>
							<b>Instructions:</b> {cocktail.strInstructions}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPage;
