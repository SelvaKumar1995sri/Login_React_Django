
import React from 'react';

import Login from './Login';
import Register from './Register';
import Landingimage from'../assets/Bike.jpg';
import RE from'../assets/RE.jpg';
import nature from'../assets/nature.jpg';


const slideData = [
	{
		title: 'Your Bike, Our Care – Anytime, Anywhere',
		content: 'Quick bike repairs, regular servicing, and emergency mechanic support – all just a tap away.',
		button: 'Book a Mechanic Now',
		background: require('../assets/Landpage.jpg'),
	},
	{
		title: 'How It Works (3 Steps)',
		content: [
			'Request Help – Select repair, service, or emergency support.',
			'Get Matched – We connect you to the nearest verified mechanic.',
			'Ride On – Get back on the road with peace of mind.',
		],
		background: require('../assets/mt.jpg'),
	},
	{
		title: 'Key Features / Benefits',
		content: [
			'✅ 24/7 Emergency Support – Stuck on the road? We’ll send help fast.',
			'✅ Location-Based Matching – Find the closest mechanic instantly.',
			'✅ Trusted Mechanics – Verified professionals for quality service.',
			'✅ On-the-Go Booking – Book regular maintenance anytime.',
			'✅ Affordable Pricing – Transparent and fair charges.',
		],
		background: require('../assets/honda.jpg'),
	},
	{
		title: 'Why Choose Us?',
		content: [
			'No more waiting or searching for help.',
			'Reliable service when you need it most.',
			'Built for bikers, by bikers.',
		],
		background: require('../assets/yezdi.jpg'),
	},
];

const slideStyle = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'transparent',
	flexShrink: 0,
};



const LandingPage = () => {
	const [page, setPage] = React.useState('landing');
	const [section, setSection] = React.useState(0);


		React.useEffect(() => {
			if (page === 'landing') {
				const onWheel = (e) => {
					if (e.deltaY > 0 && section < slideData.length - 1) {
						setSection((s) => s + 1);
					} else if (e.deltaY < 0 && section > 0) {
						setSection((s) => s - 1);
					}
				};
				const onKeyDown = (e) => {
					if (e.key === 'ArrowDown' && section < slideData.length - 1) {
						setSection((s) => s + 1);
					} else if (e.key === 'ArrowUp' && section > 0) {
						setSection((s) => s - 1);
					}
				};
				window.addEventListener('wheel', onWheel);
				window.addEventListener('keydown', onKeyDown);
				return () => {
					window.removeEventListener('wheel', onWheel);
					window.removeEventListener('keydown', onKeyDown);
				};
			}
		}, [section, page]);


	const renderSlides = () => (
		<div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<div
					style={{
						height: `${slideData.length * 100}vh`,
						width: '100vw',
						transition: 'transform 0.7s cubic-bezier(.77,0,.18,1)',
						transform: `translateY(-${section * 100}vh)`
					}}
				>
					{slideData.map((slide, idx) => (
						<div key={idx} style={{ ...slideStyle, position: 'relative', overflow: 'hidden' }}>
							{/* Background image for this slide */}
							{slide.background && (
								<div style={{
									position: 'absolute',
									top: 0, left: 0, width: '100%', height: '100%',
									backgroundImage: `url(${slide.background})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									zIndex: 0,
								}} />
							)}
							{/* Content */}
							<div style={{ position: 'relative', zIndex: 1, 
								backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', 
								borderRadius: '10px', justifyContent: 'center', textAlign: 'center' }}>
								<h1>{slide.title}</h1>
								{Array.isArray(slide.content) ? (
									slide.title.includes('How It Works') ? (
										<ol style={{ textAlign: 'left', display: 'inline-block', margin: '0 auto', fontSize: '1.2em' }}>
											{slide.content.map((item, i) => <li key={i}>{item}</li>)}
										</ol>
									) : (
										<ul style={{ textAlign: 'left', display: 'inline-block', margin: '0 auto', fontSize: '1.2em' }}>
											{slide.content.map((item, i) => <li key={i}>{item}</li>)}
										</ul>
									)
								) : (
									<>
										<p>{slide.content}</p>
											{slide.button && (
												<button onClick={() => {
													if (slide.title === 'Your Bike, Our Care – Anytime, Anywhere') setPage('login');
												}}>{slide.button}</button>
											)}
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<div style={{ overflow: 'hidden', height: '100vh', width: '100vw', position: 'relative' }}>
			{/* Login/SignIn background image */}
			{(page === 'login' || page === 'signin') && (
				<div style={{
					position: 'absolute',
					top: 0, left: 0, width: '100vw', height: '100vh',
					backgroundImage: `url(${page === 'login' ? RE : nature})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					zIndex: 0,
				}} />
			)}
			{/* Top bar only for non-main pages */}
			{page !== 'main' && (
				<div style={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					padding: '20px',
					position: 'fixed',
					top: 10,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '90vw',
					borderRadius: '5px',
					zIndex: 10,
				}}>
					{(page === 'login' || page === 'signin') && (
						<button
							style={{
								marginRight: 'auto',
								cursor: 'pointer',
								fontSize: '1.2rem',
								padding: '10px 32px',
								borderRadius: '6px',
								fontWeight: 'bold',
								border: 'none',
								padding: '10px 32px',
								marginLeft: '10px',
							}}
							onClick={() => setPage('landing')}
						>
							Home
						</button>
					)}
					<button
						className="image-text-button"
						style={{ marginRight: '10px', fontSize: '1.2rem', padding: '10px 32px', borderRadius: '6px', fontWeight: 'bold', border: 'none' }}
						onClick={() => setPage('login')}
					>
						Login
					</button>
					<button
						className="image-text-button"
						style={{ fontSize: '1.2rem', padding: '10px 32px', borderRadius: '6px', fontWeight: 'bold', border: 'none' }}
						onClick={() => setPage('signin')}
					>
						Sign Up
					</button>
				</div>
			)}
			{page === 'login' && (
				<div style={{ marginTop: '150px', position: 'relative', zIndex: 1 }}><Login setPage={setPage} /></div>
			)}
			{page === 'signin' && (
				<div style={{ marginTop: '150px', position: 'relative', zIndex: 1 }}><Register /></div>
			)}
			{page === 'main' && (
				<div style={{ minHeight: '100vh' }}>
					{React.createElement(require('../mainpage/mainpage.js').default, {
						onLogout: () => setPage('login')
					})}
				</div>
			)}
			{page === 'landing' && renderSlides()}
		</div>
	);
};


export default LandingPage;
