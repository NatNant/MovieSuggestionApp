app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
		{
			title: 'Free pizza at club meetings',
			upvotes: 15,
			comments: [
				{body: 'Love this one',
				upVotes:0},
				{body: 'Love this two',
				upVotes:0},
				{body: 'Love this three',
				upVotes:0}],
		},
		{
			title: 'End all club emails with Laffy Taffy jokes',
			upvotes: 9,
			comments: [
				{body: 'Love this one',
				upVotes:0},
				{body: 'Love this two',
				upVotes:0},
				{body: 'Love this three',
				upVotes:0}],
		},
		{
			title: 'Retrofit water fountain with Gatorade',
			upvotes: 7,
			comments: [
				{body: 'Love this one',
				upVotes:0},
				{body: 'Love this two',
				upVotes:0},
				{body: 'Love this three',
				upVotes:0}],
		},
		{

			title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
			upvotes: 3,
			comments: [
				{body: 'Love this one',
				upVotes:0},
				{body: 'Love this two',
				upVotes:0},
				{body: 'Love this three',
				upVotes:0}],
		},
		]
	};
	return demoSuggestions;
}]);