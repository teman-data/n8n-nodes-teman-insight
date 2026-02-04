import type {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TemanInsightApi implements ICredentialType {
	name = 'temanInsightApi';

	displayName = 'Teman Insight API';

	icon = 'file:../nodes/TemanInsight/teman-insight.png';

	documentationUrl = 'https://teman-insight.gitbook.io/teman-insight';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-key': '={{ $credentials.apiKey }}',
				'Content-Type': 'application/json',
			},
		},
	};
}
