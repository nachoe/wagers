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
    }

    public function showAll()
    {
        $issues = Bet::all();
        return $issues;
    }


    private $all_bets = [
        1 => [
            'created_by' => 'Jesse Matlock',
            'id' => '1',
            'title' => 'Lakers final record',
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
            'title' => 'Angels final record',
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
            'title' => 'Yankees final record',
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
            'title' => 'APs total Homeruns',
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

}
