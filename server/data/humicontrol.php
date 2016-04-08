<?php
/**
 * Autor: Pablo Mateo Drappo
 * Email: info@pablodrappo.com.ar
 */
$response = '{"hum":609,"temp":419,"sens":0,"modo":1,"tiempo":1,"prod":0,"ganp":[547,547,547,457],"tempp":[300,300,300,300],"gant":[210,210,210,210],"bias":[860,860,860,860]}';
if(isset($_GET['callback']))
	echo $_GET['callback'].'('.$response.')';
else
	echo $response;
