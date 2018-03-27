<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bet extends Model
{
    protected $fillable = ['description', 'created_by_id', 'created_at', 'updated_at', 'start_date', 'end_date', 'participants'];


    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

    public function participants()
    {
        return $this->morphMany(User::class, 'participants');
    }
}
