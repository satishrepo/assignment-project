
<div class="container">
<div class="row">
    <div class="col-md-2">
        <img src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Pencil3.png" class="img-responsive center-block" alt="">
    </div>
    <div class="col-md-10">
        <h3>Request Assignment Here </h3>
        <hr>

        <form name="reqForm" ng-submit="submitRequest(reqForm)" novalidate>

            <label for="txtComment">Title:</label>
            <input type="text" name="title" class="form-control" placeholder="Title" ng-model="request.title" required>
            <br>
            <p ng-messages="reqForm.title.$error">
                <span ng-message="required">Title is Required</span>
            </p>
            
            
            <p>
                Assingment Brief Description : 
            </p>

            <textarea name="description" ng-model="request.description" class="form-control" rows="8" required></textarea>

            <br>

            <p ng-messages="reqForm.description.$error">
                <span ng-message="required">Description is Required</span>
            </p>


            <label for="duration">Expected Time(in days):</label>
            <input type="number" name="duration" class="form-control" placeholder="Time" ng-model="request.duration" >
            <br>
            

            <hr>
            
            <input type="submit" class="btn btn-success" name="submit" value="Submit" ng-disabled="request.submitted">
           
        </form>
        
        <hr>
    </div><!--.col -->
</div><!--./row -->
</div><!--./container -->