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

        $evento->nombre = $request->form['titulo'];
        $evento->descripcion = $request->form['descripcion'];
        $evento->fecha = Carbon::now();
        $evento->tipo = $request->form['tipo'];
        $evento->organizador = $request->form['creador'];
        $evento->creacion = Carbon::now();
        $evento->localizacion = $request->form['ubicacion'];
        

        if($request->form['tipo'] == 'Naturaleza'){

            $evento->imagen = '../../../assets/Imagenes/Naturaleza.jpg';

        }else if($request->form['tipo'] == 'Caridad'){

            $evento->imagen = '../../../assets/Imagenes/Otros.jpg';

        }else if($request->form['tipo'] == 'Animales'){

            $evento->imagen = '../../../assets/Imagenes/Animales.jpg';

        }else if($request->form['tipo'] == 'Limpieza'){

            $evento->imagen = '../../../assets/Imagenes/Limpieza.jpg';

        }else{

            $evento->imagen = '../../../assets/Imagenes/Caridad.jpg';

        }


        $evento->save();

        return true;



    }

    public function searchEvent(Request $request){

        if($request->tipo == 'Novedades'){

            return $this->getEventos();

        }else{

            return $this->getEventoRepository()->searchBy($request->tipo);

        }


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
