<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    

    protected $UsuariosController;


    public function __construct(){

        $this->UsuariosController = new UsuariosController();

    }



    public function login(Request $request){
        
        $user = $this->getUsuariosController()->user($request->username);

        foreach($user as $usuario){

            if(Hash::check($request->password, $usuario->password)){

                Session::put('user', $usuario);
                return $usuario;
    
            }else{
    
                return false;
    
            }

        }



    }



    public function logout(){


        Session::forget('user');
        

    }



    public function registro(Request $request){


        $user = new Usuarios;
        $user->username = $request->username;
        $user->correo = $request->correo;
        $user->password = Hash::make($request->password);
        $user->rol = 'user';

        $user->save();


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