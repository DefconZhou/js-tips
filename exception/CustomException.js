// @author defcon
// @Ref https://www.sitepoint.com/exceptional-exception-handling-in-javascript/

function LocalStorageException(message) {
	this.name = "LocalStorageException";
	this.message = message;
}

LocalStorageException.prototype = new Error();

LocalStorageException.prototype.constructor = LocalStorageException;






