'use strict';

angular.module('fond.home', [])

  .controller('HomeCtrl', function ($scope, $http) {
    $scope.news = [
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    },
    {
      'time': '6 мая 16:00',
      'img': 'news.jpg',
      'desc': 'Подведены итоги конкурса по размещению средст Фонда'
    }
  ];

    $http.get('http://localhost:3000/news')
        .success(function(data){
            $scope.news = data;
        });
  })

;
