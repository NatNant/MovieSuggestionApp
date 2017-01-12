app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {
	
	$scope.post = suggestions.posts[$routeParams.id];
	//$scope.comment =  $scope.post.comments[$routeParams.commentId];

	$scope.addComment = function() {
		

		//if input empty, don't submit
		if(!$scope.body || $scope.body === "") {
			return;
		}
		//push a comment to a suggestion post
		$scope.post.comments.push({
			body: $scope.body,
			upVotes:0,
		});

		//after submit, clear input
		$scope.body = '';
		
	};

	$scope.upVote = function(comment){
		comment.upVotes += 1;
	}


}]);