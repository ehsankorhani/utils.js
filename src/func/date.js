const isValidDate = (dt) => {
	return dt instanceof Date && !isNaN(dt);
}