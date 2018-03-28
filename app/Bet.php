<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bet extends Model
{
    protected $fillable = ['description', 'title', 'wager', 'notes', 'created_by_id', 'start_date', 'participants'];

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
        return $this->hasMany('App\Participant');
    }
}

