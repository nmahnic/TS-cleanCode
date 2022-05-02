type Size = '' | 'S' | 'M' | 'XL';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        // DRY principle
        for ( const key in this){
            switch ( typeof this[key]){
                case 'string':
                    if( (<string><unknown>this[key]).length <= 0 ) throw Error(`${key} is empty`)
                break;
                case 'number':
                    if( (<number><unknown>this[key]) <= 0 ) throw Error(`${key} is negative or zero`)
                break;
                default:
                    throw Error(`${key} ${typeof this[key]} is not catched`)
            }
        }
        return true
    }

    toString() {

        //No DRY principle
        // if ( this.name.length <= 0 ) throw Error('name is empty');
        // if ( this.price <= 0 ) throw Error('price is zero');
        // if ( this.size.length <= 0 ) throw Error('size is empty');

        // DRY principle
        if( !this.isProductReady()) return;
        
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {

    const bluePants = new Product('Blue large pants', 10,);
    console.log(bluePants.toString());

})();