// ==UserScript==
// @name         STEAM FUNDS CUSTOM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  AddFunds
// @author       jordanbardella
// @match        https://store.steampowered.com/steamaccount/addfunds
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var htmlContent = `
<div class="addfunds_area_purchase_game game_area_purchase_game">


									<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="game_purchase_action_bg">
								<div class="game_purchase_price price">
									5,--€								</div>

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="500" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1>Ajouter 5,--€</h1>
						<p>
						Niveau minimal de fonds						</p>
					</div>
										<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="game_purchase_action_bg">
								<div class="game_purchase_price price">
									10,--€								</div>

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="1000" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1>Ajouter 10,--€</h1>
						<p>
						&nbsp;						</p>
					</div>
										<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="game_purchase_action_bg">
								<div class="game_purchase_price price">
									25,--€								</div>

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="2500" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1>Ajouter 25,--€</h1>
						<p>
						&nbsp;						</p>
					</div>
										<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="game_purchase_action_bg">
								<div class="game_purchase_price price">
									50,--€								</div>

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="5000" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1>Ajouter 50,--€</h1>
						<p>
						&nbsp;						</p>
					</div>
										<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="game_purchase_action_bg">
								<div class="game_purchase_price price">
									100,--€								</div>

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="10000" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1>Ajouter 100,--€</h1>
						<p>
						&nbsp;						</p>
					</div>
<div class="addfunds_area_purchase_game game_area_purchase_game">
						<div class="addfunds_purchase_action game_purchase_action" style="float: right">
							<div class="">

<input type="text" id="amountInput" placeholder="Entrez un montant" style="width: 140px; padding: 8px 12px; height: auto; line-height: 20px; margin-top: 5px; text-align: center; border: 2px solid #5c7e10; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;">

										<a data-panel="{&quot;autoFocus&quot;:true}" class="btnv6_green_white_innerfade btn_medium" data-amount="10000" data-currency="EUR" href="#" onclick="javascript:submitAddFunds( this );"><span>Ajouter des fonds</span></a>


							</div>
						</div>

						<h1 id="amountTitle">Ajouter 0,--€</h1>
						<p>
						&nbsp;						</p>
					</div>
`;

    var targetElement = document.getElementById('prices_user');


    if(targetElement) {
        targetElement.innerHTML = htmlContent;

        addDynamicScript();
    } else {
        console.error("Une Erreur Est Survenu.");
    }
})();

function addDynamicScript() {
    var scriptContent = function() {
        function updateAmount() {
            var input = document.getElementById('amountInput');
            var title = document.getElementById('amountTitle');
            var addButton = document.getElementById('addFundsButton');
            var value = input.value;
            var formattedValue = isNaN(parseFloat(value)) ? '0,--€' : parseFloat(value).toFixed(2).replace('.', ',') + '€';
            var dataAmount = isNaN(parseFloat(value)) ? 1000 : parseFloat(value) * 100;
            title.innerHTML = 'Ajouter ' + formattedValue;
            addButton.setAttribute('data-amount', dataAmount.toString());
        }
        document.getElementById('amountInput').addEventListener('input', updateAmount);

        document.getElementById('amountInput').addEventListener('focus', function(e) {
            e.target.style.borderColor = '#66cc66';
            e.target.style.boxShadow = '0 0 8px rgba(102, 204, 102, 0.6)';
        });

        document.getElementById('amountInput').addEventListener('blur', function(e) {
            e.target.style.borderColor = '#5c7e10';
            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        });
    };

    var scriptElement = document.createElement('script');
    scriptElement.textContent = '(' + scriptContent + ')();';
    document.body.appendChild(scriptElement);
}
