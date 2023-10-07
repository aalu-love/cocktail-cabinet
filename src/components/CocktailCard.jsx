import { Link } from 'react-router-dom';

function CocktailCard({ cocktail, isLoading }) {
	const { strDrink, strCategory, strGlass, strDrinkThumb, idDrink } = cocktail;

	if (isLoading) {
		// Display a loading skeleton while data is being fetched
		return (
			<div className='cocktail-card loading'>
				<div className='loading-image-container'></div>
				<div className='loading-info'>
					<div className='loading-title'></div>
					{strCategory && <div className='loading-category'></div>}
					{strGlass && <div className='loading-glass'></div>}
				</div>
			</div>
		);
	}

	return (
		<Link to={`/cocktail/${idDrink}`} className='cocktail-card'>
			<div className='image-container'>
				<img src={strDrinkThumb} alt={strDrink} />
			</div>
			<h3>{strDrink}</h3>
			{strCategory && <p>Category: {strCategory}</p>}
			{strGlass && <p>Glass: {strGlass}</p>}
		</Link>
	);
}

export default CocktailCard;
