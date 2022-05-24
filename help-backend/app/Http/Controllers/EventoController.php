<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use App\Models\Evento;
use App\Repositories\EventoRepository;

class EventoController extends Controller
{
    

    protected $EventoRepository;

    public function __construct(){

        $this->EventoRepository = new EventoRepository();

    }


    public function newEvento(Request $request){


        $evento = new Evento;


        $evento->nombre = $request->titulo;
        $evento->descripcion = $request->descripcion;
        $evento->fecha = Carbon::now();
        $evento->tipo = $request->tipo;
        $evento->organizador = $request->organizador;
        $evento->creacion = Carbon::now();
        
        if($request->hasFile('imagen')){

            $imagen = $request->file('imagen');
            $imagen_name = $imagen->getClientOriginalName();
            $imagen->move(public_path('../../help-frontend/help-frontend/src/assets/imagenes'), $imagen_name);

            $evento->imagen = '../../../assets/Imagenes/'.$imagen_name;


        }else{

            $evento->imagen = NULL;

        }

        $evento->save();

        return true;



    }


    public function getEventos(){

        return $this->getEventoRepository()->getAll();

    }

    public function updateEvento(Request $request){



    }

    public function infoEvento($id){

        return $this->getEventoRepository()->getById($id);

    }

    /**
     * Get the value of EventoRepository
     */ 
    public function getEventoRepository()
    {
        return $this->EventoRepository;
    }

    /**
     * Set the value of EventoRepository
     *
     * @return  self
     */ 
    public function setEventoRepository($EventoRepository)
    {
        $this->EventoRepository = $EventoRepository;

        return $this;
    }
}
