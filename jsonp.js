function jsonp (url,params,fn){

	//1.拼接参数
	var queryString = '?';

	for(key in params){

		queryString += key + '=' + params[key] + '&&';

	}

	
	var funName = 'my_callback' + new Date().getTime();
	queryString += 'callback' + '=' + funName;
	console.log(queryString);

	//挂在函数

	window[funName] = function(res){
		fn(res);
	};

	//要向页面添加script标签
	//设置   src  callback=fun

	var script = document.createElement('script');
	script.src = url + queryString;

	document.body.appendChild(script);



};
jsonp('https://api.douban.com/v2/movie/in_theaters',{count:5,start:2},function(res){

	console.log(res);

})