module.exports = {

	mulNumbers: function (a,b){
	return math.chain(a).multiply(b).value;
	},

	addNumbers: function (a,b){
	return a+b;
	},

	subNumbers: function (a,b){
	return a-b;
	}

}