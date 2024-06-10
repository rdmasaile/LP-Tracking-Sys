<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MarkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'StdId' => $this->StdId,
            'CId' => $this->CId,
            'Test' => $this->Test,
            'Assignments' => $this->Assignments,
            'Exam' => $this->Exam,
        ];
    }
}
