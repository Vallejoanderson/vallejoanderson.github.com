
import React from 'react'
import "../index.css";


export const Contact = () => {
	const profile = `assets/profile.jpg`;
	const linkedin = `assets/linkedin.svg`;
	const twitter = `assets/twitter.svg`;
	return (
		<div className="flex justify-center mt-24 lg:mt-36 animate__animated animate__slideInDown">
			<div>
				<img className="rounded-full border-2 w-40 mx-auto" src={ profile } alt="profile picture" />
				<h2 className="text-slate-50 text-base md:text-xl text-center mt-8 tracking-widest">ANDERSON VALLEJO</h2>
				<div className="flex gap-8 justify-center mt-4">
					<a href='https://www.linkedin.com/in/anderson-vallejo-643367a2/' target='_blank'>
						<img className="cursor-pointer" src={ linkedin }/>
					</a>
					<a href='https://twitter.com/vallejoaa' target='_blank'>
						<img className="cursor-pointer" src={ twitter }/>
					</a>
				</div>
				<a href="https://drive.google.com/file/d/1yPhKI5JbAZDxzHmBHN-MqrI0Z5SeUMl1/view?usp=sharing" target="_blank">
					<p className="text-slate-50 border-2 text-center px-16 py-4 mt-24 text-base md:text-xl cursor-pointer hover:bg-white hover:text-black tracking-widest">DOWNLOAD CV</p>
				</a>
			</div>
		</div>
	)
}