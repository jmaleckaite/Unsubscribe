import React, { Component } from 'react';
import './styles.css';
import './Unsubscribe.js';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	
	render() {
		return (
		<div className="unsubscribe">
		<h1>La tua iscrizione è riuscita!</h1>
		<p>Ti sei iscritto a: </p>
		<div className="Footer">
		<form>
		<h3>Se non vuoi ricevere newsletter</h3>
		<BrowserRouter>
		  <Link to='/Unsubscribe'>clicca qui</Link>
		  <Switch>
		<Route path="/Unsubscribe">
		<Unsubscribe />
		</Route>
		</Switch>
		  </BrowserRouter>
		</form>
		</div>
		</div>
		
		
		);
	}
}
	
	function Unsubscribe() {
			return (
		<div className="modal">
		<div className="Title"><h3>Seleziona le newsletter a cui desideri annullare l'iscrizione</h3></div>
		<form>
		<label>
		<div className="listOfChannels">Le Notizie del Portale<input type="checkbox" /></div>
		</label>
		<label>
		<div className="listOfChannels">Gli eventi e le Notizie della Cultura<input type="checkbox" /></div>
		</label>
		<label>
		<div className="listOfChannels">Gli eventi e le Notizie del centro per le famiglie<input type="checkbox" /></div>
		</label>
		<label>
		<div class='submitWrapper'>   
			<input id="partitioned" type="submit" value="Unsubscribe"/>
			</div>
			</label>
			</form>
			</div>
			);
	}





		/**<div className="buton" onClick={event => window.location.href='/Unsubscribe.js'}>
          <button>clicca qui</button>
		  </div> **/
export default App;