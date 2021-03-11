const stage = {
    list: [],
    addItem: item => this.list.push(item),
    removeItem: item => this.list = this.list.filter(elem=> elem !== item)
}
