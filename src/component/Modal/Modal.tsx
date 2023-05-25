import {useRef, useState} from "react"
import styles from "./Modal.module.sass"
import {UseModalHooks} from "../hooks/UseModalHooks"

interface Props {
    visible: boolean
    onClose: () => void
}

export const Modal = ({visible, onClose}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	UseModalHooks(ref, () => onClose())
	return (
		<div></div>

	)

}