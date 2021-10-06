import Head from 'next/head';
import { table, minifyRecords } from './api/utils/Airtable';

export async function getServerSideProps(context) {
	try {
		const calinadas = await table.select({}).firstPage();

		return {
			props: {
				initialCalinadas: minifyRecords(calinadas),
			},
		};
	} catch (error) {
		console.error(error);
	}
}

export default function Home({ initialCalinadas }) {
	const firstCalinada = initialCalinadas[0];

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
									<p>{firstCalinada.fields.calinada}</p>
								</blockquote>
								<figcaption className='blockquote-footer'>
									{firstCalinada.fields.name} in{' '}
									<cite title='Source Title'>{firstCalinada.fields.team}</cite>
								</figcaption>
							</figure>
							<p></p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
