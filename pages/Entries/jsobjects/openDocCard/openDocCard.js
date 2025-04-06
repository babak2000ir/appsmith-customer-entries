export default {
	openDocumentCard () {
		switch(TabControl.selectedTab) {
			case 'Invoices':
				storeValue('invoiceNo', InvTbl.selectedRow.documentNo);
				navigateTo('Invoice');
				break;
			case 'Credit Memos':
				storeValue('creditmemoNo', CrmTbl.selectedRow.documentNo);
				navigateTo('Credit Memo')
				break;
			case 'Payments':
				showAlert('Payment');
				break;
			case 'Refunds':
				showAlert('Refund');
				break;
		}
	}
}