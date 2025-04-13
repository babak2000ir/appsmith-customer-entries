export default {
	getCrMemoHeader() {
		return JSON.parse(cust_crmemo.data.value);
	},
	getCrMemoLines() {
		return this.getCrMemoHeader().lines;
	},
	getAddress() {
		return this.getCrMemoHeader().billToAddress + '<br>' + this.getCrMemoHeader().billToCity + '-' + this.getCrMemoHeader().billToPostCode;
	},
	formatDate(xmlDate) {
		var date = new Date(xmlDate);
		return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
	},
	getDocumentDate() {
		return this.formatDate(this.getCrMemoHeader().documentDate)
	}
}