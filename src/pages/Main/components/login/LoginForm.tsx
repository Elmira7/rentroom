import React from "react"
import {Formik} from "formik"
import styles from "./Login.module.sass"
import * as Yup from "yup"
import {NavLink} from "react-router-dom"

export const LoginForm = () => {
	const validationSchema = Yup.object().shape({
		login: Yup.string().required("Телефон обязателен"),
		password: Yup.string().required("Пароль обязателен"),
	})
	return (
		<div>
			<Formik initialValues={{
				login: "",
				password: ""
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values)
			}}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					errors,
					touched,
				}) => (
					<form onSubmit={handleSubmit} className={styles.form}>
						<label className={styles.form__input}>
							<input
								type="text"
								name="login"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
								placeholder="Телефон"
								autoComplete="off"
							/>
						</label>
						{touched.login && errors.login && <div className={styles.form__errors}>{errors.login}</div>}

						<label className={styles.form__input}>
							<input
								type="password"
								name='password'
								placeholder="Пароль"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								autoComplete="off"
							/>
						</label>
						{touched.password && errors.password &&
                            <div className={styles.form__errors}>{errors.password}</div>}
						<div>
							<button type='submit' className={styles.form__but}>
								<NavLink to="/authorized/Monitoring/MyPremises">Войти</NavLink></button>
						</div>

					</form>
				)}

			</Formik>

		</div>
	)
}