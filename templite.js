$(function(){
	var abc={box : [{title:"标题1",author:"作者1",content:"文章1"},
				{title:"标题2",author:"作者2",content:"文章2"},
				{title:"标题3",author:"作者3",content:"文章3"},
				{title:"标题4",author:"作者4",content:"文章4"},
				{title:"标题5",author:"作者5",content:"文章5"}],zzz:123};
				var body = $("body");
	var baobiao = {data: [{zhichu:333,shouru:222},{zhichu:115,shouru:467},{zhichu:879,shouru:3245},{zhichu:654,shouru:5345}]}
				//var t ;
	// for(var i in box){
		// var wenZhang = box[i];
		// tianJiaWenZhang.call(wenZhang);
	// };
	// function tianJiaWenZhang(){
		// var str = "<div class='kuai'><h3>"+this.title+"</h3><p class='author'>"+this.author+"</p><P>"+this.content+"</p></div>";
		// body.append(str);
	// };
	// body.on("mouseover mouseout",".author",function(){
		// var zuobiao = $(this).offset();
		// t = setTimeout(function(){
			// $(".author-info").css("top",zuobiao.top+30+"px");
			// $(".author-info").css("left",zuobiao.left+"px");
			// $(".author-info").toggleClass("on");
		// },500);	
	// });
	// $(".author-info").on("mouseover",function(){
		// clearTimeout(t);
		// });
	// $(".author-info").on("mouseout",function(){
		// $(".author-info").toggleClass("on");
		// });
		
		
		
		// var date = {title:"标题1",author:"作者1",content:"文章1"};
		// var str = "<div class='kuai'><h3>{{title}}</h3><p class='author'>{{author}}</p><p>{{content}}</p></div>";
		// function pipei(str){
			// var alian = str;
			// var reg = new RegExp(/\{\{\s*([a-zA-Z\.\_0-9()]+)\s*\}\}/m);
			// var result="";
			// while(true){
				// var rs = reg.exec(alian);
				// if(!rs){break;}
				// result += alian.slice(0,rs.index);
				// var xinxiduan = rs[0].length;
				// result += date[rs[1]];
				// var shengyu = alian.slice(rs.index+xinxiduan);
				// alian = shengyu;
			// };
			// result=result+alian;
			// return result;
		// };
		// var rs1 = pipei(str);
		// body.append(rs1);
		
		
		
		
		//"<div class='kuai'><h3>{{title}}</h3><p class='author'>{{author}}</p><p>{{content}}</p></div>";
		
		// var data = {title:"标题1",author:"作者1",content:"文章1"};
		// var str = document.getElementById("tp1").innerHTML;
		// var result = "";
		// var piont = {
			// startTag : "{{",
			// endTag : "}}"
		// };
		// function pipei(str,data){
			// var rs = str.split(piont.startTag);
			// for(var i in rs){
				// var rs1 = rs[i].split(piont.endTag);
				// if(rs1.length == 1){
					// result = rs1[0];
				// }else{
					// result += data[rs1[0]];
					// result += rs1[1];
				// };
			// };
			// return result;
		// };
		// var temp = pipei(str,data);
		// body.append(temp);
		
		
		
		
		//<div class='kuai'><h3>{{title}}</h3><p class='author'>{{author}}</p><p>{{content}}</p></div>;
		
		// var data = {title:"标题1",author:"作者1",content:"文章1"};
		// var str = document.getElementById("tp1").innerHTML;
		
		// function pipei(str){
			// var body = "";
			// function codo(str){
				// return cood[0]+"'"+str.replace(/\'/g,"\\'").replace(/\r|\n/,"")+"'"+";\n";
			// };
			// function loqic(str){
				// return cood[0]+"data."+str+";\n";
			// };
			// var head = "var out='';\n";
			// var foot = "return out;\n";
			// var cood =["out+="];
			// var result = "";
			// var piont = {
				// startTag : "{{",
				// endTag : "}}"
			// };
			// var rs = str.split(piont.startTag);
			// for(var i in rs){
				// var rs1 = rs[i].split(piont.endTag);
				// if(rs1.length == 1){
					// body = codo(rs1[0]);
				// }else{
					// body += loqic(rs1[0]);
					// body += codo(rs1[1]);
				// };
			// };
			// var code = head+body+foot;
			// var a = new Function("data",code);	
			// return a;
		// };
		// var temp = pipei(str);;
		// body.append(temp(data));
		
		
		
		// abc={box : [{title:"标题1",author:"作者1",content:"文章1"},
				// {title:"标题2",author:"作者2",content:"文章2"},
				// {title:"标题3",author:"作者3",content:"文章3"},
				// {title:"标题4",author:"作者4",content:"文章4"},
				// {title:"标题5",author:"作者5",content:"文章5"}]zzz:123};
		//{{for wenzhang in box}}
		//<div class='kuai'><h3>{{wenzhang.title}}</h3><p class='author'>{{wenzhang.author}}</p><p>{{wenzhang.content}}</p></div>
		//{{endfor}}
		//{{zzz}};
		
		//var data = {title:"标题1",author:"作者1",content:"文章1"};
		
		
		
		// var str = document.getElementById("tp1").innerHTML;
		// function pipei(str){
			// var flag = true;
			// var piont = {
				// startTag : "{{",
				// endTag : "}}"
			// };
			// var head = "var out='';\n"
			// var body = "";
			// var foot = "return out;";
			// var shuzu ="out+=";
			// function tol(str){
				// var rsss = shuzu+"'"+str.replace(/\'/g,"\\'").replace(/[\r\n]/g,"")+"'"+";\n";
				// return rsss;
			// };
			// function loqic(str){
				// var suzu = str.trim().split(" ");
				// var first = suzu.shift();
				// var re = "";
				// var bianliang = suzu[0];
				// var shuju = suzu[2];
				// if(first=="if"){
					// re += "if("+suzu.join(" ")+"){\n";
				// }else if(first=="endif"){
					// re += "}\n";
				// } else if(first == "for"){
					// re += "for(var i in data['"+shuju+"']){\n"+
					// "var "+bianliang+"=data['"+shuju+"'][i];\n"
					// flag = true;
				// }else if(first =="endfor"){
					// re += "}\n";
					// flag = false;
				// }else{
					// if(flag){
						// re += shuzu+str+";\n";               //shuzu+
					// }else{
						// re +=shuzu+"data."+str.trim()+";\n"
					// }
				// }
				// return re;
			// };
			// var rs = str.split(piont.startTag);
			// for(var i in rs){
				// var rs1 = rs[i].split(piont.endTag);
				// if(rs1.length == 1){
					// body = tol(rs1[0]);
				// }else{
					// body += loqic(rs1[0]);
					// body += tol(rs1[1]);
				// };
			// };
			// var code = head+body+foot;
			// var a = new Function("data",code);
			// return a;
		// };
		// var temp = pipei(str);
		// body.append(temp(abc));
		
		
		
	
		
		
		var str = document.getElementById("tp1").innerHTML;   //从文档中得到模板字符串
		function pipei(str){                                  //定义一个函数pipei()，传入参数str
			var head = "var out = ''\n";
			var body = "";
			var foot = "return out"
			var leijia = "out +=";
			var startTag = "{{";
			var endTag = "}}";
			var for_flag = false;

			var shuzu = str.trim().split(startTag);
			for(var i in shuzu){
				var rs = shuzu[i].trim().split(endTag);
				//console.log(rs);
				if(rs.length == 2){
					body += loqic(rs[0]);
					body += toool(rs[1]);
				}else{
					body += toool(rs[0]);
				};
			};
			function loqic(str1){
				var suzu = str1.trim().split(" ");
				var first = suzu.shift();
				var re = "";
				if(first == "for"){
					var wenzhang = suzu[0];
					var shuju = suzu[2];
					re +="for(var i in data."+shuju+"){\n";
					re +="var "+wenzhang+" = data."+shuju+"[i];\n";
					for_flag = true;
				}else if(first == "endfor"){
					re +="}\n"
					for_flag = false;
				}else if(first == "if"){
					re +="if("+suzu.join(" ")+"){\n"
				}else if(first == "endif"){
					re +="}\n"
				}else{
					if(for_flag){
						re +=leijia+str1+";\n";
					}else{
						re +=leijia+"data."+str1+";\n";
					};
				};
				//console.log(re);
				return re;	
			};
			function toool(str2){
				var re1 = "";
				re1 +=leijia+"'"+str2.replace(/\'/g,"\\'").replace(/[\r\n]/g,"")+"'"+";\n";
				//console.log(re1);
				return re1;
			};
			var code = head+body+foot;
			console.log(code)
			var a = new Function("data",code);
			return a;
		};
		var temp = pipei(str);
		var result = temp(abc);
		body.append(result);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});