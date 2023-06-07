import React from "react"
import {useParams} from "react-router-dom"
import {LeasedPremiseType} from "../LeasedPremises/LeasedPremisesList"

export const Info = () => {
	const {id} = useParams()
	if (!id) {
		// Обработка случая, когда id является undefined
		return <div>Неверный идентификатор объекта</div>
	}
	const object = LeasedPremiseType.find((obj) => obj.id === parseInt(id))

	return (<div>

		<img alt={"здесь не должно быть картинки"} src={"/images/doSstr/img_4.png"}/>
		<img alt={"здесь не должно быть картинки"} src={"/images/doSstr/img_5.png"}/>
	</div>
	)
}