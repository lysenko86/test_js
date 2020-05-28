export const filterItems = (items, value) => {
	if (!value.trim()) {
		return items;
	}
	const newItems = {};
	for (const key in items) {
		if (items[key].name.includes(value)) {
			newItems[key] = items[key];
		}
	}
	return newItems;
};
