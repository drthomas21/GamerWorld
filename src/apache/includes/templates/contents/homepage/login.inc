<?php if(!$isView):?><section ng-controller="LoginController"><?php endif; ?>
<div class="col-lg-12 text-center">
	<div class="col-lg-<?= ($isView ? 12 : 6); ?> center-block" style="float: none">
		<form class="inline-form center-block col-xs-6" style="max-width: 400px">
			<h2>Log In</h2>
			&nbsp;<small ng-show="loginModel.respError.length > 0" class="text-danger">{{loginModel.respError.join('. ')}}</small>
			<div class="form-group col-lg-12" ng-class="{'has-error': loginModel.errors.email,'has-success': !loginModel.errors.email}">
				<label for="login" ng-hide="loginModel.errors.email.length > 0">Email: </label>
				<p ng-show="loginModel.errors.email.length > 0">{loginModel.errors.email}</p>
				<input type="email" class="form-control" id="login" name="login" ng-model="loginModel.email.text" ng-change="doLogin()" required/>
			</div>
			<div class="form-group col-lg-12" ng-class="{'has-error': loginModel.errors.password,'has-success': !loginModel.errors.password}">
				<label for="password">Password:</label>
				<input type="password" class="form-control" id="password" name="password" ng-model="loginModel.password.text" ng-change="doLogin()" required/>
			</div>
			<div class="form-group">
				<button class="btn btn-primary" ng-click="doLogin(true)">Log In</button>
			</div>
		</form>
		<form class="inline-form center-block col-xs-6" style="max-width: 400px">
			<h2>Sign Up</h2>
			&nbsp;<small ng-show="signupModel.respError.length > 0" class="text-danger">{{signupModel.respError.join('. ')}}</small>
			<div class="form-group col-lg-12" ng-class="{'has-error': signupModel.errors.email,'has-success': !signupModel.errors.email}">
				<label for="login">Email: </label>
				<input type="email" class="form-control" id="login" name="login" ng-model="signupModel.email.text" ng-change="doSignup()" required/>
			</div>
			<div class="form-group col-lg-6" ng-class="{'has-error': signupModel.errors.password,'has-success': !signupModel.errors.password}">
				<label for="password">Password: <br /><small>(min length: {{signupModel.password.minLength}})</small></label>
				<input type="password" class="form-control" id="password" name="password" ng-minlength="signupModel.password.minLength" ng-model="signupModel.password.text" ng-change="doSignup()" required/>
			</div>
			<div class="form-group col-lg-6" ng-class="{'has-error': signupModel.errors.repeatPassword,'has-success': !signupModel.errors.repeatPassword}">
				<label for="repeatPassword">Password Again: <br />&nbsp;<small ng-show="signupModel.password.text != signupModel.repeatPassword.text" class="text-danger">Not the same password</small></label>
				<input type="password" class="form-control" id="repeatPassword" name="repeatPassword" ng-model="signupModel.repeatPassword.text" ng-pattern="signupModel.password.text" ng-change="doSignup()" required/>
			</div>
			<div class="form-group">
				<button class="btn btn-primary" ng-click="doSignup(true)">Sign Up</button>
			</div>
		</form>
	</div>
</div>
<div class="col-lg-12 text-center">
	<div class="col-lg-6 center-block" style="float:none"><hr style="border-color: #ccc"/></div>
</div>
<div class="col-lg-12 text-center">
	<button class="btn social-icons twitter" ng-click="doSocial('twitter')"></button>
	<button class="btn social-icons facebook" ng-click="doSocial('facebook')"></button>
	<button class="btn social-icons google" ng-click="doSocial('google')"></button>
	<button class="btn social-icons steam" ng-click="doSocial('steam')"></button>
	<button class="btn social-icons psn" ng-click="doSocial('psn')"></button>
	<button class="btn social-icons xbox" ng-click="doSocial('xbox')"></button>
</div>
<?php if(!$isView):?></section><?php endif; ?>