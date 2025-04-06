export default {
	entries () {
		return JSON.parse(cust_ledger_entries.data.value)
	},
	crmemoExists () {
		return this.entries().some(e=>e.documentType==='Credit Memo')
	},
	refundExists () {
		return this.entries().some(e=>e.documentType==='Refund')
	},
	paymentExists () {
		return this.entries().some(e=>e.documentType==='Payment')
	},
	invoiceTableData () {
		return this.entries().filter(e=>e.documentType==='Invoice').map(
			e=>{
				return {...e, documentNo:(e.remainingAmount?'⏳':'')+e.documentNo }
			}
		)
	}
}