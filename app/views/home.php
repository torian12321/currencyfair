<?php require_once __dir__ . '/_header.php'; ?>



<div class="mainContent">
	
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

		
		<h3>Let's set up your transaction!</h3>
		<span>Specify the amount to be sent or received</span>

		
		<ul class="transactionDetails">
			<li class="active">
				<h2>You send</h2>
				<div class="ammount">
					€ 2,000.<span class="cents">00</span>
				</div>
				
				<div class="symbol eur">EUR</div>
			</li>
			<li>
				<h2>Receiver gets</h2>
				<div class="ammount">
					£ 1,717.<span class="cents">94</span>
				</div>
				<div class="symbol gbp">GBP</div>
			</li>
		</ul>


		<button id="btnNext" class="btn">Next</button>

		<?php contentFooter(); ?>
		</div>
	</div>
</div>


	<div class="sideBar">
		<ul>
			<li class="title">
				Sending Details
			</li>
			<li>
				<div>
					<span class="property">You send</span>
					<span class="value important">€2000.00</span>
				</div>
			</li>
			<li class="title">
				<div>
					<span class="property">Receiving Details</span>
					<span class="value">
						<a href="#" class="link">As of right now <i class="fa fa-question-circle"></i></a>
					</span>
				</div>
			</li>
			<li>
				<div>
					<span class="property">Rate</span>
					<span class="value">0.86022</span>
				</div>
				<div>
					<span class="property">Fee</span>
					<span class="value">£2.50</span>
				</div>
				<div>
					<span class="property">Delivery date</span>
					<span class="value">25th November</span>
				</div>
				<div>
					<span class="property">Recipient gets</span>
					<span class="value important">£1717.94</span>
				</div>
			</li>
			<li class="footer">
				You save <strong>£66.19</strong> compared your bank!
			</li>
		</ul>

		<?php contentFooter(); ?>
	</div>




<?php modal(); ?>
<?php require_once __dir__ . '/_footer.php'; ?>