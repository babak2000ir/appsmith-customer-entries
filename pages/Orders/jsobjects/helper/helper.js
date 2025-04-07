export default {
	allOrders () {
		return JSON.parse(sales_orders.data.value).filter(e=>(e.status!=='Open'))
	},
	returnExists () {
		return this.allOrders().some(e=>e.documentType==='Return Order')
	},
	returnOrders () {
		return this.allOrders().filter(e=>e.documentType==='Return Order')
	},
	orders () {
		return this.allOrders().filter(e=>e.documentType==='Order').map(
			e=>{
				return {...e, documentNo:(e.status.includes('Pending')?'⏳':'')+e.documentNo }
			}
		)
	},
	shipments () {
		return JSON.parse(shipments.data.value)
	}
}