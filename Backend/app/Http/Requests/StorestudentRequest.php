<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorestudentRequest extends FormRequest
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
            'StdNumber' =>'required|string|unique:students,StdNumber|unique:admins,AdminNumber|unique:lecturers,LectEmail',
            'StdName' =>'required|string',
            'StdEmail' =>'required|string|email|unique:students,StdEmail|unique:admins,AdminNumber|unique:lecturers,LectEmail',
            'StdContacts' =>'string',
            'StdDateOfBirth' =>'required|date',
            'StdPassword' =>'required|string|min:8',
            'StdCountry' =>'required|string',
            'StdCity' =>'required|string',
            'StdVillage' =>'required|string',
            'StdZipCode' =>'required|string',
        ];
    }
}
