<?
include("/home/hebergement/tcrouzet/share/filesmanag_inc.php");
include("/home/hebergement/tcrouzet/share/images_inc.php");

//Affiche les jpg d'un dossier
function matricePhoto($dirname,$col=3,$portraits='portraits_tc'){
//	$path="http://".$_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'];
	$domain="http://".$_SERVER['SERVER_NAME']."/";
	$m=0;
	$out="";
	$array=listDirPattern($dirname,"*.jpg");
	arsort($array);
	foreach($array as $value){
		$i=nameImageThumb("/",$value,150,113,"/thumb/","centre",$dirname);
		$out.="<a href=\"".$domain.$portraits."/".$value."\" target=\"_blank\"><img src=\"".$domain.$portraits."/".$i."\" style=\";height=119;width:150\" alt=\"$value\" /></a>";
		$m++;
		if(fmod($m,$col)==0) $out.="<br />";
	}
	return $out;
}

$portraits='portraits_tc';
if(isset($mode)){
	//Zoom
	echo("<a href=\"portraits_tc/$f\" target<img src=\"".$portraits."/$f\" />");
}else{
	echo(matricePhoto("/home/hebergement/tcrouzet/blog/".$portraits));
}
?>