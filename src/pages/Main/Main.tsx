import React from "react"
import {AboutYou} from "./components/AboutYou/AboutYou"
import {Cooperation} from "./components/Cooperation/Cooperation"
import {Partners} from "./components/Partners/Partners"
import {Advantages} from "./components/Advantages/Advantages"
import {AboutUs} from "./components/AboutUs/AboutUs"
import {Login} from "./components/login/Login"


export const Main = () => {
	return (
		<div>
			<AboutYou/>
			<br/>
			<br/>
			<br/>
			<br/>
			<AboutUs/>
			<Cooperation/>
			<Advantages/>
			<Partners/>
			<Login/>
		</div>
	)
}