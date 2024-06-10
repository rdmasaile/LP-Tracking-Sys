<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatemarkRequest extends FormRequest
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
            'StdId'=> 'required|exists:students,id',
            'CId'=> 'required|exists:courses,id',
            'Test'=> 'integer|min:0|max:100',
            'Assignment'=> 'integer|min:0|max:100',
            'Exam'=> 'integer|min:0|max:100',
        ];
    }
}
