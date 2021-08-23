<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index()
	{
        $data['tittle'] = 'Home';
        $data['subview'] = 'main/home.php';
		$this->load->view('_template.php',$data);
	}

}