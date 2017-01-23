<div class="modal active">
	<div class="modal-bg">
	<div class="modal-body">

		<div class="modal-header">
			<h1><i class="fa fa-lock"></i>Identity verification required</h1>
			For you security, we ocasionally require you to verify your identity by entering a code sent to your mobile device.
		</div>
	
		<div class="modal-content">
			<div id="code">
				<input type="text" name="code_1" maxlength="1">
				<input type="text" name="code_2" maxlength="1">
				<input type="text" name="code_3" maxlength="1">
				<input type="text" name="code_4" maxlength="1">
				<input type="text" name="code_5" maxlength="1">
				<input type="text" name="code_6" maxlength="1">
			</div>
			<div class="options">
				<div class="option left">
					<i class="fa fa-refresh"></i>Receive a new code
				</div>
				<div class="option right">
					<i class="fa fa-phone"></i>Receive code via call instead
				</div>
			</div>
		</div>
	
		<div class="modal-footer">
			<button id="verify"   class="btn" disabled="Disabled">Verify Identity</button>
			<button id="btnClose" class="btn btn-white">Back</button>
			<a href="#" class="link" target="black">I can't access this mobile device</a>
	
		</div>
	
	</div>
	</div>
</div>
	<script src="<?php echo $GLOBALS['jsDir']; ?>app.js"></script>

	</body>
</html>