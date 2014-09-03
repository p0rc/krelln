(function() {
	var app = angular.module('krelln', []);

	app.controller("TabController", ['$rootScope', function($rootScope) {
		this.tabs = [];
		this.activeTab = 0;
		this.pjstabs = [];

		this.initTabs = function(files) {
			for (var i = 0; i < files.length; i++) {
				this.addTab(files[i]);				
			};
		};

		this.isActive = function(checkTab) {
			return this.activeTab === checkTab;
		};

		this.setTab = function(setTab) {
			this.activeTab = setTab;
//			console.log(window.editor.getSession().getValue());
		};

		this.addTab = function(file) {
			file.id = this.tabs.length;
			this.tabs.push(file);
			this.setTab(file.id);
			//this.initEditor(file.id);
		};

		this.closeTabs = function() {
			this.tabs = [];
			this.activeTab = 0;
		};

		this.initEditor = function(tabId) {
			this.pjstabs[tabId] = window.ace.edit('code'+tabId);
			this.pjstabs[tabId].setTheme('ace/theme/monokai');
			this.pjstabs[tabId].getSession().setMode('ace/mode/java');
			this.pjstabs[tabId].getSession().setTabSize(4);
			this.pjstabs[tabId].getSession().setUseSoftTabs(true);
		};

		this.onProjectLoaded = function($scope) {

			tabs = this;
			
			$scope.$on('projectLoaded', function(event, file) {
				tabs.closeTabs();
				tabs.addTab(file);
			});
		};

		this.onProjectLoaded($rootScope);
		this.initTabs([{filename: 'default.pde', data: 'dhsuiazheuiazheuiazheajneazuiheazuieaezae'}, {filename: 'curves.pde', data: 'dfjisdofj sfh zeuirhzeu rhzeuir hzuir hzeuir'}]);

	}]);

	app.controller("SketchController", ['$http', '$rootScope', function($http, $rootScope) {
		var sketch = this;

		this.loadFiles = function() {
			$http({method: 'GET', url: 'pde/list.html'})
			 .success(function(data, status, headers, config) {
				sketch.files = data;
				sketch.filesLoaded($rootScope);
			})
			 .error(function(data, status, headers, config) {
				console.log(files, data);
			});
		};

		this.loadFiles();

		this.loadProject = function(file) {
			$rootScope.$broadcast('projectLoaded', file);			
		};

		this.filesLoaded = function($rootScope) {
			$rootScope.$broadcast('filesLoaded', this.files);
		};

	}]);

	app.controller('editor', function ($scope) {
	    $scope.content = '# Ace Directive ';
	});

	app.directive('ace', ['$timeout', function ($timeout) {

	    var resizeEditor = function (editor, elem) {
	        var lineHeight = editor.renderer.lineHeight;
	        var rows = editor.getSession().getLength();

	        $(elem).height(rows * lineHeight);
	        editor.resize();
	    };

	    return {
	        restrict: 'A',
	        require: '?ngModel',
	        scope: true,
	        link: function (scope, elem, attrs, ngModel) {
	            var node = elem[0];

	            var editor = ace.edit(node);

				editor.setTheme('ace/theme/monokai');
				//editor.getSession().setMode('ace/mode/java');
				editor.getSession().setTabSize(4);
				editor.getSession().setUseSoftTabs(true);
	            editor.getSession().setMode('ace/mode/java');

	            //var MarkdownMode = require('ace/mode/markdown').Mode;
	            //var JavaMode = require('js/ace/mode/java').Mode;

	            // set editor options
	            editor.setShowPrintMargin(false);

	            // data binding to ngModel
	            ngModel.$render = function () {
	                editor.setValue(ngModel.$viewValue);
	                //setEditorContent(editor, node);
	                resizeEditor(editor, elem);
	            };

	            editor.on('change', function () {
	                $timeout(function () {
	                    scope.$apply(function () {
	                        var value = editor.getValue();
	                        ngModel.$setViewValue(value);
	                    });
	                });

	                resizeEditor(editor, elem);
	            });
	        }
	    };
	}]);


})();