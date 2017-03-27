# Hackjam Exponent/Firebase

Tonight you're gonna learn to work with react native and firebase using exponent ;) 

## Getting started
Install [expo xde](https://github.com/exponent/xde)

```
git clone this https://github.com/hackages/hackjam.reactnative.git
cd hackjam.reactnative/
yarn install
# Add hackjam.reactnative in the expo IDE
typings install
yarn watch # inside your hackjam.reactnative's directory
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
  "user": {
    "uid": "yourFirebaseUid", 
    "displayName": "theNameYouChoose"
  }
}
```

## Bonus
- Do the tasks mentionned above using Redux
