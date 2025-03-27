const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ChromeExtension = require('crx');

const ARTIFACTS_DIR = path.resolve(__dirname, '../web-ext-artifacts');
const PRIVATE_KEY_PATH = path.resolve(__dirname, '../private-key.pem');

if (!fs.existsSync(PRIVATE_KEY_PATH)) {
  console.log('Generating new private key...');
  const { privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
  fs.writeFileSync(PRIVATE_KEY_PATH, privateKey);
}

if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
  console.log(`Created artifacts directory: ${ARTIFACTS_DIR}`);
}

const crx = new ChromeExtension({
  codebase: 'http://localhost:8000/myExtension.crx',
  privateKey: fs.readFileSync(PRIVATE_KEY_PATH)
});

crx.load( path.resolve(__dirname, '../dist') )
  .then(crx => crx.pack())
  .then(crxBuffer => {
    const updateXML = crx.generateUpdateXML()

    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, 'update.xml'), 
      updateXML
    );
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, 'myExtension.crx'), 
      crxBuffer
    );
    console.log('CRX file created successfully!');
  })
  .catch(err=>{
    console.error( err );
  });