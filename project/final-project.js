/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let holdNfts = []; // initialize 'holdNfts' to an empty array
console.log(holdNfts);
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.

function mintNFT(name, description, image, attributes, externalUrl, creator) {
  let nftMetadata = {
    name: name || 'My First NFT',
    description: description || 'This is an example of a simple NFT metadata.',
    image: image || 'https://example.com/nft-image.jpg',
    attributes: attributes || [
      { trait_type: 'Color', value: 'Blue' },
      { trait_type: 'Background', value: 'Abstract' },
      { trait_type: 'Rarity', value: 'Common' },
    ],
    external_url: externalUrl || 'https://example.com/nft-details',
    creator: creator || {
      name: 'Chidozie',
      wallet_address: '0x123456789abcdef',
    },
  };
  holdNfts.push(nftMetadata);
  console.log(nftMetadata);
  console.log(holdNfts);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < holdNfts.length; i++) {
    console.log(i + 1);
    console.log(holdNfts[i].name);
    console.log(holdNfts[i].description);
    console.log(holdNfts[i].image);
    console.log(holdNfts[i].attributes);
    console.log(holdNfts[i].external_url);
    console.log(holdNfts[i].creator.name);
    console.log(holdNfts[i].creator.wallet_address);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(holdNfts.length);
}

// call your functions below this line

mintNFT('Sarah', 'This is the first NFT');
mintNFT('Joan', 'This is the second NFT');
mintNFT('Elvis', 'This is the third NFT');

console.log(holdNfts[0]);
console.log(holdNfts[1]);
console.log(holdNfts[2]);

getTotalSupply();

listNFTs();
