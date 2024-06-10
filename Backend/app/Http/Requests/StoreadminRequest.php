<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreadminRequest extends FormRequest
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
            'AdminNumber' =>'required|string|unique:admins,AdminNumber|unique:lecturers,LectEmail|unique:students,StdEmail',
            'AdminName' =>'required|string',
            'AdminEmail' =>'required|string|email|unique:admins,AdminEmail|unique:lecturers,LectEmail|unique:students,StdEmail',
            'AdminContacts' =>'string',
            'AdminDateOfBirth' =>'required|date',
            'AdminPassword' =>'required|string|min:8',
            'AdminCountry' =>'required|string',
            'AdminCity' =>'required|string',
            'AdminVillage' =>'required|string',
            'AdminZipCode' =>'required|string',
            'AdminSalary' =>'required|',
        ];
    }
}
