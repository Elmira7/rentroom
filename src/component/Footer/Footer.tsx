import React from "react"
import styles from "./Footer.module.sass"

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__subscription}>
				<div className={styles.footer__subscription__text}>
					<span className={styles.footer__subscription__text__green}>Подпишитесь</span>
					<span className={styles.footer__subscription__text__white}>на наши обновления, чтобы быть в курсе всех последних новостей</span>
				</div>

				<input className={styles.footer__subscription__input}/>
				<button className={styles.footer__subscription__button}>Подписка</button>
			</div>
			<div className={styles.footer__col}>
				<div className={styles.footer__col__main}>Карта сайта</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
				<div className={styles.footer__col__second}>какой-то</div>
				<div className={styles.footer__col__second}>текст</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
			</div>

			<div className={styles.footer__col}>
				<div className={styles.footer__col__main}>Социальные сети</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
				<div className={styles.footer__col__second}>какой-то</div>
				<div className={styles.footer__col__second}>текст</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
			</div>

			<div className={styles.footer__col}>
				<div className={styles.footer__col__main}>Способы оплаты</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
				<div className={styles.footer__col__second}>какой-то</div>
				<div className={styles.footer__col__second}>текст</div>
				<div className={styles.footer__col__second}>тут</div>
				<div className={styles.footer__col__second}>везде</div>
			</div>

		</div>
	)
}