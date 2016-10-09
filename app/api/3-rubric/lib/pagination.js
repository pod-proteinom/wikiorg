'use strict';

const pagination = (currentPage, numOfPages) => {
	if(numOfPages <= 10) {
		return generatePages(1, numOfPages);
	} else if(numOfPages > 10 && currentPage < 7) {
		return generatePages(1, 10);
	} else if(numOfPages > 10 && currentPage >= 7) {
		if((currentPage + 4) > numOfPages) {
			return generatePages(numOfPages - 9, numOfPages);
		} else {
			const begin = currentPage - 5;
			const end = currentPage + 4;
			return generatePages(begin, end);
		}
	}
};

const generatePages = (begin, end) => {
	const pages = [];
	for(let i = begin; i <= end; i++) {
		pages.push(i);
	}
	return pages;
};

module.exports = pagination;