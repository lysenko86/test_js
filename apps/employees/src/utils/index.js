export const filterItems = (items, value) => {
	if (!value.trim()) {
		return items;
	}
	const newItems = {};
	for (const key in items) {
		if (items[key].name.toLowerCase().includes(value.toLowerCase())) {
			newItems[key] = items[key];
		}
	}
	return newItems;
};

export const removeItemById = (items, id) => {
	const newItems = { ...items };
	delete newItems[id];
	return newItems;
}

export const getCountPages = (countItems, countOnPage) => {
	return Math.ceil(countItems / countOnPage);
}
