import React from "react"
import styles from "./Cooperation.module.sass"

export const Cooperation = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__block}>
				<div className={styles.right}>
					<img className={styles.img} src={"/images/img_1.png"} alt={"img"}/>
				</div>
				<div className={styles.main__block__text}>
					<div className={styles.main__block__text__first}>Я арендодатель</div>
					<ul className={styles.main__block__text__second}>
						<li>с другой стороны рамки и</li>
						<li>место обучения кадров требует</li>
						<li>определения и уточнения</li>
						<li>экономической целесообразности</li>
						<li>принимаемых решений!</li>
					</ul>
				</div>
			</div>
			<div className={styles.main__block}>
				<div className={styles.main__block__text}>
					<div className={styles.main__block__text__first}>Я арендатор</div>
					<ul className={styles.main__block__text__second}>
						<li>с другой стороны рамки и</li>
						<li>место обучения кадров требует</li>
						<li>определения и уточнения</li>
						<li>экономической целесообразности</li>
						<li>принимаемых решений!</li>
					</ul>

				</div>
				<div className={styles.left}>
					<img className={styles.img} src={"/images/img_2.png"} alt={"img"}/>
				</div>
			</div>

		</div>
	)
}