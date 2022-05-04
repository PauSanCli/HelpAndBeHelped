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


        if(Hash::check($request->password, $user->password)){

            $this->createSession($user);
            return true;

        }else{

            return false;

        }


    }


    public function logout(){


        Session::forget('user');
        

    }



    public function register(Request $request){


        $user = new Usuarios;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);

        $user->save();


    }


    public function createSesion(Usuarios $user){

        Session::put('user', $user);


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