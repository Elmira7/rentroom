import React from "react"

export interface NotMyAppealProps {
    img: string
    name: string
    theme: string
    message: string
    status: string

}


export const NotMyAppeal = (props: NotMyAppealProps) => {
	return (
		<div>
			<div>
				<img alt={"фото пользователя"} src={props.img}/>
			</div>
			<div>
				<span>{props.name}</span>
				<span>{props.status}</span>

				<button>{props.status === "решен" ? "Удалить" : "Решить"}</button>
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