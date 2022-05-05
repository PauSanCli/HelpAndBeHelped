<?php

namespace App\Repositories;

use App\Models\Usuarios;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UsuariosRepository
{


    public static function getAll() 
    {
        return Usuarios::all();
    }

    public function getById($orderId) 
    {
        return Usuarios::findOrFail($orderId);
    }

    public function delete($orderId) 
    {
        Usuarios::destroy($orderId);
    }

    public function create(array $orderDetails) 
    {
        return Usuarios::create($orderDetails);
    }

    public function update($orderId, array $newDetails) 
    {
        return Usuarios::whereId($orderId)->update($newDetails);
    }

    public function getFulfilled() 
    {
        return Usuarios::where('is_fulfilled', true);
    }

    public function search($username){

        return Usuarios::where(['username' => $username])->limit(1)->get();

    }

}