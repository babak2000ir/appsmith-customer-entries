export default {
	async logOff () {
		storeValue("token", '');
		storeValue("userId", '');
		storeValue("userName", '');
		navigateTo('Login');
	}
}