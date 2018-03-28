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

Route::get('api/bets', 'ReactController@showAll')->name('all-bets');

Route::post('api/bet/create', 'ReactController@create')->name('create-bet');

Route::get('api/bet/view/{id}', 'ReactController@show')->name('view-bet');

Route::post('api/bet/edit/{id}', 'ReactController@edit')->name('edit-bet');

Route::post('api/bet/delete/{id}', 'ReactController@delete')->name('delete-bet');

Route::get('/{path?}', [
    'uses' => 'HomeController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
])->name('react-home');