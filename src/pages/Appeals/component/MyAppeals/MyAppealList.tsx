import React from "react"
import {MyAppealArray} from "./MyAppealArray"

const MyAppealType = [
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: "/images/avatar.svg",
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	}
]
export const MyAppealList = () => {
	return (
		<div>
			<MyAppealArray NotMyAppeal={MyAppealType}/>
		</div>
	)

}