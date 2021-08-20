<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function index()
	{
        $data['tittle'] = 'Login';
        $data['subview'] = 'user/login.php';
		$this->load->view('user/_template_login.php',$data);
	}

    public function ajax_login(){
        $email = $_POST['email'];
        $pass = $_POST['password'];

        $resultado = array();

        $resultado = 'Ajax respuesta';

        echo json_encode($resultado);
    }
}