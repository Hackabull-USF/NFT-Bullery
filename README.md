# 🐮 Bullery
> User can upload, sell, and buy Bull NFT artworks

![img](https://github.com/Hackabull2022/NFT-Bullery/blob/master/Bullery.PNG)


- USF 4th Hackabull **Team Bullery**​
- Period : `2022.03.26` ~ `2022.03.27`

<br>

# ​Contents

[:one:​ Inspiration](#one-inspiration)<br>
[:two:​ User Stories](#five-user-stories)<br>
[:three:​ Demo Video](#one-demo-video)<br>
[:four:​ Package Structure](#two-package-structure)<br>
[:five:​ Technologies](#two-technologies)<br>
[:six:​ What We Learned](#two-what-we-learned)<br>
[:seven:​ Contributors](#two-contributor)<br>

<br>

## ​:one:​ Inspiration
```
Recently, NFT (Non-fungible Tokens) seem to have exploded out of the ether this year. 
From art and music, these digital assets are even selling some for millions of dollars. 
This NFT can protect the license of the digital artwork using BlockChain technology with its unique identifying codes. 
These characteristics that NFTs are unique, irreplaceable, and provide exclusive ownership on the blockchain 
blew our mind and trigger us to learn and implement a small project using the idea of NFT.
```

## ​:two:​ User Stories
<table class="tg">
<tbody>
  <tr>
    <td><b>User</b></td>
    <td>Functions</td>
  </tr>
<tr>
    <td><b>Mint NFT button</b></td>
<td>User can register and bring Bull NFT to their own NFT page</td>
</tr>
<tr>
    <td><b>My NFT</b></td>
<td>User can view, set price to sell, and sell their owned Bull NFT</td>
</tr>
<tr>
    <td><b>Sale Status under My NFT</b></td>
<td>User can check if they are logged in to sell Bull NFT</td>
</tr>
<tr>
    <td><b>Sale NFT</b></td>
<td>User can view Bull NFTs on sale and buy them</td>
</tr>
<tr>
    <td><b>Other Tool required</b></td>
<td>MetaMask Chrome Extension</td>
</tr>
</tbody>
</table>

- DApp explained
``` 
A decentralized application (DApp) is an application built on a decentralized network that combines a smart contract and a frontend user interface. 
On Ethereum, smart contracts are accessible and transparent – like open APIs – so your DApp can even include a smart contract that someone else has written. 
```

## ​:three:​ [Demo Video](https://youtube.com/watch?v=mqqFiez6BXk&feature=share)

## ​:four:​ Package Structure
```
📦 contracts
 ┣ 📂 node_modules
 ┃ ┗ 📂 @openzeppelin
 ┃ ┗ 📂 .package-lock.json
 ┣ 📂 package-lock.json
 ┣ 📂 package.json
 ┣ 📂 MintAnimalToken.sol
 ┣ 📂 SaleAnimalToken.sol
 ┣ 📂 artifacts
📦 frontend
 ┣ 📂 node_modules
 ┣ 📂 public
 ┃ ┗ 📂 NFTimages
 ┣ 📂 src
 ┃ ┗ 📂 components
 ┃ ┃ ┣ 📂 AnimalCard.tsx
 ┃ ┃ ┣ 📂 Layout.tsx
 ┃ ┃ ┣ 📂 MyAnimalCard.tsx
 ┃ ┃ ┣ 📂 SaleAnimalCard.tsx
 ┃ ┗ 📂 routes
 ┃ ┃ ┣ 📂 main.tsx
 ┃ ┃ ┣ 📂 my-animal.tsx
 ┃ ┃ ┣ 📂 sale-animal.tsx
 ┃ ┗ 📂 App.test.tsx
 ┃ ┗ 📂 index.tsx
 ┃ ┗ 📂 react-app-env.d.ts
 ┃ ┗ 📂 reportWebVitals.ts
 ┃ ┗ 📂 setupTests.ts
 ┃ ┗ 📂 web3Config.ts
 ┣ 📂 .gitignore
 ┣ 📂 config-overrides.js
 ┣ 📂 package-lock.json
 ┣ 📂 package.json
 ┗ 📂 tsconfig.json
 
```

[📂 MintAnimalToken.sol](https://github.com/Hackabull2022/NFT-Bullery/wiki/MintAnimalToken.sol)
[📂 SaleAnimalToken.sol](https://github.com/Hackabull2022/NFT-Bullery/wiki/SaleAnimalToken.sol)
<br>

## ​:five:​ Technologies
```
👉 Technologies Used for Bullery Project
```
- BlockChain
  - Solidity
  - Remix | Ethereum IDE
  - ERC721
  - Smart Contract

- Frontend 
  - React
  - TypeScript
  - Charkre UI

- Deployment
  - GitHub Page

- Collaboration
  - GitHub
  - Git
<br>

## ​:six:​ What We Learned
### Challenges we ran into
- Building an NFT website was challenging since it was our first time experiencing Solidity. We have read the docs regarding the concept of Solidity, Smart Contract, DApp, and BlockChain in general and referred to some YouTube videos to implement the NFT backend part.
- In addition to constructing the NFT backend portion, connecting React frontend part to the backend was struggling. We have utilized Charkre UI in order to reduce some time to design the web frontend and Web3.js to connect both ends.
 
### Accomplishments that we're proud of
- We are proud that we could implement a fully functioning web application that the user can mint, set a price, sell, and buy their NFT with a few clicks.
- We are proud that we collaborated utilizing Git and GitHub for the team project and be part of USF's 4th Hackathon, participating in a team project and several workshops and managing the limited time.

### What we learned
- We were able to understand how BlockChain works in the backend by doing debugging on Remix Ethereum IDE
- We were able to know how to work on a project as a group (utilizing Git and GitHub - creating branch, merge, pull request, etc)
<br >

## ​:seven:​ Contributors
```
👉 Introduce team members and contribution
```
<table class="tg">
<tbody>
    <tr>
        <td>Siwon Kim</td>
        <td>Hyunjung Lee</td>
    </tr>
    <tr>
        <td><a href="https://github.com/Siwon-Kim">@Siwon-Kim</a></td>
        <td><a href="https://github.com/oranberry">@oranberry</a></td>
    </tr>
    <tr>
        <td>BlockChain - Solidity, Smart Contract</td>
        <td>Frontend - React, TypeScript, Web3.js, NFT design</td>
    </tr>
</tbody>
</table>

<br>
