# How to run

## Create a globals.js file containing your Fortmatics PK

Create a new file called globals.js and include your Fortmatic PK as follow
```
exports.fortmaticPkTest = "pk_test_XXXXXXXXX";
```

## Run the mobile app

```bash
git clone https://github.com/ademcan/react-native-fortmatic
cd react-native-fortmatic
npm i
react-native start
react-native run-ios
```

# Current issues

The fm.getProvider() object is passed to RN and looks like
```
fortmaticClient: 'https://x2.fortmatic.com',
    requests: {},
    queue: [],
    account: null,
    network: null,
    isFortmatic: true,
    overlayReady: false,
    isLoggedIn: false,
    options: { API_KEY: 'pk_test_XXXXXXXXX' },
    overlay: {} 
}
```

## with web3 v1.0.0-beta.55

-> Invalid provider injected!

## with web3 v0.2.0

-> undefined is not a function (near '...this.provider.sendAsync...')

