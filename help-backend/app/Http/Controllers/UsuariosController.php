<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\UsuariosRepository;

class UsuariosController extends Controller
{
    

    protected $UsuariosRepo;


    public function __construct(){

        $this->UsuariosRepo = new UsuariosRepository;

    }




    public function user($username){

        dd($username);
        return $this->getUsuariosRepo()->search($username);


    }

    public function prueba(){

        return $this->getUsuariosRepo()->search('sanchez')[0];


    }
















    /**
     * Get the value of UsuariosRepo
     */ 
    public function getUsuariosRepo()
    {
        return $this->UsuariosRepo;
    }

    /**
     * Set the value of UsuariosRepo
     *
     * @return  self
     */ 
    public function setUsuariosRepo($UsuariosRepo)
    {
        $this->UsuariosRepo = $UsuariosRepo;

        return $this;
    }
}
