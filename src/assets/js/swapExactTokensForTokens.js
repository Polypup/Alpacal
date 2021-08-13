import getProvider from './getProvider'
async function swapExactTokensForTokens() {
    let web3js = getProvider()
    const swapExactTokensForTokensABI = [
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
            },
            {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
            }
        ],
        "name": "swapExactTokensForTokens",
        "outputs": [
            {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]
    const myContract = await new web3js.eth.Contract(swapExactTokensForTokensABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default swapExactTokensForTokens