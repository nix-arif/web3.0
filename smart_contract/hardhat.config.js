// https://eth-ropsten.alchemyapi.io/v2/734ElgvJVL33oi1q5l9lLdW9dfPfZF1F

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/734ElgvJVL33oi1q5l9lLdW9dfPfZF1F',
			accounts: [
				'8623daeeb7093d482a9e1f96012144155906f815b57f8aca0e5213ba995e7ae3',
			],
		},
	},
};
