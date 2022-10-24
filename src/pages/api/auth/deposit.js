import { Users, connectMongo } from '../../../lib';


export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!" }))
    // add an entry for the deposit and update the user
    const user = await Users.findOne({ email });
    // update the deposit array
    user.deposits.push({
        amount: req.body.amount,
        date: new Date()
    })
    // update the user
    await user.save();
    res.json(user);
}
