'use strict';

var app = angular.module('LeagueManager', ['ngRoute', 'ngSanitize', 'ngCkeditor']);

app.run(function ($location, $rootScope, UserService, DataService, SettingsService) {
	$rootScope.changeSaison = function (saison) {
		$rootScope.selectedSaison = saison;
	}
	$rootScope.go = function (path) {
		$location.path(path);
	};
	DataService.getSaisons().then(function (saisons) {
		$rootScope.saisons = saisons;
	}).then(function () {
		DataService.getDefaultSaison().then(function (defaultSaison) {
			$rootScope.selectedSaison = defaultSaison;
		});
	});

	
});

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'app/components/Start/Start.html' })
		.when('/History', { templateUrl: 'app/components/HSV/History.html' })
		.when('/Articles', { templateUrl: 'app/components/Article/Articles.html' })
		.when('/EditArticle/:articleId', { templateUrl: 'app/components/Article/EditArticle.html', controller: 'EditArticleCtrl' })
		.when('/DeleteArticle/:articleId', { template: 'Beitrag wird gel&ouml;scht...', controller: 'DeleteArticleCtrl' })
		.when('/Player/RankSaison', { templateUrl: 'app/components/Player/Rank.html', controller: 'PlayerSaisonCtrl' })
		.when('/Player/RankHistory', { templateUrl: 'app/components/Player/Rank.html', controller: 'PlayerCtrl' })
		.when('/Player/Details/:playerId', { templateUrl: 'app/components/Player/Details.html', controller: 'PlayerDetailsCtrl' })
		.when('/Matches', { templateUrl: 'app/components/Match/Matches.html', controller: 'MatchesCtrl' })
		.when('/MatchDetails/:matchId', { templateUrl: 'app/components/Match/MatchDetails.html', controller: 'MatchDetailsCtrl' })
		.when('/Teams', { templateUrl: 'app/components/Team/Teams.html', controller: 'TeamsCtrl' })
		.when('/TeamDetails/:teamId', { templateUrl: 'app/components/Team/TeamDetails.html', controller: 'TeamDetailsCtrl' })
		.when('/Impressum', { templateUrl: 'app/components/HSV/Impressum.html' })
		.when('/Users', { templateUrl: 'app/components/Auth/Users.html', controller: 'UsersCtrl' })
		.when('/User/:userId', { templateUrl: 'app/components/Auth/User.html', controller: 'UserCtrl' })
		.when('/Login', { templateUrl: 'app/components/Auth/Login.html', controller: 'LoginCtrl' })
		.when('/Logout', { templateUrl: 'app/components/Auth/Logout.html', controller: 'LogoutCtrl' })
		.otherwise({ redirectTo: '/' });
});

