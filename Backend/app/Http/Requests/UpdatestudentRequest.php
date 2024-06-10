<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatestudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'StdNumber' =>'required|string',
            'StdName' =>'string',
            'StdEmail' =>'string|email',
            'StdContacts' =>'string',
            'StdDateOfBirth' =>'required|date',
            'StdPassword' =>'string|min:8',
            'StdCountry' =>'required|string',
            'StdCity' =>'string',
            'StdVillage' =>'string',
            'StdZipCode' =>'string',
            'State' =>'string',
        ];
    }
}
