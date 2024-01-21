import { DISCORD_WEBSITE_DEPLOYMENT_WEBHOOK, VERCEL_WEBHOOK_SECRET } from '$env/static/private';
import crypto from 'crypto';
import { WebhookClient, EmbedBuilder } from 'discord.js';

const webhookClient = new WebhookClient({ url: DISCORD_WEBSITE_DEPLOYMENT_WEBHOOK });

export async function POST({ request }) {
	//
	const isVercel = verifySignature(request);
	try {
		const body: TPostBody = await request.json();
		const notificationTitle = `${body.deployment?.id} • ${body.deployment?.url}`;
		if (body.type === 'deployment.created') {
			await sendDiscordNotification({
				title: notificationTitle,
				description: 'Deployment created',
				footer: getDateString(body.createdAt),
				color: 16760931
			});
		} else if (body.type === 'deployment.succeeded') {
			await sendDiscordNotification({
				title: notificationTitle,
				description: 'Deployment succeeded',
				footer: getDateString(body.createdAt),
				color: 9830273
			});
		} else if (body.type === 'deployment.error') {
			await sendDiscordNotification({
				title: notificationTitle,
				description: 'Deployment error',
				footer: getDateString(body.createdAt),
				color: 16737894
			});
			console.log('deployment.error');
		} else if (body.type === 'deployment.cancelled') {
			await sendDiscordNotification({
				title: notificationTitle,
				description: 'Deployment cancelled',
				footer: getDateString(body.createdAt),
				color: 16737894
			});
			console.log('deployment.cancelled');
		}
	} catch (e) {
		console.log(e);
	}
	return new Response(JSON.stringify({ isVercel }));
}

async function sendDiscordNotification({
	title,
	description,
	footer,
	color
}: {
	title: string;
	description: string;
	footer: string;
	color: number;
}) {
	const embed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(color)
		.setFooter({ text: footer });
	await webhookClient.send({ embeds: [embed] });
}

function getDateString(date: string) {
	return new Date(date).toUTCString().replace('GMT', 'UTC');
}

async function verifySignature(req: Request) {
	const clonedReq = req.clone();
	const payload = await clonedReq.text();
	const signature = crypto.createHmac('sha1', VERCEL_WEBHOOK_SECRET).update(payload).digest('hex');
	return signature === clonedReq.headers.get('x-vercel-signature');
}

interface TPostBody {
	id: string;
	type: TEventType;
	createdAt: string;
	payload: string;
	region: string;
	deployment?: {
		id: string;
		url: string;
		name: string;
	};
}

type TEventType =
	| 'deployment.created'
	| 'deployment.succeeded'
	| 'deployment.ready'
	| 'deployment.cancelled'
	| 'deployment.error'
	| 'deployment.check-rerequested';
