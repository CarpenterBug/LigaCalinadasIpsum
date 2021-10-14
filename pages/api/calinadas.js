const clientPromise = require('../../lib/mongodb');

export default async function handler(req, res) {
	const client = await clientPromise;

	const data = await client.db().collection('calinadas').find({}).limit(10).toArray();

	res.json({ data: data });
}
