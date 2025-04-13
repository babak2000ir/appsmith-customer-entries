export default {
	getInvoiceHeader() {
		return JSON.parse(cust_invoice.data.value);
	},
	getInvoiceLines() {
		return this.getInvoiceHeader().lines;
	},
	getAddress() {
		return this.getInvoiceHeader().billToAddress + '<br>' + this.getInvoiceHeader().billToCity + '-' + this.getInvoiceHeader().billToPostCode;
	},
	formatDate(xmlDate) {
		var date = new Date(xmlDate);
		return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
	},
	getDocumentDate() {
		return this.formatDate(this.getInvoiceHeader().documentDate)
	}
}