import React, {useEffect, useRef, useState} from "react"
import styles from "./Search.module.sass"
import {YMaps, Map, useYMaps} from "@pbe/react-yandex-maps"
import {MissingEntity} from "./component/MissingEntity"

export const Search = () => {
	// const ymaps = useYMaps(["Map"])
	// const placemarkRef = useRef(null)
	// const mapRef = useRef(null)
	//
	// useEffect(() => {
	// 	placemarkRef.current = createPlacemark([54.738276, 20.489808])
	// }, [])
	//
	//
	// const createPlacemark = (coords: any) => {
	// 	return new ymaps.Placemark(
	// 		coords,
	// 		{
	// 			iconCaption: "loading.."
	// 		},
	// 		{
	// 			preset: "islands#violetDotIconWithCaption",
	// 			draggable: true
	// 		}
	// 	)
	// }
	const mapState = {
		center: [55.753994, 37.622093],
		zoom: 9
	}
	// const missings = [{
	// 	id: 1,
	// 	city: "Kazan",
	// 	info: "Потерялася собачка",
	// 	image: "/images/img_2.png"
	// },
	// {
	// 	id: 2,
	// 	city: "Moscow",
	// 	info: "Потерялася собачка",
	// 	image: "/images/img_2.png"
	// },
	// {
	// 	id: 3,
	// 	city: "Moscow",
	// 	info: "Потерялася собачка",
	// 	image: "/images/img_2.png"
	// },
	// {
	// 	id: 4,
	// 	city: "Moscow",
	// 	info: "Потерялася собачка",
	// 	image: "/images/img_2.png"
	// },
	// {
	// 	id: 5,
	// 	city: "Moscow",
	// 	info: "Потерялася собачка",
	// 	image: "/images/img_2.png"
	// }
	// ]
	return (
		<div>
			<div className={styles.map}>
				{/*<Map className={styles.location__map} defaultState={{center: mapState.center, zoom: 9}}*/}
				{/*	modules={["Placemark", "geocode", "geoObject.addon.balloon"]}*/}
				{/*	instanceRef={mapRef}*/}
				{/*	state={mapState}*/}
				{/*/>*/}

				<Map style={{width: "100%", height: "100%", display: "block"}}
					// instanceRef={mapRef}
					// onLoad={ymaps => setYmaps(ymaps)}
					defaultState={{center: mapState.center, zoom: 9}}
					modules={["Placemark", "geocode", "geoObject.addon.balloon"]}/>
				<div className={styles.container}>
					<div className={styles.container__entityHolder}>
						<img className={styles.img} alt={"здесь не должно быть картинки"}
							src={"/images/doSstr/img_6.png"}/>
						{/*{missings.map((missing) => {*/}
						{/*	return (<MissingEntity key={missing.id}*/}
						{/*		image={missing.image}*/}
						{/*		info={missing.info}/>)*/}
						{/*})}*/}
					</div>
				</div>
			</div>

		</div>
	)
}