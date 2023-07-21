const { MetaMaskSDK } = require('@metamask/sdk');

const MMSDK = new MetaMaskSDK({
    dappMetadata: {
        name: 'Test name',
        url: 'yoursite.com',
    },
    showQRCode: true,
    shouldShimWeb3: true
});

const ethereum = MMSDK.getProvider();

async function connect() {
    await ethereum.request({ method: 'eth_requestAccounts', params: [] });
    console.log('connected')

    ethereum.on('chainChanged', (chainId) => {
        console.log('changed to:', chainId)
    })

}

connect()
