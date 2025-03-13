export default {
	async login () {
		return log_in.run()
			.then(data => {
			const valueJson = JSON.parse(data.value);
			storeValue("token", valueJson.token);
			storeValue("userId", valueJson.userId);
			storeValue("userName", valueJson.userName);
		})
			.then(() => checkToken.checkToken());
	}
}