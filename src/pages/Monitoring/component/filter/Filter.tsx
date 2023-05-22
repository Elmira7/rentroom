import React from "react"
import styles from "./Filter.module.sass"
import {CheckboxArray} from "./Checkbox/CheckboxArray"

const checkboxes1 = [{name: "активный"}, {name: "закрытый"}]
const checkboxes2 = [{name: "есть"}, {name: "не есть"}]
const checkboxes3 = [{name: "есть"}, {name: "не есть"}]

export const Filter = () => {
	return (
		<div className={styles.block}>
			<div className={styles.block__city}>
				<div className={styles.block__city__text}>Город</div>
				<select className={styles.select} id="selectvalue">
					<option>Казань</option>
					<option>Москва</option>
					<option>Санкт-Петербург</option>
					<option>Нижнекамск</option>
					<option>Сочи</option>
					<option>Уфа</option>
					<option>Самара</option>
					<option>Байкал</option>
				</select>

			</div>
			<CheckboxArray category={"Статус"} CheckboxArray={checkboxes1}/>
			<CheckboxArray category={"Задолжность"} CheckboxArray={checkboxes2}/>
			<CheckboxArray category={"Запросы"} CheckboxArray={checkboxes3}/>
			<div className={styles.button}>
				<button className={styles.block__but}>Фильтр</button>
			</div>

		</div>
	)
}