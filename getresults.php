<?

include("connection.php");



$sql = "SELECT d.Id, d.OrderId, d.Name, dt.Description as DoorType, ct.Description as CollectionType, gt.Description as GlassType, ft.Description as FinishType, st.Description as SpecieType, dst.Description as DistressType, d.ImageName, d.WixLink ";

$sql .= "FROM Doors AS d INNER JOIN DoorTypes AS dt ON d.DoorTypeId = dt.Id ";

$sql .= "INNER JOIN CollectionTypes AS ct ON d.CollectionTypeId = ct.Id ";

$sql .= "INNER JOIN GlassTypes AS gt ON d.GlassTypeId = gt.Id ";

$sql .= "INNER JOIN FinishTypes AS ft ON d.FinishTypeId = ft.Id ";

$sql .= "INNER JOIN SpecieTypes AS st ON d.SpecieTypeId = st.Id ";

$sql .= "INNER JOIN DistressTypes AS dst ON d.DistressTypeId = dst.Id ";

$sql .= "INNER JOIN VeneerTypes AS vt ON d.VeneerTypeId = vt.Id ";

$sql .= "INNER JOIN CarvingTypes AS cvt ON d.CarvingTypeId = cvt.Id ";

$sql .= "INNER JOIN KindTypes AS kt ON d.KindTypeId = kt.Id ";

$sql .= "WHERE d.Visible=1";



if(isset($_GET["dt"])){

	if($_GET["dt"]!="")

	{

		$sql .= " AND dt.Id=".$_GET["dt"];

	}

}

if($_GET["ct"]!=""){

	$sql .= " AND ct.Id=".$_GET["ct"];

}

if($_GET["st"]!=""){

	$sql .= " AND st.Id=".$_GET["st"];

}

if($_GET["ft"]!=""){

	$sql .= " AND ft.Id=".$_GET["ft"];

}

if($_GET["gt"]!=""){

	$sql .= " AND gt.Id=".$_GET["gt"];

}

if($_GET["dst"]!=""){

	$sql .= " AND dst.Id=".$_GET["dst"];

}

if($_GET["vt"]!=""){

	$sql .= " AND vt.Id=".$_GET["vt"];

}

if($_GET["cvt"]!=""){

	$sql .= " AND cvt.Id=".$_GET["cvt"];

}

if($_GET["kt"]!=""){

	$sql .= " AND kt.Id=".$_GET["kt"];

}

if($_GET["on"]!=""){

	$sql .= " AND (CONCAT(d.OrderId, d.Name) LIKE '%".$_GET["on"]."%' OR CONCAT(',',Notes,',') LIKE '%,".$_GET["on"].",%')";

}



$sql .= " Order By d.OrderId, d.Name LIMIT 0,5000";



?>

<img src='images/text.png' /><br />

<?



if ($result = mysqli_query($link, $sql)) {

	

	echo "<table id='tblResults' width='760'>";

	$text="";



	while ($row = mysqli_fetch_assoc($result)) {

		$text.= "<tr><td align='center'><a href='".$row["WixLink"]."' target='_parent'><img src='/images/doors/".$row["ImageName"]."' /></a></td><td><a href='".$row["WixLink"]."' target='_parent'><span class='text'>".$row["OrderId"].$row["Name"]."<span></a></td></tr>";			

	}

	

	mysqli_free_result($result);

	$text.="</table>";

	echo $text;

}

else{

	echo "<center><b class='text'>No results were found.</p></center>";

}

// close connection

mysqli_close($link);



?>