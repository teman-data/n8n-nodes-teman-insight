# Teman Insight — n8n Node

**Official n8n community node for Teman Insight.**  
Query your knowledge base from n8n workflows.

Get your API key **free** at **[app.temaninsight.com](https://app.temaninsight.com)** — sign up, add your knowledge, and you’re set.

**Your knowledge, working for you.**

---

## How to use

### 1. Get an API key

- Go to **[app.temaninsight.com](https://app.temaninsight.com)** → sign up or log in  
- Set up your knowledge base and get your **API key** (in settings or dashboard)

### 2. Install the node in n8n

- In n8n: **Settings** (gear icon) → **Community nodes** → **Install**  
- Enter: **n8n-nodes-teman-insight** → Install

### 3. Use it in a workflow

1. Add the **Teman Insight** node to your workflow (search for “Teman Insight” in the node panel).
2. Click **Create New Credential** → choose **Teman Insight API** → enter your **API Key** → Save.
3. Fill in **Message** (your question to the knowledge base).
4. (Optional) **Session ID** — leave empty at first; to keep the same conversation context, use the `session_id` from the previous response.

Done. Run the workflow and the Teman Insight response will appear in the node output.

---

## Need help?

- Teman Insight docs: [teman-insight.gitbook.io](https://teman-insight.gitbook.io/teman-insight)  
- Website: [temaninsight.com](https://temaninsight.com)
