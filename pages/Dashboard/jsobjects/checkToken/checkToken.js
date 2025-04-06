export default {
	async checkToken () {
		return verify_token.run()
			.then(data => {
			if (!data.value)
				navigateTo('Login')
			else {
				Spinner.setVisibility(false);
				DashboardWidget.setVisibility(true);

			}
		})
			.catch(() => {
			storeValue("token", '');
			storeValue("userId", '');
			storeValue("userName", '');
			navigateTo('Login');
		})
	}
}