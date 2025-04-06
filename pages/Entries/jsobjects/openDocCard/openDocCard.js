export default {
	openDocumentCard () {
		switch(Table1.selectedRow.documentType) {
			case 'Invoice':
				storeValue('invoiceNo', Table1.selectedRow.documentNo);
				navigateTo('Invoice');
				break;
			case 'Credit Memo':
				storeValue('creditmemoNo', Table1.selectedRow.documentNo);
				navigateTo('Credit Memo')
				break;
			case 'Payment':
				showAlert('Payment');
				break;
			case 'Refund':
				showAlert('Refund');
				break;
		}
	}
}