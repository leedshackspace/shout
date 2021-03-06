var ClientManager = new require("../clientManager");
var program = require("commander");

program
	.command("list")
	.description("List all users")
	.action(function() {
		var users = new ClientManager().getUsers();
		if (!users.length) {
			console.log("");
			console.log("No users found!");
			console.log("");
		} else {
			console.log("");
			console.log("Users:");
			for (var i = 0; i < users.length; i++) {
				console.log("  " + (i + 1) + ". " + users[i]);
			}
			console.log("");
		}
	});
