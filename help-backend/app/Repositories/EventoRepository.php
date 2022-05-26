<?php

namespace App\Repositories;

use App\Models\Evento;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class EventoRepository
{


    public static function getAll() 
    {
        return Evento::all();
    }

    public function getById($orderId) 
    {
        return Evento::findOrFail($orderId);
    }

    public function delete($orderId) 
    {
        Evento::destroy($orderId);
    }

    public function create(array $orderDetails) 
    {
        return Evento::create($orderDetails);
    }

    public function update($orderId, array $newDetails) 
    {
        return Evento::whereId($orderId)->update($newDetails);
    }

    public function getFulfilled() 
    {
        return Evento::where('is_fulfilled', true);
    }

    public function searchBy($filter){

        return Evento::where('tipo', $filter)->get();

    }

}