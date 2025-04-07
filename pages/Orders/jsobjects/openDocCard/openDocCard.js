export default {
	openDocumentCard () {
		switch(TabControl.selectedTab) {
			case 'Orders':
				storeValue('OrderNo', InvTbl.selectedRow.documentNo);
				navigateTo('Order');
				break;
			case 'Shipments':
				storeValue('ShipmentNo', CrmTbl.selectedRow.documentNo);
				navigateTo('Shipment');
				break;
			case 'Returns':
				showAlert('Return');
				break;
		}
	}
}