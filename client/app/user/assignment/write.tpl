
<div class="container">
<div class="row">
    <div class="col-md-2">
        <img src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Pencil3.png" class="img-responsive center-block" alt="">
    </div>
    <div class="col-md-10">
        <h3>Write Assignment Here </h3>

        <form name="assignmentForm" ng-submit="saveAssignment(assignmentForm)" novalidate>

            <label for="txtComment">Title:</label>
            <input type="text" name="title" class="form-control" placeholder="Title" ng-model="assignment.title" required>
            <br>
            <p ng-messages="assignmentForm.title.$error">
                <span ng-message="required">Title is Required</span>
            </p>
            
            <hr>
            <p>
                Assingment Content : 
            </p>

            <textarea name="content" ng-model="assignment.content" class="form-control" rows="8" required></textarea>

            <br>

            <p ng-messages="assignmentForm.content.$error">
                <span ng-message="required">Content is Required</span>
            </p>

            <input type="checkbox" name="completed" ng-model="assignment.completed" ng-true-value="true" ng-false-value="false">

            <hr>
            
            <input type="submit" class="btn btn-success" name="submit" value="Submit">
           
        </form>
        
        <hr>
    </div><!--.col -->
</div><!--./row -->
</div><!--./container -->