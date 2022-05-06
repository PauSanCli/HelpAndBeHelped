<?php

namespace App\Models;

use App\Models\Usuarios;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Evento extends Model
{
    use HasFactory;

    protected $table = 'evento';


    public function organizador(){

        return $this->HasOne(Usuarios::class, 'id', 'organizador');

    }

}
