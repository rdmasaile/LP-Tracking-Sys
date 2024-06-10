<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoremarkRequest extends FormRequest
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
            'StdId'=> 'required|string|exists:students,id',
            'CId'=> 'required|string|exists:courses,id',
            'Test'=> 'integer',
            'Assignment'=> 'integer',
            'Exam'=> 'integer',
        ];
    }
}
