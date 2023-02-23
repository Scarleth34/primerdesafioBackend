//TAREA PAL HOGAR

class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products
    }

    getProductById(Id) {}


    addProducts(Title, description, price, thumbnail, code, stock) {
        code =
            this.products.length === 0 ? 1 :
            this.products[this.products.length - 1].code + 1

        const product = {
            id: this.generarId(),
            Title,
            description,
            price,
            thumbnail: [],
            code: code + this.generarId(),
            stock
        }
        this.products.push(product)
    }


    generarId() {
        const id =
            this.products.length === 0 ? 1 :
            this.products[this.products.length - 1].id + 1
        return id
    }
}

const manager = new ProductManager()
manager.addProducts('IndianHSH', 'Velas de Cera de Soja', 500)
manager.addProducts('IndianHSH2', 'Velas de Cera de Soja2', 1500)
console.log(manager.getProducts())