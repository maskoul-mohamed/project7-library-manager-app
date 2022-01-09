class WorkBLO {
    #workList = [];
    #counter = 0;

    get workList(){
        return this.#workList;
    }

    addWork(work) {
        this.#counter = this.#counter + 1
        work.id = this.#counter
        this.#workList.push(work)
    }

    editWork(work) {
        for (var i = 0; i < this.#workList.length; i++) {
            if (work.id == this.#workList[i].id) {
                this.#workList[i] = work
                return work
            }
        }
    }


    getItem(id) {
        for (var i = 0; i < this.workList.length; i++) {
            if (id == this.workList[i].id) {
                return this.workList[i]
            }
        }
    }

    deleteWork(id) {
       this.#workList =  this.#workList.filter(function(work){
            return work.id != id
        })
    }
}