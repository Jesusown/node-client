var request = require('superagent');

const URL_ROOT = 'https://api.blockcypher.com/v1/';

/**
 * <b>BlockCypher API Client</b>.
 * @constructor
 * @param {string}    coin    The coin for which you're using the BlockCypher API. Can be 'btc', 'ltc', 'doge', or 'bcy'.
 * @param {string}    chain   The chain for which you're using the BlockCypher API. Can be 'main', 'test', or 'test3'.
 * @param {string}    token   Your BlockCypher API Token.
 */
var Blockcy = function (coin, chain, token) {
	this.coin = coin;
	this.chain = chain;
	this.token = token;
};

module.exports = Blockcy;

/**
 * <b>Helper for GET calls</b>
 *{"notice":"","unspent_outputs":[{"tx_hash_big_endian":"5da8f74aa4d6612c58c0a740b4740579db57c95828e4cdf04e7d18c23b66cb4a","tx_hash":"4acb663bc2187d4ef0cde42858c957db790574b440a7c0582c61d6a44af7a85d","tx_output_n":1,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":20100,"value_hex":"4e84","confirmations":4597,"tx_index":2631598528283407},{"tx_hash_big_endian":"354c4488e0aa4ebb787667f3560ab827ac337b9be60b3ef315e469c42fb71add","tx_hash":"dd1ab72fc469e415f33e0be69b7b33ac27b80a56f3677678bb4eaae088444c35","tx_output_n":73,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":17526,"value_hex":"4476","confirmations":5496,"tx_index":7779417991974204},{"tx_hash_big_endian":"21790d71d2581afdc456dbf22e1c95b77e2c0bd527aba199481cc0a4ed94d4f3","tx_hash":"f3d494eda4c01c4899a1ab27d50b2c7eb7951c2ef2db56c4fd1a58d2710d7921","tx_output_n":24,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":291612,"value_hex":"04731c","confirmations":25684,"tx_index":8579019430991875},{"tx_hash_big_endian":"9fed8adf37c5a496f080266105f823e2162c030c271a56e3f223391e7d8560ec","tx_hash":"ec60857d1e3923f2e3561a270c032c16e223f805612680f096a4c537df8aed9f","tx_output_n":25,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":6000,"value_hex":"1770","confirmations":26575,"tx_index":8316777618720548},{"tx_hash_big_endian":"9378ed7213ad98077ecf16a7a5b55a553ae63d0eeff2def979571e5030ff7447","tx_hash":"4774ff30501e5779f9def2ef0e3de63a555ab5a5a716cf7e0798ad1372ed7893","tx_output_n":60,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":10000,"value_hex":"2710","confirmations":39674,"tx_index":2514170340312010},{"tx_hash_big_endian":"7b2a671cec84301314fe1b27c0c993c5850fb3463da6c479f97820cd7f08a967","tx_hash":"67a9087fcd2078f979c4a63d46b30f85c593c9c0271bfe14133084ec1c672a7b","tx_output_n":1,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":16325,"value_hex":"3fc5","confirmations":46427,"tx_index":3647222071272463},{"tx_hash_big_endian":"d91b8365dd3e0d3d7611fc270baf6685697f1c4037c9dec48f19447322f088c4","tx_hash":"c488f0227344198fc4dec937401c7f698566af0b27fc11763d0d3edd65831bd9","tx_output_n":2,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":50000,"value_hex":"00c350","confirmations":56293,"tx_index":6914957548349571},{"tx_hash_big_endian":"c48d85744f5762d3d02a8daff2dfdb15d1952dbe778e737da218c60a1ca34187","tx_hash":"8741a31c0ac618a27d738e77be2d95d115dbdff2af8d2ad0d362574f74858dc4","tx_output_n":1,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":596677,"value_hex":"091ac5","confirmations":56435,"tx_index":4758911332735171},{"tx_hash_big_endian":"fd2abfa58670e8d811aedb029c60d117f25186e00351f581ecf6e3063cc281f8","tx_hash":"f881c23c06e3f6ec81f55103e08651f217d1609c02dbae11d8e87086a5bf2afd","tx_output_n":6,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":50000,"value_hex":"00c350","confirmations":56487,"tx_index":8743558181870718},{"tx_hash_big_endian":"2d596683c9c843cf7c1339a202c6c0c30259be361a55339ee932663ebf07527f","tx_hash":"7f5207bf3e6632e99e33551a36be5902c3c0c602a239137ccf43c8c98366592d","tx_output_n":3,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":5433,"value_hex":"1539","confirmations":57336,"tx_index":4479689408629958},{"tx_hash_big_endian":"d67a35f492510b9f3f0819771d45440b2b1bd498bbc81d4b31e360fa9ad333f4","tx_hash":"f433d39afa60e3314b1dc8bb98d41b2b0b44451d7719083f9f0b5192f4357ad6","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":1000,"value_hex":"03e8","confirmations":57412,"tx_index":8592109781077020},{"tx_hash_big_endian":"d1c131aeaf16fe81087e811c0acba292c0f139ad86d154ac037004187d848ad9","tx_hash":"d98a847d18047003ac54d186ad39f1c092a2cb0a1c817e0881fe16afae31c1d1","tx_output_n":98,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":547,"value_hex":"0223","confirmations":57472,"tx_index":7654046448156814},{"tx_hash_big_endian":"6f014b3265de8c840d340e3a7651e44fd9e9ed9e172b44905fcff29a5859ffd6","tx_hash":"d6ff59589af2cf5f90442b179eede9d94fe451763a0e340d848cde65324b016f","tx_output_n":1,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":100000,"value_hex":"0186a0","confirmations":57652,"tx_index":7564550527475289},{"tx_hash_big_endian":"ed5f4bf0ecebffaff1e7a81b537349a8133da58db771c40f4ad86fcf0549cef9","tx_hash":"f9ce4905cf6fd84a0fc471b78da53d13a84973531ba8e7f1afffebecf04b5fed","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":6501,"value_hex":"1965","confirmations":57910,"tx_index":8789260278296059},{"tx_hash_big_endian":"388a95a32b75e5291c3160b5f2eef3dbcfcf482f5575f3b6aea1c7a80873812f","tx_hash":"2f817308a8c7a1aeb6f375552f48cfcfdbf3eef2b560311c29e5752ba3958a38","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":6125,"value_hex":"17ed","confirmations":58184,"tx_index":1671456871487732},{"tx_hash_big_endian":"263a47f985c5a3c527391dd1a3f90f0732cd0c6085fdac8aac2b76106fb44c04","tx_hash":"044cb46f10762bac8aacfd85600ccd32070ff9a3d11d3927c5a3c585f9473a26","tx_output_n":3,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":5433,"value_hex":"1539","confirmations":58193,"tx_index":151279718502085},{"tx_hash_big_endian":"db80d8919de25e2811e9b15306e6d970fbb3f08486e482cf831d15ff094ba016","tx_hash":"16a04b09ff151d83cf82e48684f0b3fb70d9e60653b1e911285ee29d91d880db","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":546,"value_hex":"0222","confirmations":58377,"tx_index":796086704792227},{"tx_hash_big_endian":"f2cbc81fc0e9ce31ff6afb6f1ea7033c0bfd91619418c70d2bc94340f4fc7d14","tx_hash":"147dfcf44043c92b0dc718946191fd0b3c03a71e6ffb6aff31cee9c01fc8cbf2","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":9000,"value_hex":"2328","confirmations":58706,"tx_index":721003114662009},{"tx_hash_big_endian":"5fe9d9b49790fc15446be422fa78edd538598011a3a72f149a22b72f74ba4b65","tx_hash":"654bba742fb7229a142fa7a311805938d5ed78fa22e46b4415fc9097b4d9e95f","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":1226,"value_hex":"04ca","confirmations":58777,"tx_index":3564029604132580},{"tx_hash_big_endian":"85e815fcec1f75c8d680bb7dab03ab9d90afa0ad02820b6acaf999c0a49930cd","tx_hash":"cd3099a4c099f9ca6a0b8202ada0af909dab03ab7dbb80d6c8751fecfc15e885","tx_output_n":0,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":8156,"value_hex":"1fdc","confirmations":58797,"tx_index":7219475834737471},{"tx_hash_big_endian":"00f29624bff0d2bd060dc093508ce839094a73145c39ec18af1310b7864f8490","tx_hash":"90844f86b71013af18ec395c14734a0939e88c5093c00d06bdd2f0bf2496f200","tx_output_n":3,"script":"76a914b3dd79fb3460c7b0d0bbb8d2ed93436b88b6d89c88ac","value":10000,"value_hex":"2710","confirmations":59007,"tx_index":5084734217970178}]}
 * @private
 * @param {string}    url        Endpoint after URL_ROOT.
 * @param {Object}    params     Additional URL parameters.
 * @callback          cb
 * @memberof          Blockcy
 * @method            get
 */
