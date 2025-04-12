export default {
	async login () {
		return log_in.run()
			.then(data => {
			const valueJson = JSON.parse(data.value);
			storeValue("token", valueJson.token);
			storeValue("userId", valueJson.userId);
			storeValue("customerNo", valueJson.sourceNo);
			storeValue("userInfo", valueJson.userInfo)
			storeValue("globalInfo", valueJson.globalInfo)
		})
			.then(() => checkToken.checkToken())
			.catch(() => showAlert("Invalid username or password. Please try again."))
	}
}