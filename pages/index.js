import Head from 'next/head';
import clientPromise from '../lib/mongodb';

export async function getServerSideProps(context) {
	const client = await clientPromise;
	const data = await client.db().collection('calinadas').find({}).limit(1).toArray();
	const calinadas = JSON.parse(JSON.stringify(data));

	return {
		props: { calinadas: calinadas },
	};
}

export default function Home({ calinadas }) {
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

							<figure>
								<blockquote className='blockquote'>
									<p>{calinadas[0].calinada}</p>
								</blockquote>
								<figcaption className='blockquote-footer'>
									{calinadas[0].name} in <cite title='Source Title'>{calinadas[0].team}</cite>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
