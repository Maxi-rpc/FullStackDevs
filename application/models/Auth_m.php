<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth_m extends CI_Model {

    /* function __construct()
    {
        $this->load->database();
    } */
    
    public function login($email, $pass)
    {
        $test_email = 'admin@admin.com';
        $test_pass = 'password123';

        if($email == $test_email && $pass == $test_pass){
            return TRUE;
        } else {
            return FALSE;
        }
    }

}