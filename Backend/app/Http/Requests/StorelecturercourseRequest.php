<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorelecturercourseRequest extends FormRequest
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
            'LectId'=>'required|string|exists:lecturers,id',
            'CId'=>'required|string|exists:courses,id',
        ];
    }
}
