import fs from 'fs';
import path from 'path';

async function fetchImage(nodeId, fileName) {
    console.log('Fetching via screenshot', nodeId);
    const res = await fetch('http://localhost:38451/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operation: 'screenshot', params: { nodeId } })
    });
    const json = await res.json();
    if (json.success) {
        let base64 = json.data;
        if (typeof base64 !== "string") {
            base64 = base64.base64 || base64.image || base64.dataUrl || base64.data || base64.url;
            if (!base64 && base64.dataUrl) base64 = base64.dataUrl;
        }
        if (!base64) {
            console.log('No base64 found in data for node', nodeId, Object.keys(json.data));
            return;
        }
        if (base64.startsWith('data:')) {
            base64 = base64.split(',')[1];
        }

        const outPath = path.join('public', 'assets', fileName);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));
        console.log('Saved', outPath);
    } else {
        console.error('Failed to fetch', nodeId, json.error);
    }
}

async function main() {
    await fetchImage('241:589', 'ios-mail-step1.png');
    await fetchImage('241:592', 'ios-mail-step2.png');
    await fetchImage('241:599', 'ios-mail-step3.png');
}

main().catch(console.error);
