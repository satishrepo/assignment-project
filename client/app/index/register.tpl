<ng-include src="'app/index/template/header.tpl'"></ng-include>




<div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a ui-sref="login" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a ui-sref="signin" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								
								<form name="regForm" ng-submit="registerMe(regForm)" novalidate >
									<div class="form-group">
										<input type="text" name="username" class="form-control" placeholder="Username" ng-model="user.username" required>
									</div>
									<p ng-messages="regForm.username.$error">
										<small ng-message="required"> Username is Required </small>	
									</p>
									
									<div class="form-group">
										<input type="password" name="password"  class="form-control" placeholder="Password" ng-model="user.password" required>
									</div>
									<p ng-messages="regForm.password.$error">
										<small ng-message="required"> Password is Required </small>	
									</p>
									<div class="form-group">
										<select name="type" ng-model="user.type" required>
											<option value="">Please select an option</option>
											<option value="guest">I want you to writge assigment for me</option>
											<option value="writer">I am a writer and want to write assignment</option>
										</select>
									</div>

									<p ng-messages="regForm.type.$error">
										<small ng-message="required"> Please select an option </small>	
									</p>

									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" class="form-control btn btn-register" value="Register Now">
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>




<ng-include src="'app/index/template/footer.tpl'"></ng-include>