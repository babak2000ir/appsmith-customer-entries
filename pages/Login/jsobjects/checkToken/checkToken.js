export default {
	async checkToken () {
		return verify_token.run()
			.then(data => {
			if (data.value)
				navigateTo('Dashboard')
		})
			.catch(() => {
			storeValue("token", '');
			storeValue("userId", '');
			storeValue("userName", '');
		})
	}
}