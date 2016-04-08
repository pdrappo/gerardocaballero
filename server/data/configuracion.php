<?php
/**
 * Autor: Pablo Mateo Drappo
 * Email: info@pablodrappo.com.ar
 */
$response = '{"pid":{"version":0,"ope":2,"sc":1,"jpar":{"sp":[2000,1800,1900],"prop":[500,0,100],"int":[0,0,0],"der":[0,0,0]},"hist":0,"gan":0,"bias":0,"ciclo":0,"outin":0,"outhigh":1000,"outlow":0,"outerror":0,"paract":1,"acccontrl":0,"arr":1,"spop":1,"tecla":0,"cicloterm":{"rep":1,"seglink":1}},"seg":{"cant":5,"sp":[0,0,0,0,0,0,0,0,0],"tiempo":[0,0,0,0,0,0,0,0,0],"juego":[1,1,1,1,1,1,1,1,1]},"alarm":{"fu":[5,5,1,2,1,0,0,0,0],"set":[1200,800,500,0,10,0,0,0,0],"tipo":[1,0,0,0,0,0,0,0,0],"rel":[0,0,0,0,0,0,0,0,0],"hist":[8,8,0,0,0,0,0,0,0],"saldig":[1,2,0,0,0,0,0,0,0],"est":[0,0,0,0,0,0,0,0,0],"ret":[0,0,0,0,0,0,0,0,0],"acccontrl":[0,0,0,0,0,0,0,0,0],"valcontrl":[0,0,0,0,0,0,0,0,0]},"ana":{"in":{"tipo":[5,0,1],"high":[6500,5000,1000],"low":[-999,0,0],"pd":[1,3,1],"filtro":[0,0,0],"bias":[0,0,0],"outa":[1,1,1]},"out":{"tipo":[1,1],"func":[0,5]}},"dig":{"in":[1,2,3],"out":[3,3,3]}}';
if(isset($_GET['callback']))
	echo $_GET['callback'].'('.$response.')';
else
	echo $response;
