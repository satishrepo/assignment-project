<nav id="myNavbar" class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Tutorial Republic</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="nav navbar-nav" ng-if="user.type == 'writer'" style="width:70%">
                <li class="active"><a ui-sref="user.writer">Home</a></li>
                <li><a ui-sref="user.browse-assignments">View Assignments</a></li>                
                
                <li class="pull-right"><a>Welcomet {{user.username}}</a></li>
            </ul>

            <ul class="nav navbar-nav" ng-if="user.type == 'guest'">
                <li class="active"><a ui-sref="user.guest">Home</a></li>
                <li><a ui-sref="user.request-assignemnt">Request Assignments</a></li>                
                <li><a ui-sref="user.view-assignments">My Assignments</a></li>                
                <li class="pull-right"><a>Welcomet {{user.username}}</a></li>
            </ul>

            
        </div>
    </div>
</nav>
