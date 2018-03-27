<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{

    public function show($id = 1)
    {
        if (isset($this->all_bets[$id])) {
            return json_encode($this->all_bets[$id]);
        }
        return json_encode($this->all_bets[1]);
    }

    public function create()
    {
        return json_encode(
            [
                'good' => 'stuff'
            ]);
    }

    public function showAll()
    {
        return json_encode($this->all_bets);
    }

    private $all_bets = [
        1 => [
            'created_by' => 'Jesse Matlock',
            'id' => '1',
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
