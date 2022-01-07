class WorkBLO {
    workList;
    counter = 0;

    addWork(work) {
        this.workList.push(work)
    }

    editWork(work) {
      for(var i =0; i< this.workList.length; i++){
          if(work.id == this.workList[i]){
              this.workList[i] = work
          }
      }  
    }
}