import React from "react"


export interface MyAppealProps {
    img: string
    name: string
    theme: string
    message: string
    status: string

}


export const MyAppeal = (props: MyAppealProps) => {
	return (
		<div>
			<div>
				<img alt={"фото пользователя"} src={props.img}/>
			</div>
			<div>
				<span>{props.name}</span>
				<span>{props.status}</span>

				<button>Удалить</button>
			</div>
			<div>
				<span>Тема</span>
				<span>{props.theme}</span>
			</div>
			<div>
				<span>Сообщение</span>
				<span>{props.message}</span>
			</div>

		</div>
	)

}