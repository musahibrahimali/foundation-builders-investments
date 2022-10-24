import { Users, connectMongo } from '../../../lib';


export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!" }))
    const { email } = req.body;
    const user = await Users.findOne({ email });
    // console.log("response", user)
    // add the user to the response object
    res.json({ status: true, data: user });
}
