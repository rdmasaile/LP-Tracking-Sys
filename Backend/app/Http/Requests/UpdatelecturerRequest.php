<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatelecturerRequest extends FormRequest
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
            'LectNumber' =>'string',
            'LectName' =>'string',
            'LectEmail' =>'string|email',
            'LectContacts' =>'string',
            'LectDateOfBirth' =>'date',
            'LectPassword' =>'string|min:8',
            'LectCountry' =>'string',
            'LectCity' =>'string',
            'LectVillage' =>'string',
            'LectZipCode' =>'string',
            'LectSalary' =>'numeric',
            'State' => 'String',
        ];
    }
}
