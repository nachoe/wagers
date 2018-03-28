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


Route::get('/logout', 'Auth\LoginController@logout');

Auth::routes();

/** BETS */
Route::get('api/bets', 'BetController@showAll')->name('all-bets');

Route::post('api/bet/create', 'BetController@create')->name('create-bet');

Route::get('api/bet/view/{id}', 'BetController@show')->name('view-bet');

Route::post('api/bet/edit/{id}', 'BetController@edit')->name('edit-bet');

Route::post('api/bet/delete/{id}', 'BetController@delete')->name('delete-bet');

///** PARTICIPANTS */
//Route::get('api/participants', 'ParticipantController@showAll')->name('all-participants');

Route::post('api/participant/create/{bet_id}', 'ParticipantController@create')->name('join-bet');
//
Route::get('api/participant/fetch/{id}', 'ParticipantController@fetch')->name('view-participant');

Route::post('api/participant/edit/{bet_id}', 'ParticipantController@edit')->name('edit-participant');
//
//Route::post('api/participant/delete/{id}', 'ParticipantController@delete')->name('delete-participant');

/** CATCH ALL */
Route::get('/{path?}', [
    'uses' => 'HomeController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
])->name('react-home');