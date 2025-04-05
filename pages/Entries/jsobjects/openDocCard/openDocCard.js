export default {
	openDocumentCard () {
		switch(Table1.selectedRow.Document_Type) {
			case 'Invoice':
				storeValue('invoiceNo', Table1.selectedRow.Document_No);
				navigateTo('Invoice');
				break;
			case 'Credit Memo':
				showAlert('Credit Memo');
				break;
			case 'Payment':
				showAlert('Payment');
				break;
		}
	}
}