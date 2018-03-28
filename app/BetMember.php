<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = ['placed_bet', 'bet_id', 'created_by_id'];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

    public function participants()
    {
        return $this->morphMany(User::class, 'participants');
    }
}

