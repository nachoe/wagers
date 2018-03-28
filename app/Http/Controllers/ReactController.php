<?php

namespace App\Http\Controllers;

use App\Bet;
use Illuminate\Http\Request;

class ReactController extends Controller
{
    public function show(Bet $bet, $id = null)
    {

        return $bet->find($id);
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

        $edit_bet->fill($request->all());
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
        $issues = Bet::all();
        return $issues;
    }
}
