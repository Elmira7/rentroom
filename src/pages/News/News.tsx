import React from "react"
import styles from "./News.module.sass"
import {Filter} from "./component/filter/Filter"
import {NewsList} from "./component/news/NewsList"


export const News: React.FC = () => {

	return (
		<div className={styles.main}>
			<div className={styles.article}>Новости</div>
			<div className={styles.filter}>
				<Filter/>
			</div>
			<div className={styles.content}>
				<div>
					<img className={styles.img} alt={"календарь"} src={"/images/img_6.png"}/>
				</div>
				<NewsList/>
			</div>
		</div>
	)
}