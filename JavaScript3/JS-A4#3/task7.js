let arr = [{"name":"Dave","js":59,"node":67},
			{"name":"George","js":58,"react":82,"node":65},
			{"name":"William","node":68},
			{"name":"Anita","react":65,"node":56},
			{"name":"Steve","js":56,"react":51},
			{"name":"Julia","js":47},
			{"name":"Mary","js":72,"react":55,"node":81}];



			const arr1 = arr.map(st=> {
				let {js=0,react=0,node=0}=st;
				let max;
				js>react && js>node ? max = js :
				react>js && react>node ? max = react : max = node;
				let obj = {name : st.name,js:js,react:react,node:node,
					maxMarks : max};
				return obj;
			});

			console.log(arr1);