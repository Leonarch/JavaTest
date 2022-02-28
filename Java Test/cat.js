async function fetchCat() {
    const response = await fetch('https://cataas.com/cat');
    const cats = await response.json()

    let catData=[cats.slice (4,9), cats.slice(14,20)] 
    for( let i=0; i< this.catData.length;i++){
        let singleCat = this.catData[i]
    }
    
    let catMenu = document.getElementById("catMenu")
    catMenu.append(this.singleCat)
    
    let elementCat = document.getElementById("catMenu")
    
    return catData;

}

//fetch('https://cataas.com/cat')