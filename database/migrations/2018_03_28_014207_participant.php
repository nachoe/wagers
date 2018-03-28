<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Participant extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->timestamps();
            $table->increments('id');
            $table->char('placed_bet', 255);
            $table->integer('bet_id')->unsigned();
            $table->foreign('bet_id')->references('id')->on('bets');
            $table->integer('created_by_id')->unsigned();
            $table->foreign('created_by_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('participants');
    }
}
