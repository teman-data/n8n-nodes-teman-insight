import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TemanInsight implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Teman Insight',
		name: 'temanInsight',
		icon: 'file:teman-insight.png',
		group: ['transform'],
		version: 1,
		subtitle: '=Ask: {{ $parameter.message }}',
		description: 'Tanya knowledge base Teman Insight (POST /api/public/partners/knowledgebases/ask)',
		defaults: {
			name: 'Teman Insight',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'temanInsightApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.temaninsight.com',
			headers: {
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				required: true,
				description: 'Pertanyaan yang ingin dikirim ke knowledge base',
				placeholder: 'e.g. Hallo, can you explain me what you can do?',
				routing: {
					request: {
						method: 'POST',
						url: '/api/public/partners/knowledgebases/ask',
						body: {
							message: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Session ID',
				name: 'session_id',
				type: 'string',
				default: '',
				description:
					'Opsional. Identifier chatroom. Isi jika ingin konteks percakapan sama (mis. dari response sebelumnya). Di awal percakapan bisa dikosongkan.',
				routing: {
					request: {
						body: {
							session_id: '={{ $value || undefined }}',
						},
					},
				},
			},
		],
	};
}
