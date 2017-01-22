<?php require_once __dir__ . '/_header.php'; ?>



<div class="container">
<div class="xs-12 md-8 mainContent">
	
	<div class="row">

		<div class="row paymentSteps">
			<div class="xs-12 sm-4 paymentStep active">
				Step 1<br>
				Transaction info
			</div>
			<div class="xs-12 sm-4 paymentStep">
				Step 2<br>
				Recipient info
			</div>
			<div class="xs-12 sm-4 paymentStep">
				Step 3<br>
				Make payment
			</div>
			<div class="progressBar">
				<div class="bar" style="width: 33%;"></div>
			</div>
		</div>
		
		<div class="symbol">EUR</div>
		<div class="symbol eur">EUR</div>
		<div class="symbol gbp">EUR</div>

		<h3>Let's set up your transaction!</h3>
		<span>Specify the amount to be sent or received</span>

		<button id="btnNext" class="btn">Next</button>

		<div class="contentFooter">
			© 2016 CurrencyFair
			<div class="links">
				<a href="#" class="link">Help and Support</a>
				<a href="#" class="link">Legal Stuff</a>
			</div>
		</div>
	</div>
</div>
<div class="xs-12 md-4 sideBar">
	<ul>
		<li class="title">
			Sending Details
		</li>
		<li>
			abc
		</li>
		<li class="title">
			Receiving Details
		</li>
		<li>
			Rate
		</li>
		<li>
			Fee
		</li>
		<li>
			Deliver
		</li>
		<li class="footer">
			You save <strong>£66.19</strong> compared your bank!
		</li>
	</ul>
</div>
</div>



<?php require_once __dir__ . '/_footer.php'; ?>