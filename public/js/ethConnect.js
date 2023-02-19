App = {
    loading: false,
    contracts: {},
  
    load: async () => {

    },
  
    connectWalletRegister: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }

      // Get the Account of the Wallet
      const accounts = await web3.eth.getAccounts();
      App.account = accounts[0];
      // User Smart Contract
      // Create a JavaScript version of the smart contract
      const user = await $.getJSON('/build/contracts/User.json')
      App.contracts.user = TruffleContract(user)
      App.contracts.user.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.user = await App.contracts.user.deployed()

      // Co2 Emission Smart Contract
      const emission = await $.getJSON('/build/contracts/Emission.json')
      App.contracts.emission = TruffleContract(emission)
      App.contracts.emission.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.emission = await App.contracts.emission.deployed()

      data = {}
      data['name'] = document.getElementById('register_name').value;
      data['role'] = document.getElementById('register_role').value;
      data['mail'] = document.getElementById('register_mail').value;
      data['wallet_id'] = accounts[0]

      let r = await fetch('/auth/register', {method: 'POST', body: JSON.stringify(data), headers: {'Content-type': 'application/json; charset=UTF-8'}})
      r = await r.json();
      if (r){
        App.setLoading(true)
        await App.user.createUser(data['wallet_id'],data['name'],data['role'],data['mail'],{ from: App.account })
          window.location.href = '/dashboard'
      }
    },

    connectWalletLogin: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }

      // Get the Account of the Wallet
      const accounts = await web3.eth.getAccounts();
      App.account = accounts[0];

      // User Smart Contract
      // Create a JavaScript version of the smart contract
      const user = await $.getJSON('/build/contracts/User.json')
      App.contracts.user = TruffleContract(user)
      App.contracts.user.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.user = await App.contracts.user.deployed()

      // Co2 Emission Smart Contract
      const emission = await $.getJSON('/build/contracts/Emission.json')
      App.contracts.emission = TruffleContract(emission)
      App.contracts.emission.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.emission = await App.contracts.emission.deployed()

      
      data = {}
      data['wallet_id'] = accounts[0]

      let r = await fetch('/auth/login', {method: 'POST', body: JSON.stringify(data), headers: {'Content-type': 'application/json; charset=UTF-8'}})
      r = await r.json();
      if (r){
        window.location.href = '/dashboard'
      }
    },

    EmissionCommunicate:async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }

      // Get the Account of the Wallet
      const accounts = await web3.eth.getAccounts();
      App.account = accounts[0];

      // Co2 Emission Smart Contract
      const emission = await $.getJSON('/build/contracts/Emission.json')
      App.contracts.emission = TruffleContract(emission)
      App.contracts.emission.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.emission = await App.contracts.emission.deployed()

      App.setLoading(true)
      await App.emission.createEmissionData(document.getElementById('walletID').value,document.getElementById('co2').value,document.getElementById('emissionDate').value.toString(),{ from: App.account })
        window.location.href = '/mark-co2'
    },

    FetchEmission:async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }

      // Get the Account of the Wallet
      const accounts = await web3.eth.getAccounts();
      App.account = accounts[0];

      // Co2 Emission Smart Contract
      const emission = await $.getJSON('/build/contracts/Emission.json')
      App.contracts.emission = TruffleContract(emission)
      App.contracts.emission.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.emission = await App.contracts.emission.deployed()

      const taskCount = await App.emission.dataCount()
      const userWallet = document.cookie.split(';')[0].split('=')[1]
      
      tabel_body = document.getElementById('tabel-body')
      html = ``
      cum_emission = 0
      x_data = []
      y_data = []

      j = 1
      for (var i = 1; i <= taskCount; i++) {
        const task = await App.emission.emmis(i)
        if(userWallet == task[0]){
          console.log(task)
          cum_emission += parseFloat(task[1])
          x_data.push(task[2])
          y_data.push(task[1])

          html += 
          `<tr>
          <th scope="row">${j}</th>
          <td>${task[2]}</td>
          <td>${task[0]}</td>
          <td>${task[1]}</td>
          <td>${cum_emission}</td>
          </tr>`
          j+=1
        }
      }
      var ctxL = document.getElementById("lineChart").getContext('2d');
      var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
          labels: x_data,
          datasets: [{
            label: "Industry Carbon Visualization",
            data: y_data,
            backgroundColor: [
                    'rgba(225, 0, 0, .2)',
                  ],
                  borderColor: [
                    'rgba(255, 0, 0, .7)',
                  ],
                  borderWidth: 2
                }
                ]
              },
              options: {
                responsive: true
              }
            });
      tabel_body.innerHTML = html
    },

    SpecificFetchEmission:async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }

      // Get the Account of the Wallet
      const accounts = await web3.eth.getAccounts();
      App.account = accounts[0];

      // Co2 Emission Smart Contract
      const emission = await $.getJSON('/build/contracts/Emission.json')
      App.contracts.emission = TruffleContract(emission)
      App.contracts.emission.setProvider(App.web3Provider)
      // Hydrate the smart contract with values from the blockchain
      App.emission = await App.contracts.emission.deployed()

      const taskCount = await App.emission.dataCount()
      const userWallet = document.getElementById('walletSearch').value
      
      tabel_body = document.getElementById('trans-tabel-body')
      html = ``
      cum_emission = 0
      x_data = []
      y_data = []
      j = 1
      for (var i = 1; i <= taskCount; i++) {
        const task = await App.emission.emmis(i)
        if(userWallet == task[0]){
          cum_emission += parseFloat(task[1])
          x_data.push(task[2])
          y_data.push(task[1])

          html += 
          `<tr>
          <th scope="row">${j}</th>
          <td>${task[2]}</td>
          <td>${task[0]}</td>
          <td>${task[1]}</td>
          <td>${cum_emission}</td>
          </tr>`
          j+=1
        }
      }
      tabel_body.innerHTML = html
    },

    setLoading: (boolean) => {
      App.loading = boolean
      const loader = $('#loader')
      const content = $('#content')
      if (boolean) {
        loader.show()
        content.hide()
      } else {
        loader.hide()
        content.show()
      }
    }
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })