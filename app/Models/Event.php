<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public $timestamps = false;
    public $fillable = ['name','place','date'];
    protected $casts = [
        'date'  => 'date:Y-m-d'
    ];
}