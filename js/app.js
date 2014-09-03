require.config({
	paths: {
		angular: 'js/angular.min',
	//	angularRessource: 'js/angular-resource.min',
		angularRoute: 'js/angular-route.min',
	//	angularModel: 'js/angular-model.min',
		ace: 'js/ace',
		aceJavaMode: 'js/ace/mode/java',
		bootstrap: 'js/bootstrap.min',
		ngapp: 'js/ng-app',
		jquery: 'js/jquery.min'
	},
	shim: {
		angular: 			{ exports: 'angular' },
	//	angularRessource: 	{ deps: ['angular'] },
		angularRoute: 		{ deps: ['angular'] },
	//	angularModel: 		{ deps: ['angular'] },
		aceJavaMode: 		{ deps: ['ace'] },
		ngapp: 				{ deps: ['angular', 'angularRoute'] },
		bootstrap: 			{ deps: ['jquery'] } 
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'angularRoute',
	'ngapp'
], function(angular, ngapp, angularRoute) {
	//var $html = angular.element(document.getElementsByTagName('html')[0]);
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap(['krelln']);
	});


//	angular.bootstrap(document, ['angular', 'ngapp', 'angularRoute']);
/*
	angular.element().ready(function() {
		angular.resumeBootstrap([ngapp['name']]);
	});
*/
});

require(['bootstrap'], function(bootstrap){
	jQuery('.dropdown-toggle').dropdown();
});

require(['ace/ace'], function(ace) {
	// Set up the editor
	window.ace = ace;
});



/*


require.config({
	paths: {
		'angular': 'js/angular.min',
		'ace': 'js/ace',
		'bootstrap': 'js/bootstrap.min',
		'ng-app': 'js/ng-app',
		'jquery': 'js/jquery.min'/*,
		'jquery-ui': 'js/jquery-ui.min',
		'processing': 'js/processing',
		'processing-helper': 'js/processing-helper',
		'jsbeautify': 'js/jsbeautify'*//*
	},
	shim: {
		'angular': 		{'exports' : 'angular'}
		'jquery': 		{  },
		'ng-app': 		{ deps: ['angular'] },
	//	'jquery-ui': 	{ deps: ['jquery'] },
		'bootstrap': 	{ deps: ['jquery'] },
		'bootstrap/affix':      { deps: ['jquery'], exports: '$.fn.affix' }, 
		'bootstrap/alert':      { deps: ['jquery'], exports: '$.fn.alert' },
		'bootstrap/button':     { deps: ['jquery'], exports: '$.fn.button' },
		'bootstrap/carousel':   { deps: ['jquery'], exports: '$.fn.carousel' },
		'bootstrap/collapse':   { deps: ['jquery'], exports: '$.fn.collapse' },
		'bootstrap/dropdown':   { deps: ['jquery'], exports: '$.fn.dropdown' },
		'bootstrap/modal':      { deps: ['jquery'], exports: '$.fn.modal' },
		'bootstrap/popover':    { deps: ['jquery'], exports: '$.fn.popover' },
		'bootstrap/scrollspy':  { deps: ['jquery'], exports: '$.fn.scrollspy' },
		'bootstrap/tab':        { deps: ['jquery'], exports: '$.fn.tab'        },
		'bootstrap/tooltip':    { deps: ['jquery'], exports: '$.fn.tooltip' },
		'bootstrap/transition': { deps: ['jquery'], exports: '$.fn.transition' }/*,
		'processing-helper': { deps: ['processing'] }*//*
	}
});

require(['angular'], function(angular) {

});*/