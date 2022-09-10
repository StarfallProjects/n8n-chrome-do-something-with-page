document.getElementById("btn").addEventListener('click', calln8n);



async function calln8n() {
	let activeTab = await getCurrentTabUrl();
	data = {
		'url': activeTab
	}
	console.log(data);
	fetch('https://deborah.app.n8n.cloud/webhook-test/79b496b5-3cde-468b-a5a8-7e502a8b8f0e', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => {
		return response.text()
	})
	.then((data) => {
		resolve(data ? JSON.parse(data) : {})
	})
	.catch((error) => {

	})
}

async function getCurrentTabUrl() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
	let fullUrl = tab.url;
	let cleanUrl = fullUrl.replace(/(#.*)/gm, '');
	return cleanUrl;
}
