function glouton(x,tab,i){
    let val=[100,50,20,10,5,2,1];
    while(x>0){
        if(x-val[i]>=0){
            x=x-val[i];
            tab.push(val[i]);
        }
        else{
            i++;  
        }
        return glouton(x,tab,i);
    }
    console.log(tab);
    return tab;
}

glouton(285,[],0);