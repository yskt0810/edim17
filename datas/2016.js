var map_2016 = new Datamap({


		scope: 'world',
		element: document.getElementById('container_2016'),
		responsive: true,
		projection: 'mercator',

		geographyConfig: {
			pupupTemplate: function(geo,data){
				return '<div class"hoverinfo"' + geography.properties.name + '</div>';

			},
			highlightOnHover: false,
			popupOnHover: false,
			borderColor: '#EFEFEF',
			borderWidth: 0
		},
		dataUrl: './datas/2016Participation_rev.json',
		data: {},
		fills: {
			'L1': '#CCCCCC', // <50
			'L2': '#BBBBBB', // <150
			'L3': '#AAAAAA', // <250
			'L4': '#999999', // <350
			'L5': '#888888', // >=350
			'Participated': '#BBBBBB',
			defaultFill: '#EEEEEE'
		}
});

window.addEventListener('resize', function(){

	map_2016.resize();

});

d3.select(window).on('resize',function(){

	map_2016.resize();

});


$(window).on('resize',function(){

	map_2016.resize();

});