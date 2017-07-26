
<div class="container">
<div class="row">
    <div class="col-md-2">
        <img src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Pencil3.png" class="img-responsive center-block" alt="">
    </div>
    <div class="col-md-10">
        <h3>Attend New Assignments </h3>
        <hr>

        <table class="table table-striped">
            <thead class="thead-inverse">
            <tr>
                <th>Title</th>
                <th>Time (Days)</th>
                <th>Reqeust By</th>
                <th>Attending</th>
                <th>Start Writing</th>
            </tr>
            </thead>
            <tr ng-if="assignments.length" ng-repeat="item in assignments "> 
                <td>{{item.requirement.title}} </td>
                <td>{{item.requirement.time}}  </td>
                <td>{{item.created_for[0].username}}</td>
                <td>
                    <input type="checkbox" name="attending" ng-model="item.attending" ng-true-value="1" ng-false-value="0" ng-change="updateAssignment(item.attending)" ng-if="!item.completed">
                    <span ng-if="item.completed">Completed</span>
                </td>
                <td> 
                    <button ui-sref="user.new-assignment({id:item._id})" ng-if="!item.completed" class="btn btn-small btn-success" ng-disabled="!item.attending">Start</button>
                </td>
            </tr>
            <tr ng-if="!assignments.length">
                <td colspan="5" class="text text-center text-danger">No Assignment Found</td>
            </tr>
            
        </table>
        
        <hr>
    </div><!--.col -->
</div><!--./row -->
</div><!--./container -->