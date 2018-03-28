<?php

namespace App\Http\Controllers;

use App\Bet;
use App\User;
use Illuminate\Http\Request;

class BetController extends Controller
{
    public function show(Bet $bet, $id = null)
    {
        $this_bet = $bet->find($id);
//        $participants = [];
//        foreach ($this_bet->participants as $participant) {
//            $user_id = $participant->created_by_id;
//            $user = User::find($user_id);
//
//            $participants[$participant->id] = [
//                'name' => $user->name,
//                'placed_bet' => $participant->placed_bet,
//            ];
//        }
//        unset($this_bet->participants);
//
//        $return = array_merge($this_bet->toArray(), ['participants'=> $participants]);

        return $this->getParticipants($this_bet);
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:bets',
            'description' => 'required'
        ]);

        return Bet::create(array_merge(
            $request->all(),
            ['created_by_id' => auth()->user()->id]
        ));
    }

    public function edit(Bet $bet, Request $request, $id = null)
    {
        $edit_bet = $bet->find($id);

        $arry = $request->all();
        unset($arry['participants']);

        $edit_bet->fill($arry);
        $edit_bet->save();

        return $edit_bet;
    }

    public function delete(Bet $bet, Request $request, $id = null)
    {
        $deleted_bet = $bet->find($id);
        return $deleted_bet;
    }

    public function showAll()
    {
        $bets = Bet::all();
        $returned_bets = [];
        foreach ($bets as $bet) {
            $returned_bets[] = $this->getParticipants($bet);
        }

        return response()->json($returned_bets);
    }

    private function getParticipants($bet)
    {
        $participants = [];
        foreach ($bet->participants as $participant) {
            $user_id = $participant->created_by_id;
            $user = User::find($user_id);

            $participants[$participant->id] = [
                'name' => $user->name,
                'placed_bet' => $participant->placed_bet,
            ];
        }
        unset($bet->participants);

        return array_merge($bet->toArray(), ['participants'=> $participants]);
    }
}
