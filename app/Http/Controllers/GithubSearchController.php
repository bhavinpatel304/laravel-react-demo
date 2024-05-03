<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class GithubSearchController extends Controller
{
    public function index()
    {
        return Inertia::render('GithubSearch/Index');
    }
}