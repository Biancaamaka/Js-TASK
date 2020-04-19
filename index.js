function divisibleNumber(num) {
    let arr = [];
    for(i=1; i<=num; i++) {
        arr.push(i);
    }
    for(j=0; j<arr.length; j++) {
        if(arr[j]%2 == 0 && arr[j]%3 == 0 && arr[j]%5 == 0) {
            arr[j]='yu-gi-oh';
        } else
        if (arr[j]%2 == 0 && arr[j]%3 == 0 && arr[j]%5 != 0) {
            arr[j]='yu-gi';
        }else
        if(arr[j]%2 != 0 && arr[j]%3 == 0 && arr[j]%5 == 0) {
            arr[j]='gi-oh';
        } else
        if(arr[j]%2 == 0 && arr[j]%3 != 0 && arr[j]%5 == 0) {
            arr[j]='yu-oh';
        }else
        if(arr[j]%2 == 0 && arr[j]%3 != 0 && arr[j]%5 != 0) {
            arr[j]='yu';
        } else
        if(arr[j]%3 == 0) {
            arr[j]='gi';
        }else
        if(arr[j]%5 == 0) {
            arr[j]='oh';
        } 
    }console.log(arr);
    return arr;
} 
divisibleNumber(100);