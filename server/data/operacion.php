<?php
/**
 * Autor: Pablo Mateo Drappo
 * Email: info@pablodrappo.com.ar
 */
$response = '{"ctrl":{"vp":425,"spa":2000,"sc":{"val":281,"auto":1}},"van":{"ea2":55,"ea3":-32768,"jf":315},"io":{"in":[0,0,0],"out":[0,1,0],"ciclo":{"estado":0,"sa":1,"ttsa":0},"alm":[0,1,1,1,0,0,0,0,0]}}';
if(isset($_GET['callback']))
	echo $_GET['callback'].'('.$response.')';
else
	echo $response;
