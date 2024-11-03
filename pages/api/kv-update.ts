import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { medkit } = req.body;
        console.log(medkit);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer W2psZcVitf4DkX7HGzGOmuI3DUByFBJhA2SjQrs2',  // Replace with your actual API token
            },
            body: JSON.stringify(medkit),
        };

        try {
            const response = await fetch('https://api.cloudflare.com/client/v4/accounts/8558a3a1313a8ae547ff7401df4ea2c9/storage/kv/namespaces/6c5af47300d84b0ba94a8ef8ff31b43e/bulk', options);
            const data = await response.json();
            
            // Return the response data from Cloudflare
            res.status(response.status).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}