// return masked string
function maskify(cc) {
	// if (cc.length > 4) {
	// 	return cc.replace(cc.slice(0, -4), "#".repeat(cc.length - 4));
	// } else {
	// 	return cc;
	// }
	return cc.length > 4
		? cc.replace(cc.slice(0, -4), "#".repeat(cc.length - 4))
		: cc;
}

console.log(maskify("1"));
