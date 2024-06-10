
export default class Address {
    country;
    city;
    village;
    zipCode;
    
    constructor(country, city, village, zipCode){
        this.setCountry(country);
        this.setCity(city);
        this.setVillage(village);
        this.setZipCode(zipCode);
    }
    
    setCountry(country){
        if(country === null)
            alert("Country should not be Empty");//throw new Exception("Country should not be empty");           
        else
            this.country = country;
    }
    getCountry(){return this.country;}
    setCity(city){this.city = city;}
    getCity(){return this.city;}
    setVillage(village){this.village = village;}
    getVillage(){return this.village;}
    setZipCode(zipCode){this.zipCode = zipCode;}
    getZipCode(){return this.zipCode;}
    
}
