<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO-DO PROJECT</title>
    <meta name="description" content="TO-DO">
     <!-- FONT GOOGLE -->
     <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous" />
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Custom CSS Files -->
    <link rel="stylesheet" href="main.css">

</head>
<body>
   <div class="background">
       <div class="main">
           <section class="main">
               <h2 id="listed">My Todo-List (0/14)</h2>
               <p><i>Double-click on item to mark if complete.</i></p>
               <section class="operation">
                   
                    <input type="text" id="add-input">
                    <button type="button" id="add-btn">Add</button>
                    <label>Autosave <input type="checkbox" id="autosave"></label>
                   
            </section>

            <section id="to-do-section">
                
            </section>
               
           </section>
           <section class="buttom">
            <button type="button" id="clear-completed">Clear Completed</button>
            <button type="button" id="empty-list">Empty List</button>
            <button type="button" id="save-list">Save List</button>
           </section>
       </div>
    <div class="homebtn"></div>
   </div>

<script src="myApp.js"></script>
</body>
</html>
