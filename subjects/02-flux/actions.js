import alt from './altInstance.js';

class AltActions {
  /*
   * @param String topic id to increment with
   */
  increment(id) {
    this.dispatch(id);
    // sends this to the app store
    console.log('first stop: action')
    // this is where you talk to the database
    //Also post to any server backend to update recrods in database;
  }

  /*
   * @param String topic id to decrement with
   */
  decrement(id) {
    this.dispatch(id);

    //Also post to any server backend to update recrods in database;
  }

}

export default alt.createActions(AltActions);








// ******** solution, no peeking ******

// class AltActions {
//   /*
//    * @param String topic id to increment with
//    */
//   increment(index) {
//     this.dispatch(index);

//     //Also post to any server backend to update recrods in database;
//   }

//   /*
//    * @param String topic id to decrement with
//    */
//   decrement(index) {
//     this.dispatch(index);

//     //Also post to any server backend to update recrods in database;
//   }

// }