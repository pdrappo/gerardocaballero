<?php
/**
 * Autor: Pablo Mateo Drappo
 * Email: info@pablodrappo.com.ar
 */
$response = '{"eth":{"ip":[192,168,1,214],"snet":[255,255,255,0],"gway":[192,168,1,1],"http":80,"tcp":512,"speed":4,"dis":1000},"mb":{"est":1,"proto":0,"bdrt":0,"prty":0,"bstop":0}}';
if(isset($_GET['callback']))
	echo $_GET['callback'].'('.$response.')';
else
	echo $response;
