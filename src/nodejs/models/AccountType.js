module.exports = function() {
	var AccountType = function(id,name) {
		this.id = id;
		this.name = name;
	}
	var AccountTypes = [];

	AccountTypes[0] = new AccountType(0,"deleted");
	AccountTypes[1] = new AccountType(1,"banned");
	AccountTypes[2] = new AccountType(2,"user");
	AccountTypes[5] = new AccountType(5,"sponsor");
	AccountTypes[9] = new AccountType(9,"moderator");
	AccountTypes[10] = new AccountType(10,"admin");

	return AccountTypes;
}