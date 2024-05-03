<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function gameBoard()
    {
        return Inertia::render('Game/GameBoard');
    }
}