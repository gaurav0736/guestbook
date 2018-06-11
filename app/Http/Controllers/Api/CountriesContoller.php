<?php

namespace App\Http\Controllers\Api;
use App\countries;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CountriesContoller extends Controller
{
    //

    public function index(Request $request){
    	$countries = countries::query();
    	 if ($request->get('paginate') == 'false') {
            return response($countries->get());
        }
        return response($countries->paginate(10));

    }
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $country = countries::create([
            'name' => $request->name,
        ]);
        return response($country);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $country = countries::findOrFail($id);
        return response($country);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $country = countries::findOrFail($id);
        $country->update([
            'name' => $request->name,
        ]);
        return response($country);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // todo
    }
}
