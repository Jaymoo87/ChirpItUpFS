import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as path from 'path'


import Home from './components/Home';
import OneChirp from './components/OneChirp';
import Navbar from './components/Navbar'
import ChirpCard from './components/ChirpCard';
import { ChirpCardProps } from './components/ChirpCard';
import EditChirp from './components/EditChirp';






/* HOOK REACT EXAMPLE */
const App = () => {
	return (
	  <BrowserRouter>
	  <Navbar />
		<main className="container mt-5">
		  <section className="row justify-content-center">
			<Routes>
			  <Route path="" element={<Home />}></Route>
			  <Route path="/chirps/:id" element={<OneChirp />}></Route>
			  <Route path="/chirps/:id/edit" element={<EditChirp />}></Route>
			 
			  <Route path="*" element={<h1>404 Not Found</h1>}></Route>
			</Routes>
		  </section>
		</main>
		
	  </BrowserRouter>
	)
	
};





/* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

// interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
