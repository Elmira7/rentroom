import React from "react"
import styles from "./NewsComponent.module.sass"
import img from "../../../../images/avatar.svg"
import {NewsComponent} from "./NewsComponent"

const notifications = [
	{
		id: "ffgf-gfdgd-gfdgdf-gdfd",
		img: "/images/news/img.png",
		title: "Объект #1",
		owner: {
			id: "bgfb-gfdf-gdfd",
			name: "Владислав Влад",
		},
		message: "оплата аренды",
		date: "2022-11-22",
		time: "11:22",
		missing: {
			id: 1,
			city: "Kazan",
			info: "Потерялася собачка",
			image: img
		},
		sum: "+ 18 560"
	},
	{
		id: "ffgd-gfdgd-gfdgdf-gdfd",
		img: "/images/news/img.png",
		title: "Кошка",
		owner: {
			id: "bgfs-gfdf-gdfd",
			name: "Влад влад"
		},
		message: "найдена кошка",
		date: "2022-11-22",
		time: "12:22",
		missing: {
			id: 2,
			city: "Kazan",
			info: "Потерялася собачка",
			image: img
		},
		sum: "1900"
	},
	{
		id: "ffgо-gfdgd-gfdgdf-gdfd",
		img: "/images/news/img.png",
		title: "Енот",
		owner: {
			id: "bgfs-gfdf-gdfd",
			name: "Влад влад"
		},
		message: "найден енот",
		date: "2022-11-21",
		time: "12:22",
		missing: {
			id: 3,
			city: "Kazan",
			info: "Потерялася собачка",
			image: img
		},
		sum: "1900"
	}
]


export const NewsList = () => {
	const groupingArrayByData = (notifications: any, key: any) => {
		return notifications.reduce(function (rv: any, x: any) {
			(rv[x[key]] = rv[x[key]] || []).push(x)
			return rv
		}, {})
	}

	const notificationArray = groupingArrayByData(notifications, "date")

	return (
		<div>
			{Object.keys(notificationArray).map((date) => {
				// eslint-disable-next-line react/jsx-key
				return (<div>
					<div>
						<div className={styles.date}> {date} </div>
						{notificationArray[date].map((notification: any, index: number) => (
							<NewsComponent
								key={index}
								notification={notification}/>))}
					</div>
				</div>)
			})
			}
		</div>
	)
}