import { Link } from 'react-router-dom';
function RandomCocktailCard({ randomCocktail }) {
	if (randomCocktail?.length == 0) {
		return (
			<div className='sugesstion'>
				<h2>Try Something New</h2>
				<div className='suggest-loader'></div>
			</div>
		);
	}

	return (
		<div className='sugesstion'>
			<h2>Try Something New</h2>
			<Link className='random-cocktail' to={`/cocktail/${randomCocktail[0].idDrink}`}>
				<div className='suggest'>
					<div className='image-wrapper'>
						<img src={randomCocktail[0].strDrinkThumb} alt={randomCocktail[0].strDrink} />
					</div>
					<h3>{randomCocktail[0].strDrink}</h3>
				</div>
			</Link>
			<Link className='random-cocktail' to={`/cocktail/${randomCocktail[1].idDrink}`}>
				<div className='suggest'>
					<div className='image-wrapper'>
						<img src={randomCocktail[1].strDrinkThumb} alt={randomCocktail[1].strDrink} />
					</div>
					<h3>{randomCocktail[1].strDrink}</h3>
				</div>
			</Link>
			<Link className='random-cocktail' to={`/cocktail/${randomCocktail[2].idDrink}`}>
				<div className='suggest'>
					<div className='image-wrapper'>
						<img src={randomCocktail[2].strDrinkThumb} alt={randomCocktail[2].strDrink} />
					</div>
					<h3>{randomCocktail[2].strDrink}</h3>
				</div>
			</Link>
			<Link className='random-cocktail' to={`/cocktail/${randomCocktail[3].idDrink}`}>
				<div className='suggest'>
					<div className='image-wrapper'>
						<img src={randomCocktail[3].strDrinkThumb} alt={randomCocktail[3].strDrink} />
					</div>
					<h3>{randomCocktail[3].strDrink}</h3>
				</div>
			</Link>
		</div>
	);
}

export default RandomCocktailCard;
