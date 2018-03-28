<?php

namespace App\Http\Controllers;

use App\Bet;
use App\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function fetch(Participant $participant, $bet_id = null)
    {
        $edit_participant = $participant::where('bet_id', $bet_id)
            ->where('created_by_id', auth()->user()->id)->first();

        return $edit_participant;
    }

    public function create(Request $request, $bet_id = null)
    {
        $request->validate([
            'placed_bet' => 'required'
        ]);
        $bet = Bet::find($bet_id);

        return Participant::create(array_merge(
            $request->all(),
            ['bet_id' => $bet->id],
            ['created_by_id' => auth()->user()->id]
        ));
    }

    public function edit(Participant $participant, Request $request, $bet_id = null)
    {
        $edit_participant = $participant::where('bet_id', $bet_id)
            ->where('created_by_id', auth()->user()->id)->first();

        $edit_participant->fill($request->all());
        $edit_participant->save();

        return $edit_participant;
    }
}
