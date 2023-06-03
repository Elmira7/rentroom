import React from "react"
import img from "../../../../images/avatar.svg"
import {MyAppealArray} from "./MyAppealArray"
import styles from "./MyAppeals.module.sass"

const MyAppealType = [
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: img,
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