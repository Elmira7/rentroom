import React, {useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Pagination} from "swiper"
import styles from "./Advanteges.module.sass"
//todo swiper
export const Advantages = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__text}>Почему стоит выбрать именно нас?</div>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className={styles.mySwiper}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>
		</div>
	)
}
