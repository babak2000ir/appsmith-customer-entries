export default {
	currencySymbols: {
		USD: '$', // US Dollar
		EUR: '€', // Euro
		GBP: '£', // British Pound
		JPY: '¥', // Japanese Yen
		INR: '₹', // Indian Rupee
		AUD: 'A$', // Australian Dollar
		CAD: 'C$', // Canadian Dollar
		CHF: 'CHF', // Swiss Franc
		CNY: '¥', // Chinese Yuan
		SEK: 'kr', // Swedish Krona
		NZD: 'NZ$', // New Zealand Dollar
	},
	getCurrencySymbol (currencyCode) {

		return this.currencySymbols[currencyCode] || currencyCode;
	}
}