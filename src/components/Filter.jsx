import { useState, useEffect } from 'react';
import { fetchFilterOptions } from '../services/api';

function Filter({ setFilter, filterType, setFilterType, filter }) {
	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState('');

	useEffect(() => {
		async function fetchOptions() {
			try {
				const response = await fetchFilterOptions(filterType);
				setOptions(response || []);
			} catch (error) {
				console.error('Error fetching filter options:', error);
			}
		}

		fetchOptions();
	}, [filterType]);

	const handleSearch = e => {
		setFilter(e.target.value);
	};

	const handleFilterTypeChange = e => {
		setFilterType(e.target.value);
		setSelectedOption(''); // Reset selected option when filter type changes
	};

	const handleOptionChange = e => {
		setSelectedOption(e.target.value);
		setFilter(e.target.value); // Set the selected option as the filter value
	};
	const onFilterClear = () => {
		setFilter('');
		setFilterType('');
		setSelectedOption('');
	};

	return (
		<div className='filter'>
			<input type='text' placeholder='Search by name...' onChange={handleSearch} value={selectedOption || filter || ''} />
			<div className='btn-group'>
				<label>
					<input type='radio' value='ingredient' checked={filterType === 'ingredient'} onChange={handleFilterTypeChange} />
					Ingredient
				</label>
				<label>
					<input type='radio' value='alcoholic' checked={filterType === 'alcoholic'} onChange={handleFilterTypeChange} />
					Alcoholic
				</label>
				<label>
					<input type='radio' value='category' checked={filterType === 'category'} onChange={handleFilterTypeChange} />
					Category
				</label>
				<label>
					<input type='radio' value='glass' checked={filterType === 'glass'} onChange={handleFilterTypeChange} />
					Glass
				</label>
				<select onChange={handleOptionChange} value={selectedOption}>
					<option value=''>Select an option</option>
					{options.map((option, index) => (
						<option key={`${option}_name_${index}`} value={option?.strAlcoholic}>
							{option?.strGlass || option?.strAlcoholic || option?.strCategory || option?.strIngredient1}
						</option>
					))}
				</select>
				<button className='clear-btn' onClick={onFilterClear}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default Filter;
