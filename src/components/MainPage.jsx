import { useState, useEffect } from 'react';
import { fetchCocktails, fetchCocktailsByIngredients, fetchCocktailsByAlcoholic, fetchCocktailsByCategory, fetchCocktailsByGlass, fetchCocktailRandom } from '../services/api';
import CocktailCard from './CocktailCard';
import RandomCocktailCard from './RandomCocktailCard';
import Filter from './Filter';

function MainPage() {
	const [cocktails, setCocktails] = useState([]);
	const [filter, setFilter] = useState('');
	const [filterType, setFilterType] = useState(''); // State for selected filter type
	const [randomCocktail, setRandomCocktail] = useState([]);

	useEffect(() => {
		let fetchFunction;

		switch (filterType) {
			case 'ingredient':
				fetchFunction = fetchCocktailsByIngredients(filter);
				break;
			case 'alcoholic':
				fetchFunction = fetchCocktailsByAlcoholic(filter);
				break;
			case 'category':
				fetchFunction = fetchCocktailsByCategory(filter);
				break;
			case 'glass':
				fetchFunction = fetchCocktailsByGlass(filter);
				break;
			default:
				fetchFunction = fetchCocktails(filter);
		}

		fetchFunction.then(data => {
			if (data === 'no data found') {
				setCocktails([]);
			} else {
				setCocktails(data || []);
			}
		}).catch(error => console.error(error));
	}, [filter]);

	useEffect(() => {
		// Fetch random cocktail
		fetchCocktailRandom()
			.then(data => setRandomCocktail(data || {})) // Set the random cocktail data
			.catch(error => console.error(error));
	}, []);

	return (
		<div className='main-page'>
			<h1>🍸Cocktail Cabinet🍹</h1>
			<Filter filter={filter} setFilter={setFilter} filterType={filterType} setFilterType={setFilterType} />
			<div className='left-container'>
				{cocktails?.length > 0 ? (
					<div className='cocktail-list'>
						{cocktails.map(cocktail => (
							<CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
						))}
					</div>
				) : (
					<div className='not-found'>
						<h1>No Result Found</h1>
					</div>
				)}
				<RandomCocktailCard randomCocktail={randomCocktail} />
			</div>
		</div>
	);
}

export default MainPage;
