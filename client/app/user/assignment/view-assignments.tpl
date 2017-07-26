
<div class="container">
<div class="row">
    <div class="col-md-2">
        <img src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Pencil3.png" class="img-responsive center-block" alt="">
    </div>
    <div class="col-md-10">
        <h3>Your Assignments </h3>
        <hr>

        <table class="table table-striped">
            <thead class="thead-inverse">
            <tr>
                <th>Title</th>
                <th>Time (Days)</th>
                <th>Attended By</th>
            </tr>
            </thead>
            <tr ng-if="assignments.length" ng-repeat="item in assignments "> 
                <td>{{item.requirement.title}} </td>
                <td>{{item.requirement.time}}  </td>
                <td>
                    <span ng-if="item.attended_by.length">
                        {{item.attended_by[0].username}} 
                        <i ng-if="item.completed">(Completed)</i>
                        <i ng-if="!item.completed">(In Progress)</i>
                    </span>
                    <span ng-if="!item.attended_by.length">- </span>
                </td>
                <td>
                    <form action="{{downloadUrl}}" method="post" target="new_popup" 
                    onsubmit="window.open('about:blank','new_popup','width=800,height=600');">
                        <input type="hidden" name="assignment_id" value="{{item._id}}">
                        <input type="submit"  ng-if="item.completed" value="Download">
                    </form>

                    <!-- <button ng-click="downloadPdf(item._id)">Download PDF</button> -->
                </td>
            </tr>
            <tr ng-if="!assignments.length">
                <td colspan="4" class="text text-center text-danger">No Assignment Found</td>
            </tr>
            
        </table>
        
        <hr>
    </div><!--.col -->
</div><!--./row -->
</div><!--./container -->