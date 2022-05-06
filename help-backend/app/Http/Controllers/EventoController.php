<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EventoRepository;

class EventoController extends Controller
{
    

    protected $EventoRepository;

    public function __construct(){

        $this->EventoRepository = new EventoRepository();

    }


    public function newEvento(Request $request){


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
