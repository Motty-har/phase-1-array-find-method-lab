// code your solution here

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(array){    
    const newRecord = array.find((record) => {
        if(record.result === "W"){
            return record.year
        }else{
        }
    })
    if(newRecord === undefined){
        return undefined
    } else{
        return newRecord.year
    }
    /*if(array.find(result) === "W"){
        return array.year
    }else{
    }*/
}