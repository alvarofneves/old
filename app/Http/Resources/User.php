<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class User extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'type' => $this->type,
            'nif' => $this->nif,
            'active'=>$this->active
            /* 'wallet_id' => $this->wallet_id,
            'value' => $this->wallet->value, */
        ];
    }
}