Blockcy.prototype._get = function (url, params, cb) {
	var urlr = URL_ROOT + this.coin + '/' + this.chain + url;
	params = Object.assign({}, params, { token: this.token });
	request
		.get(urlr)
		.set('Accept', 'application/json')
		.query(params)
		.end(function (error, response) {
			if (error || response.statusCode !== 200) {
				cb(error || {});
			} else {
				cb(null, response.body);
			}
		});
};

/**
 * <b>Helper for POST calls</b>
 *
 * @private
 * @param {string}    url        Endpoint after URL_ROOT.
 * @param {Object}    params     Optional additional URL parameters.
 * @param {Object}    data       Optional data to post.
 * @callback          cb
 * @memberof          Blockcy
 * @method            post
 */
Blockcy.prototype._post = function (url, params, data, cb) {
	var urlr = URL_ROOT + this.coin + '/' + this.chain + url;
	params = Object.assign({}, params, { token: this.token });
	request
		.post(urlr)
		.set('Content-Type', 'application/json')
		.query(params)
		.send(data)
		.end(function (error, response) {
			if (error || (response.statusCode !== 200 && response.statusCode !== 201)) {
				cb(error || {});
			} else {
				cb(null, response.body);
			}
		});
};

/**
 * <b>Helper for DELETE calls</b>
 *
 * @private
 * @param {string}    url        Endpoint after URL_ROOT.
 * @param {Object}    params     Additional URL parameters.
 * @callback          cb
 * @memberof          Blockcy
 * @method            get
 */
