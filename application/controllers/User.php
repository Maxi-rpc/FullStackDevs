<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function index()
	{
        $data['tittle'] = 'Login';
        $data['subview'] = 'user/login.php';
		$this->load->view('user/_template_login.php',$data);
	}

    public function ajax_login()
    {
        $this->load->model('Auth_m');

        $email = $_POST['email'];
        $pass = $_POST['password'];

        $resultado = array();
        $url = 'home';

        if($this->Auth_m->login($email,$pass)){
            $resultado = array(
                'msj' => 'Login con éxito.',
                'code' => '1',
                'url' => $url
            );
        } else {
            $resultado = array(
                'msj' => 'Email y/o Password incorrectos.',
                'code' => '0',
                'url' => $url
            );
        }

        echo json_encode($resultado);
    }
}