import {useRef, useState} from "react"
import {UseModalHooks} from "./hooks/UseModalHooks"
import {Portal} from "./Portal/Portal"
import {Edit} from "../pages/Account/component/edit/Edit"
import styles from "./Modal.module.sass"

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