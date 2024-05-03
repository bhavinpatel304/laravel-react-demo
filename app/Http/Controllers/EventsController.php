<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EventsController extends Controller
{
    public function show()
    {
        $events = Event::skip(0)->take(env("PER_PAGE_ROWS"))->get();
        return Inertia::render('Event/Show',[
            'events' => $events
        ]);
    }

    public function list(Request $request,$pageNo)
    {
        $perPage = env("PER_PAGE_ROWS");
        $events = Event::skip($perPage*($pageNo-1))->take($perPage)->get();
        return $events;
    }

    public function edit(Request $request,$id)
    {
        $event = Event::find($id);
        return Inertia::render('Event/Edit',[
            'event' => $event
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:20',
            'place' => 'required|max:20',
            'date' => 'required|date_format:Y-m-d',
        ]);

        $event = Event::find($request->id);
        $event->name = $request->name;
        $event->place = $request->place;
        $event->date = $request->date;
 
        $event->save();

        return redirect()->route('events.show')
        ->with('success', 'Record updated successfully!');
    }

    public function add(Request $request)
    {
        return Inertia::render('Event/Add');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:20',
            'place' => 'required|max:20',
            'date' => 'required|date_format:Y-m-d',
        ]);
        $event = Event::create([
            'name' => $request->name,
            'place' =>  $request->place,
            'date' => $request->date,
        ]);
        
        return redirect()->route('events.show')
        ->with('success', 'Record added successfully!');
    }
}