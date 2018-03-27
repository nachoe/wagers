<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$all_bets = [
    1 => [
        'created_by' => 'Jesse Matlock',
        'id' => '1',
        'description' => 'Lakers final record',
        'wager' => '$10',
        'participants' => [
            0 => 'Mike Webber',
            1 => 'Joe Matlock',
            2 => 'Johnny Matlock',
        ],
        'start_date' => 'January 12th, 2018',
        'end_date' => 'May 20th 2018',
        'winner' => null,
    ],
    2 => [
        'created_by' => 'Johnny Matlock',
        'id' => '2',
        'description' => 'Angels final record',
        'wager' => '$10',
        'participants' => [
            0 => 'Mike Webber',
            1 => 'Joe Matlock',
            2 => 'Johnny Matlock',
        ],
        'start_date' => 'January 12th, 2018',
        'end_date' => 'May 20th 2018',
        'winner' => null,
    ],
    3 => [
        'created_by' => 'Joe Matlock',
        'id' => '3',
        'description' => 'Yankees final record',
        'wager' => '$10',
        'participants' => [
            0 => 'Mike Webber',
            1 => 'Joe Matlock',
            2 => 'Johnny Matlock',
        ],
        'start_date' => 'January 12th, 2018',
        'end_date' => 'May 20th 2018',
        'winner' => null,
    ],
    4 => ['created_by' => 'Mike Webber',
        'id' => '4',
        'description' => 'APs total Homeruns',
        'wager' => '$10',
        'participants' => [
            0 => 'Mike Webber',
            1 => 'Joe Matlock',
            2 => 'Jesse Matlock',
        ],
        'start_date' => 'January 12th, 2018',
        'end_date' => 'May 20th 2018',
        'winner' => null,
    ]
];

Route::get('{reactRoutes}', function () {
    return view('index'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word

Route::get('api/bets', 'ReactController@showAll');

Route::post('api/bet/create', 'ReactController@create');

Route::get('api/bet/view/{id}', 'ReactController@show');
