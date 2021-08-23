<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_m extends CI_Model {

    protected $_table_name = '';
    
    public function get_new()
    {
        $user = new stdClass(); // clase nueva
        $user->email = '';
        $user->password = '';
        $user->estado = 0; // activo o inactivo
        $user->perfil = 0; // tipo de perfil
        $user->is_logged = 0; // verifica si esta logeado
    }

}