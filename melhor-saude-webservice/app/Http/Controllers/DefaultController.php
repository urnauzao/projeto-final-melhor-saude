<?php

namespace App\Http\Controllers;

use App\Models\Clinica;
use Illuminate\Http\Request;

class DefaultController extends Controller
{

    public function teste(){
        $clinica = new Clinica();
        $clinica->titulo = "Tester";
        $clinica->url_imagem = "http://google.com.br";
        $clinica->url = "https//teste.com.br";
        $clinica->descricao = "descricao pra valer";
        $clinica->local_resumido = "brasileirissimo";
        $clinica->endereco = "rua da silva";
        $clinica->num_endereco = "122";
        $clinica->complemento = "sampapaio";
        $clinica->cep = "83399923";
        $clinica->cidade = "São Paulo";
        $clinica->bairro = "Morumbi";
        $clinica->estado = "SP";
        $clinica->pais = "Brasil";
        $clinica->rating = 54;
        $clinica->save();



        $clinicas = Clinica::all();






        return response()->json(['clinicas' => $clinicas]);



    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clinicas = Clinica::all();
        return response()->json(['clinicas' => $clinicas]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try {
            $object = $request->all();
            if(empty($object->nome))
                return response()->json(['erro' => "nome Inválido"]);

            if(Clinica::where([ 'nome' => $object->nome ])->get())
                return response()->json(['erro' => "Nome da clinica já existe!"]);

            $clinica = new Clinica();
            $clinica->nome = $object->nome;
            $clinica->url_imagem = $object->url_imagem;
            $clinica->url = $object->url;
            $clinica->descricao = $object->descricao;
            $clinica->local_resumido = $object->local_resumido;
            $clinica->endereco = $object->endereco;
            $clinica->num_endereco = $object->num_endereco;
            $clinica->complemento = $object->complemento;
            $clinica->cep = $object->cep;
            $clinica->cidade = $object->cidade;
            $clinica->bairro = $object->bairro;
            $clinica->estado = $object->estado;
            $clinica->pais = $object->pais;
            $clinica->rating = $object->rating;
            $clinica->save();

            $clinicas = Clinica::all();
            return response()->json(['clinicas' => $clinicas]);
        } catch (\Throwable $th) {
            return response()->json(['erro' => $th]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
