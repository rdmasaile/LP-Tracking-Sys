<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorelecturerRequest extends FormRequest
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
            'LectNumber' =>'required|string|unique:lecturers,LectNumber|unique:admins,AdminNumber|unique:students,StdEmail',
            'LectName' =>'required|string',
            'LectEmail' =>'required|string|email|unique:lecturers,LectEmail|unique:admins,AdminNumber|unique:students,StdEmail',
            'LectContacts' =>'string',
            'LectDateOfBirth' =>'required|date',
            'LectPassword' =>'required|string|min:8',
            'LectCountry' =>'required|string',
            'LectCity' =>'required|string',
            'LectVillage' =>'required|string',
            'LectZipCode' =>'required|string',
            'LectSalary' =>'required|',
        ];
    }
}
