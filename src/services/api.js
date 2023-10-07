import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktails = async filter => {
	try {
		const response = await axios.get(`${API_BASE_URL}/search.php`, {
			params: {
				s: filter,
			},
		});
		return response.data.drinks;
	} catch (error) {
		console.error('Error fetching cocktails:', error);
		throw error;
	}
};

export const fetchCocktailById = async id => {
	try {
		const response = await axios.get(`${API_BASE_URL}/lookup.php`, {
			params: {
				i: id,
			},
		});

		// Check if a cocktail was found with the given ID
		if (response.data.drinks && response.data.drinks.length > 0) {
			return response.data.drinks[0];
		} else {
			throw new Error('Cocktail not found');
		}
	} catch (error) {
		console.error('Error fetching cocktail by ID:', error);
		throw error;
	}
};

// Add a new function to fetch cocktails by category
export const fetchCocktailsByCategory = async category => {
	try {
		const response = await axios.get(`${API_BASE_URL}/filter.php`, {
			params: {
				c: category,
			},
		});
		return response.data.drinks;
	} catch (error) {
		console.error('Error fetching cocktails by category:', error);
		throw error;
	}
};

// Add a new function to fetch cocktails by glass type
export const fetchCocktailsByGlass = async glass => {
	try {
		const response = await axios.get(`${API_BASE_URL}/filter.php`, {
			params: {
				g: glass,
			},
		});
		return response.data.drinks;
	} catch (error) {
		console.error('Error fetching cocktails by glass type:', error);
		throw error;
	}
};

// Add a new function to fetch cocktails by alcoholic content
export const fetchCocktailsByAlcoholic = async alcoholic => {
	try {
		const response = await axios.get(`${API_BASE_URL}/filter.php`, {
			params: {
				a: alcoholic,
			},
		});
		return response.data.drinks;
	} catch (error) {
		console.error('Error fetching cocktails by alcoholic content:', error);
		throw error;
	}
};

// Add a new function to fetch cocktails by ingredient
export const fetchCocktailsByIngredients = async ingredient => {
	try {
		const response = await axios.get(`${API_BASE_URL}/filter.php`, {
			params: {
				i: ingredient,
			},
		});
		return response.data.drinks;
	} catch (error) {
		console.error('Error fetching cocktails by ingredient:', error);
		throw error;
	}
};

// Add a function to fetch filter options (categories, glasses, ingredients, alcoholic filters)
export const fetchFilterOptions = async filterType => {
	try {
		let response;

		switch (filterType) {
			case 'category':
				response = await axios.get(`${API_BASE_URL}/list.php?c=list`);
				break;
			case 'glass':
				response = await axios.get(`${API_BASE_URL}/list.php?g=list`);
				break;
			case 'ingredient':
				response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
				break;
			case 'alcoholic':
				response = await axios.get(`${API_BASE_URL}/list.php?a=list`);
				break;
			default:
				response = [];
		}

		return response.data?.drinks;
	} catch (error) {
		console.error(`Error fetching ${filterType} options:`, error);
		throw error;
	}
};

export const fetchCocktailRandom = async () => {
	try {
		const response1 = await axios.get(`${API_BASE_URL}/random.php`);
		const response2 = await axios.get(`${API_BASE_URL}/random.php`);
		const response3 = await axios.get(`${API_BASE_URL}/random.php`);
		const response4 = await axios.get(`${API_BASE_URL}/random.php`);
		return [response1.data.drinks[0], response2.data.drinks[0], response3.data.drinks[0], response4.data.drinks[0]];
	} catch (error) {
		console.error('Error fetching random cocktail:', error);
		throw error;
	}
};
