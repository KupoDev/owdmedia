<html>
<head>
        <p class="padding"><center> 
          <a href="index.html"><img src="test/OWD-Logo-installed.png" alt="Old World Door" width="1028" height="215"></a> </center>
        </p>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<style>
	body
	{
	       font-family: Arial, Geneva, sans-serif;
	       font-size: 20px;
	       color: #626262;
	       margin: 0;
	       padding: 0px 50px;
	       background: url("test/background.png");
               background-repeat:no-repeat;
               background-size:cover;
               background-attachment:fixed;     
	}
     

	.text
	{
		color: #bd7821;
                text-align:justify
        }
        .text1
	{
		color: #fff;
                text-align:justify
        }
        .center 
        {
                margin: auto;
                width: 70%;
	}
        td
	{
		height:35px;
	}
	#tblResults td
	{
		vertical-align: bottom;
	}
	img
	{
		border-style: none;
	}
	#divContent
	{
		width:768px;
		margin:0 auto;
	}
        p.padding 
        {
               
                padding: 10px 50px;
        }
        p.padding1 
        {
               
                padding: 10px 0px;
        }
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: none;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		color: black;
		text-align: center;
		padding: 14px 250px;
		text-decoration: none;
	}
	</style>
	<script type="text/javascript">
		function Search(pindex){
			document.getElementById("divResults").innerHTML="";
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					document.getElementById("divResults").innerHTML=xmlhttp.responseText;
				}
			}
			var von = $('#txtOrderNumber').val();
			var vdt = $('#cboDoorTypes').val();
			var vct = $('#cboCollectionTypes').val();
			var vst = $('#cboSpecieTypes').val();
			var vft = $('#cboFinishTypes').val();
			var vgt = $('#cboGlassTypes').val();
			var vdst = $('#cboDistressTypes').val();
			var vvt = $('#cboVeneerTypes').val();
			var vcvt = $('#cboCarvingTypes').val();
			var vkt = $('#cboKindTypes').val();
			xmlhttp.open("GET","getresults.php?on="+von+"&dt="+vdt+"&ct="+vct+"&st="+vst+"&ft="+vft+"&gt="+vgt+"&dst="+vdst+"&vt="+vvt+"&cvt="+vcvt+"&kt="+vkt,true);
			xmlhttp.send();			
		}
	</script>
</head>
<body>
	<div id="divContent">
	<?php
	include("connection.php");
	$sqlArray = array(
	array('DoorTypes',''),
	array('CollectionTypes',''),
	array('FinishTypes',''),
	array('GlassTypes',''),
	array('SpecieTypes',''),
	array('DistressTypes',''),
	array('VeneerTypes',''),
	array('CarvingTypes',''),
	array('KindTypes','')
	);
	foreach($sqlArray as $s){
		$sqlArr = "SELECT Id, Description FROM ".$s[0]." limit 0,50";
		if ($result = mysqli_query($link, $sqlArr)) {
			$sqlArray[$s[0]]="<select id='cbo".$s[0]."' name='cbo".$s[0]."'><option value=''>[ALL]</option>";
			while ($row = mysqli_fetch_assoc($result)) {
				$sqlArray[$s[0]].="<option value='".$row["Id"]."'>".$row["Description"]."</option>";
			}
			$sqlArray[$s[0]].="</select>";
			mysqli_free_result($result);
		}
	}
	?>
	<p class="text">Be sure to ONLY have the desired fields with a search requirement. Non-existent combinations will produce no results. When searching by work order name or number, leave all other fields blank to produce results.</p>
	<form id="searchForm">
		<table>
			<tr>
				<td><span class="text1">Order/Catalog number:</span></td>
				<td><input type="text1" id="txtOrderNumber" name="txtOrderNumber" width="250" maxlength="30" /></td>
				<td><span class="text1">Interior/Exterior/<br />Wine Cellar Type:<span></td>
				<td><? echo $sqlArray['KindTypes']; ?></td>
			</tr>
			<tr>
				<td><span class="text1">Door Type:<span></td>
				<td><? echo $sqlArray['DoorTypes']; ?></td>
				<td><span class="text1">Collection Type:<span></td>
				<td><? echo $sqlArray['CollectionTypes']; ?></td>
			</tr>
			<tr>
				<td><span class="text1">Species Type:<span></td>
				<td><? echo $sqlArray['SpecieTypes']; ?></td>
				<td><span class="text1">Finish Type:<span></td>
				<td><? echo $sqlArray['FinishTypes']; ?></td>
			</tr>
			<tr>
				<td><span class="text1">Glass Type:<span></td>
				<td><? echo $sqlArray['GlassTypes']; ?></td>
				<td><span class="text1">Distress Type:<span></td>
				<td><? echo $sqlArray['DistressTypes']; ?></td>
			</tr>
			<tr>
				<td><span class="text1">Contemporary<br />Veneer Assembly:<span></td>
				<td><? echo $sqlArray['VeneerTypes']; ?></td>
				<td><span class="text1">Carving Type:<span></td>
				<td><? echo $sqlArray['CarvingTypes']; ?></td>
			</tr>
		</table>
		<ul>
		<li>
			<p class="padding1">
			<input type="image" src="test/search.png" alt="Submit" onClick="Search(1);return false"/>
			</p>
		</li>
		<li>
			<a href="http://owdmedia.com/carved-doors.html">
			<img src="test/carvings.png" alt="carvings" width="140" height="56" border="0" /></a>
		</li>
	</form>
	<div id="divResults">
	</div>
</body> 