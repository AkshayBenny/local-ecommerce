'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext, useState } from 'react'

export default function LoginPage() {
	const authContext = useContext(AuthContext)
	if (!authContext) return null

	const { login } = authContext

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await login(formData)
	}

	return (
		<main>
			<form onSubmit={loginHandler}>
				<input
					type='text'
					placeholder='Email'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					required
				/>
				<input
					type='text'
					placeholder='Password'
					name='password'
					value={formData.password}
					onChange={handleInputChange}
					required
				/>
				<button type='submit'>Login</button>
			</form>
		</main>
	)
}
