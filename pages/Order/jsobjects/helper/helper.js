export default {
	getOrderHeader() {
		return JSON.parse(cust_order.data.value);
	},
	getOrderLines() {
		return this.getOrderHeader().lines;
	},
	getShippingAddress() {
		return this.getOrderHeader().shipToAddress + '<br>' + this.getOrderHeader().shipToCity + '-' + this.getOrderHeader().shipToPostCode;
	},
	formatDate(xmlDate) {
		var date = new Date(xmlDate);
		return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
	},
	getDocumentDate() {
		return this.formatDate(this.getOrderHeader().documentDate)
	}
}