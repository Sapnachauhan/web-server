//accessing the request object information 
var middleware ={
	requireAuthentication : function (req,res,next){
		console.log('private route hit!!');
		next();
	},
	logger : function(req, res, next){
		console.log(" 1). Request Method :"+ req.method);
		console.log(" 2). Request url : "+ req.originalUrl );
		console.log(" 3). Request time : "+ (new Date().toString()));
		console.log("=============================================\n");
		next();
	},
	requestTime : function(req, res, next){
		req.requestTime =Date.now();
		console.log("Request time :"+ req.requestTime);
		next();
	}
}
module.exports=middleware;