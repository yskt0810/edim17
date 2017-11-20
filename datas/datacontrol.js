
function makeMaps(datafiles){

	var map_1964 = new Datamap({


		scope: 'world',
		element: document.getElementById('container_1964'),
		responsive: true,
		projection: 'mercator',
		geographyConfig: {
			pupupTemplate: function(geo,data){
				return '<div class"hoverinfo"' + geography.properties.name + '</div>';

			},
			rotation: [-37,-135],
			highlightOnHover: false,
			popupOnHover: false,
			borderColor: '#999999',
			borderWidth: 0
		},
		
		dataUrl: datafiles,
		data: {},
		fills: {
			'L1': '#CCCCCC', // <50
			'L2': '#BBBBBB', // <150
			'L3': '#AAAAAA', // <250
			'L4': '#999999', // >=250
			'Participated': '#BBBBBB',

			defaultFill: '#EEEEEE'
		}
		
	});

}



window.addEventListener('resize', function(){

	map_1964.resize();

});

d3.select(window).on('resize',function(){

	map_1964.resize();

});


$(window).on('resize',function(){

	map_2016.resize();

});