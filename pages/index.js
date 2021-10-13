import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Liga Calinadas Ipsum</title>
				<meta name='description' content='Liga Calinadas Ipsum' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1>Liga Calinadas Ipsum</h1>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
