<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    

    protected $UsuariosController;


    public function __construct(){

        $this->UsuariosController = new UsuariosController();

    }



    public function login(Request $request){

        $user = $this->getUsuariosController()->user($request->user);

        // $password = Hash::check($request->password, $user->password);

        if($request->password === $user->password){

            return true;

        }else{

            return false;

        }


        


    }






    /**
     * Get the value of UsuariosController
     */ 
    public function getUsuariosController()
    {
        return $this->UsuariosController;
    }

    /**
     * Set the value of UsuariosController
     *
     * @return  self
     */ 
    public function setUsuariosController($UsuariosController)
    {
        $this->UsuariosController = $UsuariosController;

        return $this;
    }
}