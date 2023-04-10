class Functions{
    setPlace = (p) => {
        console.log("place of interes it ")
        console.log(p)

        var pl = p;

        switch(p){
            case '1':
                pl = 'BEKA ZANZIBAR TOUR AND SAFARI';
                break;
            case '2':
                pl = 'SAFARI TO SERENGETI AND NGORONGORO';
                break;
            case '3':
                pl = 'ZANZIBAR PACKAGE';
                break;
            case '4':
                pl = 'MIKUMI NATIONAL PARK';
                break;
            default:
                pl = 'GENERAL';
                break;
        }

        return pl;
    } 
}

module.exports = Functions