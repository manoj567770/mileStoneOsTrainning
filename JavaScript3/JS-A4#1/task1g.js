let st = [{gr1:'A',gr2:'B'},
		{gr1:'',gr2:'C'},
		{gr1:'B',gr2:''},
		{gr1:'C',gr2:'B'},
		{gr1:'',gr2:''}];

		const arr1 = st.map(function(val){
			return {final:val.gr1 || val.gr2 || 'D'};
		});

		console.log(arr1);