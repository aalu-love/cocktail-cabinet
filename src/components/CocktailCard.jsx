import { Link } from 'react-router-dom';

function CocktailCard({ cocktail }) {
	const { strDrink, strCategory, strGlass, strDrinkThumb, idDrink } = cocktail;

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
