<?php
	require_once "functions.php";
	$conn = connection();
	
	if (isset($_POST['submit'])) {
		$task = sanitizeInput($_POST['task']);
		$date = sanitizeInput($_POST['date']);
		$time_start = sanitizeInput($_POST['time_start']);
		$time_end = sanitizeInput($_POST['time_end']);
		$remark = sanitizeInput($_POST['remark']);

		$insert = "INSERT INTO list(task, date, time_start, time_end, remark) VALUES ('$task', '$date', '$time_start', '$time_end', '$remark')";
		if (mysqli_query($conn, $insert)) {
			echo '<script>alert("You have added a new task.");</script>';
		}
		else {
			echo mysqli_error($conn); //'<script>alert("Sorry, your task was not added. Please try again.");</script>';
		}
	}

	if (isset($_POST['submit_edit'])) {
	    $id = $_POST['id_edit'];
	    //echo $id;
	    $task = sanitizeInput($_POST['task']);
	    $date = sanitizeInput($_POST['date']);
	    $time_start = sanitizeInput($_POST['time_start']);
	    $time_end = sanitizeInput($_POST['time_end']);
	    $remark = sanitizeInput($_POST['remark']);
	    
	    $edit = "UPDATE list SET task='$task', date='$date', time_start='$time_start', time_end='$time_end', remark='$remark' WHERE id='$id'";

	    if (mysqli_query($conn, $edit)) {
	        echo '<script>alert("Task edited successfully.")</script>';
	    }
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>My To-Do List</title>
	<link rel="stylesheet" type="text/css" href="../../../dist/css/bootstrap.min.css">
	<style>
		html {
			background: url("3.jpg");
			background-size: 2000px auto;
		}
		table {
			border: 1px solid #ccc;
			border-radius: 5px 0px 5px 0px;
		}
		th, td {
			text-align: center;
		}
		h1,h2,h3 {
			text-align: center;
			font-weight: bold;
			color: white;
		}
		.center {
			text-align: center;
		}
		.box {
			border: 1px solid #ccc;
			border-radius: 5px 0px 5px 0px;
			padding: 10px;
			margin: auto;
		}
		#header {
			padding: 0px;
		}
		#container2 {
			position: relative;
			left: 0px;
			margin: 15px auto;
			padding: 10px;
			height: auto;
			width: 70%;
			border: 1px solid #ccc;
			border-radius: 10px;
		}
		.btn-primary {
			width: 15%;
		}
		legend {
			color: #337ab7;
			font-size: 18px;
		}
		fieldset h4 {
			color: #888;
		}
		fieldset span {
			color: red;
			text-align: right;
			font-size: 11px;
		}
	</style>
</head>
<body class="container" id="container2">
	<div class="panel panel-primary" style="background-color: #337ab7;" >
	<h3 class="panel-body" id="header">Hy, Welcome to your To-Do List Page.</h3>
	</div>
	<form method="POST" class="form" onsubmit="validateForm()">
		<fieldset class="box">
			<legend>You can add a new task here</legend>
			<div class="form-group">
			<label>Task Name </label><span><i>     (Required)</i></span>
			<input type="text" name="task" id="task" placeholder="Task Name" class="form-control" required> <br>
			</div>
			<div class="form-group">
			<label>Scheduled Date </label><span><i>     (Required)</i></span>
			<?php echo '<input type="Date" name="date" id="date" class="form-control" maxlength="10" min="' . date("m-d-Y") . '" required> <br>'; ?>
			</div>
			<div class="form-group">
			<label>Start Time </label><span><i>     (Required)</i></span>
			<input type="Time" name="time_start" id="time" maxlength="8" class="form-control" required> <br>
			</div>
			
			<div class="form-group">
			<label>End Time </label>
			<input type="Time" name="time_end" id="time" maxlength="8" class="form-control"> <br>
			</div>

			<textarea name="remark" placeholder="More information about this task ..?" class="form-control"></textarea><br><br>
			<button type="submit" name="submit" class="form-control btn btn-primary">Add Task</button><br>
		</fieldset>		
	</form> <br><br>

	<fieldset class="box">
		<?php
			$select = "SELECT * FROM list";
			$result = mysqli_query($conn, $select);			
			$count = mysqli_num_rows($result);
			if ($count < 1){
				echo '<legend>You have not added any tasks yet.</legend>
					  <b><i><h4 class="center">Your tasks show up here ..</h4></i></b>';
			}
			else {
				if ($count == 1){
				 echo '<legend>You have added ' . $count . ' task</legend>';
				}
				else {
				 echo '<legend>You have added ' . $count . ' tasks</legend>';
				}
		?>
		<table class="table table-striped table-hover">
          <tr>
            <th>S/N</th>
            <th>Task</th>
            <th>Date</th>
            <th>Time</th>
            <th>Remark</th>
            <th>Added On</th>
            <th colspan="2">Actions</th>
          </tr>
		<?php
			$serial = 1;
			while($row = mysqli_fetch_assoc($result)) {
				$id = $row["id"]; ?>
    			<tr>
    			<td><?php echo $serial ; $serial++;?></td>
    			<td><?php echo $row["task"] ;?></td>
    			<td><?php echo $row["date"] ;?></td>
    			<td><?php echo $row["time_start"] ;?> - <?php echo $row["time_end"] ;?></td>
    			<td><?php echo $row["remark"] ;?></td>
    			<td><?php echo $row["created_on"] ;?></td>
    			<?php echo '<td><button type="button" data-toggle="modal" href="edit_task.php?task_id='. $row["id"] . '" data-target="#edit_task" class="btn btn-success">Edit</button></td>' ;?>

    			<form method="POST" action="delete_task.php" onsubmit='return confirm("Delete this task like seriously?")'>
    			<?php echo '<input type="hidden" name="id" value="' . $row["id"] . '">';?>
    			<td><button class="btn btn-danger" type="submit" name="delete">Delete</button></td>
    			</form>
    			</tr>    		
    		<?php
    		}
    		}
		?>
		</table>
	</fieldset>
	<br>
		<?php echo '<p class="center"><strong>Ayodele Noutouglo</strong><br>Copyright &copy; ' . date("Y") . '.</p>'; ?>

	<!-- Edit Modal -->
	<div class="modal fade" id="edit_task" tabindex="-1" role="dialog">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	  </div>
	 </div>
	</div>
</body>
	<!--<script src="script.js"></script>-->
	<script src="../../../dist/js/jquery.min.js"></script>
	<script src="../../../dist/js/bootstrap.min.js"></script>
</html>