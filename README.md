# Hackjam Exponent/Firebase

Tonight you're gonna learn to work with react native and firebase using exponent ;) 

## Getting started
Install [expo xde](https://github.com/exponent/xde)

```
git clone this repo.git
cd hackjam.reactnative/
yarn install
# Start hacking ;)
```

Add your app in the ide
```bash
npm run watch # inside your app's directory
```


## Tasks
- Fix the bugs
- Add/remove yourself from the firebase list
- Implement the filter function

### Where to start
You should edit <strong>app/src/screens/MainScreen/index</strong>

In this component we provide as props your firebase user containing:
```json
{ 
  uid: yourFirebaseUid, 
    displayName: theNameYouChoose,
    photoURL: aRandomAvatar 
}
```

## Bonus
- Do the tasks mentionned above using Redux
