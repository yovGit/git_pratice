function generate(){
    const array1 = ['We are gonna cast a magical spell', 'I had the weirdest dream', 'My favorite words are']
    const array2 = ['Bibidi-Babidi-Boo', 'Heigh-Ho Heigh-Ho', 'Ali Ababwa'];
    const array3 = ['Next','then we have', 'followed by'];
    const array4 = ['Rumbly in my Tumbly', 'Oh bother', 'Happy Windsday'];


    let data1 = array1[Math.floor(Math.random()*3)];
    let data2 = array2[Math.floor(Math.random()*3)];
    let data3 = array3[Math.floor(Math.random()*3)];
    let data4 = array4[Math.floor(Math.random()*3)];

    console.log(`${data1} ${data2} ${data3} ${data4}`);
}

generate();