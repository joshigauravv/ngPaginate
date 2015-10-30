mainApp.directive('paginate',['$rootScope', function($rootScope) {
	return {
		link:function (scope, el, attrs) {
			var individualSize = 0;
			angular.element(el[0]).on('scroll', calculateSize);
			scope.$on('$destroy', function() {
			  return angular.element(el[0]).off('scroll', handler);
			});
			function getSize(element) {
				for(var j=0; j<element.length; j++) {
					var attrs = element[j].attributes;
					if(attrs.length > 0) {
						for(var i=0; i< attrs.length; i++) {
							if(attrs[i].name == 'ng-repeat') {
								return element[j].clientHeight;
							}
						}
					}
					if(element[j].children.length > 0) {
						return getSize(element[j].children);
					}	// traverse children to know height
				}
			}	// individual element size, assumed all children will have same height
			
			function calculateSize(event) {
				if(individualSize <= 0) {
					individualSize = getSize(el);
					console.log(individualSize);
					console.log("scroll height " + event.currentTarget.scrollHeight/el[0].children.length)
				}
				
				// run the pagination function
				if(!scope.$eval(attrs.terminate) && (event.currentTarget.scrollHeight - (event.currentTarget.clientHeight + event.currentTarget.scrollTop) < 0.1*event.currentTarget.scrollHeight)) {
					if ($rootScope.$$phase) {
					  return scope.$eval(attrs.paginate);
					}
					else {
					  return scope.$apply(attrs.paginate);
					}
				}
			}		
		}
	}
}]);