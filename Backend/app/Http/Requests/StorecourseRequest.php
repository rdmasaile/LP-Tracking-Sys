<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorecourseRequest extends FormRequest
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
            'CCode' => 'required|string|unique:courses,CCode',
            'CName' => 'required|string|unique:courses,CName',
            'CMin' => 'required|',
            'CMax' => 'required|',
        ];
    }
}