Blockcy.prototype._del = function (url, params, cb) {
	var urlr = URL_ROOT + this.coin + '/' + this.chain + url;
	params = Object.assign({}, params, { token: this.token });
	request.del({
		url: urlr,
		strictSSL: true,
		json: true,
		qs: params
	}, function (error, response, body) {
		if (error || response.statusCode !== 204) {
			cb(error, body || {});
		} else {
			cb(null, body);
		}
	});
};

/**
 * <b>Get Chain</b>
 * Get info about the blockchain you're querying.
 * @callback cb
 * @memberof Blockcy
 * @method getChain
 */
Blockcy.prototype.getChain = function (cb) {
	this._get('/', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Block</b>
 * Get info about a block you're querying under your object's coin/chain, with additional parameters. Can use either block height or hash.
 * @param {(string|number)}    hh         Hash or height of the block you're querying.
 * @param {Object}             [params]   Optional URL parameters.
 * @callback cb
 * @memberof Blockcy
 * @method getBlock
 */
Blockcy.prototype.getBlock = function (hh, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._get('/blocks/' + hh, params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Addr Bal</b>
 * Get balance information about an address.
 * @param {(string|number)}    addr       Address you're querying.
 * @param {Object}             [params]   Optional URL parameters.
 * @callback cb
 * @memberof Blockcy
 * @method getAddrBal
 */
Blockcy.prototype.getAddrBal = function (addr, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._get('/addrs/' + addr + '/balance', params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Addr</b>
 * Get information about an address, including concise transaction references.
 * @param {(string|number)}    addr       Address you're querying.
 * @param {Object}             [params]   Optional URL parameters.
 * @callback cb
 * @memberof Blockcy
 * @method getAddr
 */
Blockcy.prototype.getAddr = function (addr, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._get('/addrs/' + addr, params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Addr Full</b>
 * Get information about an address, including full transactions.
 * @param {(string|number)}    addr       Address you're querying.
 * @param {Object}             [params]   Optional URL parameters.
 * @callback cb
 * @memberof Blockcy
 * @method getAddrFull
 */
Blockcy.prototype.getAddrFull = function (addr, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._get('/addrs/' + addr + '/full', params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Gen Addr</b>
 * Generates a new address and associate private/public keys.
 * @param {Object}   					data    						Optional JSON data, which could be used for generating multisig addresses, for exampl.JSON data, which could be used for generating multisig addresses, for example.
 * @param {Array[Strings]}    data.pubKeys    		Optional pubKeys for multi sig address
 * @param {String}   					data.script_type    Optional script type for multi sig address
 * @callback cb
 * @memberof Blockcy
 * @method genAddr
 */
Blockcy.prototype.genAddr = function (data, cb) { //TODO Allow function signature genAddr(cb) as well
	this._post('/addrs', {}, data, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Faucet</b>
 * Funds an address. Must be used within a test blockchain (bcy-test or btc-test3).
 * @param {string}    addr     Address to be funded.
 * @param {number}    value    Amount to fund.
 * @callback cb
 * @memberof Blockcy
 * @method faucet
 */
Blockcy.prototype.faucet = function (addr, value, cb) { //TODO set default value if value is undefined/null. Maybe allow faucet(addr, cb).
	this._post('/faucet', {}, { address: addr, amount: value }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Create Wallet</b>
 * Creates a new wallet.
 * @param {Object}    				data    					JSON Data used to create wallet.
 * @param {String}    				data.name    			Name of wallet
 * @param {Array[String]}     data.addresses    Array of addresses
 * @callback cb
 * @memberof Blockcy
 * @method createWallet
 */
Blockcy.prototype.createWallet = function (data, cb) { //TODO check if they have name and address before making request
	this._post('/wallets', {}, data, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Create HD Wallet</b>
 * Creates a new HD wallet.
 * @param {Object}     		 data    											JSON Data used to create HD wallet.
 * @param {String}     		 data.name    								Name of wallet
 * @param {String}     		 data.extended_public_key    	extended public key
 * @param {Array[int]}     data.subchain_indexes    		subchain indexes
 * @callback cb
 * @memberof Blockcy
 * @method createHDWallet
 */
Blockcy.prototype.createHDWallet = function (data, cb) { //TODO error validation on name and extended_public_key
	this._post('/wallets/hd', {}, data, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>List Wallets</b>
 * List wallets under token.
 * @callback cb
 * @memberof Blockcy
 * @method listWallets
 */
Blockcy.prototype.listWallets = function (cb) {
	this._get('/wallets', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>List HD Wallets</b>
 * List HD wallets under token.
 * @callback cb
 * @memberof Blockcy
 * @method listHDWallets
 */
Blockcy.prototype.listHDWallets = function (cb) {
	this._get('/wallets/hd', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Wallet</b>
 * Get named wallet.
 * @callback cb
 * @param {string}    name    Name of the wallet you're querying.
 * @memberof Blockcy
 * @method getWallet
 */
Blockcy.prototype.getWallet = function (name, cb) {
	this._get('/wallets/' + name, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get HD Wallet</b>
 * Get named HD wallet.
 * @callback cb
 * @param {string}    name    Name of the HD wallet you're querying.
 * @memberof Blockcy
 * @method getHDWallet
 */
Blockcy.prototype.getHDWallet = function (name, cb) {
	this._get('/wallets/hd/' + name, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Add Addresses to Wallet</b>
 * Add array of addresses to named wallet.
 * @callback cb
 * @param {string}     name    Name of the wallet you're querying.
 * @param {string[]}   addrs   Array of addresses you're adding.
 * @memberof Blockcy
 * @method addAddrWallet
 */
Blockcy.prototype.addAddrWallet = function (name, addrs, cb) {
	this._post('/wallets/' + name + '/addresses', {}, { addresses: addrs }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Addresses from Wallet</b>
 * Get array of addresses from named wallet.
 * @callback cb
 * @param {string}     name    Name of the wallet you're querying.
 * @memberof Blockcy
 * @method getAddrsWallet
 */
Blockcy.prototype.getAddrsWallet = function (name, cb) {
	this._get('/wallets/' + name + '/addresses', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Addresses from HD Wallet</b>
 * Get array of addresses from named HD wallet.
 * @callback cb
 * @param {string}     name    Name of the HD wallet you're querying.
 * @param {Object}     [params]  Optional URL parameters.
 * @memberof Blockcy
 * @method getAddrsHDWallet
 */
Blockcy.prototype.getAddrsHDWallet = function (name, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._get('/wallets/hd/' + name + '/addresses', params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Delete Addresses from Wallet</b>
 * Delete addresses from named wallet.
 * @callback cb
 * @param {string}      name    Name of the wallet you're querying.
 * @param {string[]}    addrs   Array of addresses you're deleting.
 * @memberof Blockcy
 * @method delAddrsWallet
 */
Blockcy.prototype.delAddrsWallet = function (name, addrs, cb) {
	this._del('/wallets/' + name + '/addresses', { address: addrs.join([';']) }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Generate Address in Wallet</b>
 * Add a generated address to named wallet.
 * @callback cb
 * @param {string}     name    Name of the wallet you're querying.
 * @memberof Blockcy
 * @method genAddrWallet
 */
Blockcy.prototype.genAddrWallet = function (name, cb) {
	this._post('/wallets/' + name + '/addresses/generate', {}, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Derive Address in Wallet</b>
 * Derive an address in named HD wallet.
 * @callback cb
 * @param {string}     name      Name of the wallet you're querying.
 * @param {Object}     [params]  Optional URL parameters.
 * @memberof Blockcy
 * @method deriveAddrHDWallet
 */
Blockcy.prototype.deriveAddrHDWallet = function (name, params, cb) {
	if (typeof params === 'function') {
		cb = params;
		params = {};
	}
	this._post('/wallets/hd/' + name + '/addresses/derive', params, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Delete Wallet</b>
 * Deletes named wallet.
 * @callback cb
 * @param {string}      name    Name of the wallet you're querying.
 * @memberof Blockcy
 * @method delWallet
 */
Blockcy.prototype.delWallet = function (name, cb) {
	this._del('/wallets/' + name, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Delete HD Wallet</b>
 * Deletes named HD wallet.
 * @callback cb
 * @param {string}      name    Name of the HD wallet you're querying.
 * @memberof Blockcy
 * @method delHDWallet
 */
Blockcy.prototype.delHDWallet = function (name, cb) {
	this._del('/wallets/hd/' + name, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Transaction</b>
 * Get transaction by hash.
 * @callback cb
 * @param {string}    hash    Hash of the transaction.
 * @param {Object}    params  Optional URL parameters.
 * @memberof Blockcy
 * @method getTX
 */
Blockcy.prototype.getTX = function (hash, params, cb) { //TODO allow params to be optional getTX(hash, cb) should work
	this._get('/txs/' + hash, params, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Unconfirmed Transactions</b>
 * Get currently unconfirmed transactions.
 * @callback cb
 * @memberof Blockcy
 * @method getUnTXs
 */
Blockcy.prototype.getUnTXs = function (cb) {
	this._get('/txs', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>New Transaction</b>
 * Creates a new transaction skeleton, which returns the transaction along with data that needs to be signed. You can see more information on how this process works here: <a href="http://dev.blockcypher.com/?javascript#creating-transactions">http://dev.blockcypher.com/?javascript#creating-transactions</a>
 * @callback cb
 * @param {Object}     tx      Transaction base you're using to build a TX. https://www.blockcypher.com/dev/bitcoin/#tx
 * @memberof Blockcy
 * @method newTX
 */
Blockcy.prototype.newTX = function (tx, cb) {
	this._post('/txs/new', {}, tx, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Send Transaction</b>
 * Sends a signed transaction skeleton, which returns the completed transaction. You can read more information on how this process works here: <a href="http://dev.blockcypher.com/?javascript#creating-transactions">http://dev.blockcypher.com/?javascript#creating-transactions</a>
 * @callback cb
 * @param {Object}     txskel     Signed transaction skeleton you're sending. https://www.blockcypher.com/dev/bitcoin/#txskeleton
 * @memberof Blockcy
 * @method sendTX
 */
Blockcy.prototype.sendTX = function (txskel, cb) {
	this._post('/txs/send', {}, txskel, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Push Transaction</b>
 * Pushes a raw, hex-serialized transaction.
 * @callback cb
 * @param {string}     hex     Hex-encoded transaction.
 * @memberof Blockcy
 * @method pushTX
 */
Blockcy.prototype.pushTX = function (hex, cb) {
	this._post('/txs/push', {}, { tx: hex }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Decode Transaction</b>
 * Decodes (but doesn't send!) a hex-serialized raw transaction. Useful for debugging issues with pushTX.
 * @callback cb
 * @param {string}     hex     Hex-encoded transaction.
 * @memberof Blockcy
 * @method pushTX
 */
Blockcy.prototype.decodeTX = function (hex, cb) {
	this._post('/txs/decode', {}, { tx: hex }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Embed Transaction</b>
 * Embeds data within a given blockchain.
 * @callback cb
 * @param {string}     hex     Hex-encoded data to embed.
 * @memberof Blockcy
 * @method pushTX
 */
Blockcy.prototype.embedData = function (hex, cb) {
	this._post('/txs/data', {}, { data: hex }, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Send Micro Transaction</b>
 * Sends a transaction using private (or public) keys via the microtransaction API, as described here: <a href="http://dev.blockcypher.com/?javascript#microtransaction-endpoint">http://dev.blockcypher.com/?javascript#microtransaction-endpoint</a>
 * @callback cb
 * @param {Object}     micro    Microtransaction object.
 * @memberof Blockcy
 * @method microTX
 */
Blockcy.prototype.microTX = function (micro, cb) {
	this._post('/txs/micro', {}, micro, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get Transaction Confidence</b>
 * Get transaction confidence by hash.
 * @callback cb
 * @param {string}    hash    Hash of the transaction.
 * @memberof Blockcy
 * @method getTXConf
 */
Blockcy.prototype.getTXConf = function (hash, cb) {
	this._get('/txs/' + hash + '/confidence', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Create Payment Forward</b>
 * Creates a new payment forward.
 * @param {Object}    data    							JSON Data used to create payment forward.
 * @param {String}    data.destination    	Destination address
 * @param {String}    data.callback_url    	callback url
 * @callback cb
 * @memberof Blockcy
 * @method createPayFwd
 */
Blockcy.prototype.createPayFwd = function (data, cb) {
	this._post('/payments', {}, data, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>List Payment Forwards</b>
 * Lists current payments associated with this blockchain and token.
 * @callback cb
 * @memberof Blockcy
 * @method listPayFwds
 */
Blockcy.prototype.listPayFwds = function (cb) {
	this._get('/payments', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Delete Payment Forward</b>
 * Deletes payment forward by id.
 * @callback cb
 * @param {string}      id    ID of the payment forward you're deleting.
 * @memberof Blockcy
 * @method delPayFwd
 */
Blockcy.prototype.delPayFwd = function (id, cb) {
	this._del('/payments/' + id, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Create WebHook</b>
 * Creates a new webhook.
 * @param {Object}    data    				JSON Data used to create webhook.
 * @param {String}    data.event    	Event name
 * @param {String}    data.address    address
 * @param {String}    data.url    		url
 * @callback cb
 * @memberof Blockcy
 * @method createHook
 */
Blockcy.prototype.createHook = function (data, cb) {
	this._post('/hooks', {}, data, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>List WebHooks</b>
 * Lists current webhooks associated with this blockchain and token.
 * @callback cb
 * @memberof Blockcy
 * @method listHooks
 */
Blockcy.prototype.listHooks = function (cb) {
	this._get('/hooks', {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Get WebHook</b>
 * Get information about a WebHook based on its ID.
 * @param {string}    id    ID of the WebHook you're querying.
 * @callback cb
 * @memberof Blockcy
 * @method getHook
 */
Blockcy.prototype.getHook = function (id, cb) {
	this._get('/hooks/' + id, {}, function (error, body) {
		cb(error, body);
	});
};

/**
 * <b>Delete WebHook</b>
 * Deletes WebHook by its id.
 * @callback cb
 * @param {string}      id    ID of the WebHook you're deleting.
 * @memberof Blockcy
 * @method delPayFwd
 */
Blockcy.prototype.delHook = function (id, cb) {
	this._del('/hooks/' + id, {}, function (error, body) {
		cb(error, body);
	});
};
