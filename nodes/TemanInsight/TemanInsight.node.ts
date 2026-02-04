import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TemanInsight implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Teman Insight',
		name: 'temanInsight',
		icon: 'file:teman-insight.png',
		group: ['transform'],
		version: 1,
		usableAsTool: true,
		subtitle: '=Ask: {{ $parameter.message }}',
		description:
			'Let your knowledge work for you. Query your Teman Insight knowledge base from n8n. Get your API free at app.temaninsight.com.',
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
				description: 'Your question to the knowledge base',
				placeholder: 'e.g. Hello, what can you help me with?',
				routing: {
					request: {
						method: 'POST',
						url: '/api/public/partners/knowledgebases/ask',
						body: {
							message: '={{ $value }}',
						},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: { property: 'data' },
							},
						],
					},
				},
			},
			{
				displayName: 'Session ID',
				name: 'session_id',
				type: 'string',
				default: '',
				description:
					'Optional. Session ID from a previous response to keep the same conversation context. Leave empty for a new conversation.',
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
