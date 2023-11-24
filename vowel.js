function vol(name){
    var voewel =[ 'a','e','i','o','u'];
     var count=0;
    for(i=0;i<name.length;i++){
        if (voewel.includes(name[i])) {
            count++
        }
        
        
    }
    return count;
    
    }
    console.log(vol("hello"));