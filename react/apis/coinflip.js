function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let attempts = 0;
        let heads = 0;
        while (attempts <= 100 && heads < 5) {
            attempts++;
            let flip = Math.floor(Math.random() * 2);
            if (flip === 1)
                heads++;
        }
        if (heads === 5)
            resolve("It took " + attempts + " coin flips to roll heads 5 times.");
        else
            reject("We (somehow) hit 100 attempts before rolling heads 5 times");
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );