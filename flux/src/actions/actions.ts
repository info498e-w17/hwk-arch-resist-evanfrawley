import {ResistanceDispatcher} from '../index'

// Action object
class Action {
  constructor(readonly actionType:string, readonly data?:any){}
}

class ResistanceAction {
  // type constants
  static readonly ADD_NEW_PROTESTER = 'add_new_protester';
  static readonly ADD_NEW_PROTEST = 'add_new_protest';
  static readonly ADD_NEW_MOVEMENT = 'add_new_movement';
  static readonly MODIFY_PROTEST = 'modify_protest';
  static readonly ADD_PROTEST_TO_MOVEMENT = 'add_protest_to_movement';
  static readonly ADD_PROTESTER_TO_PROTEST = 'add_protester_to_protest';
  static readonly GET_PROTESTS_MEMBERS = 'get_protest_members';
  static readonly GET_PROTESTERS_NEAR_PROTEST = 'get_protesters_near_protest';
  static readonly GET_PROTESTS_NEAR_LOCATION = 'get_protests_near_location';

  // add new protester
  static addNewProtester(name, email, zip){
    let action = new Action(ResistanceAction.ADD_NEW_PROTESTER, {name:name, email:email, zip:zip});
    ResistanceDispatcher.dispatch(action);
  }

  // add new protest
  static addNewProtest(name, dateTime, zip){
    let action = new Action(ResistanceAction.ADD_NEW_PROTEST, {name:name, dateTime:dateTime, zip:zip});
    ResistanceDispatcher.dispatch(action);
  }

  // add new movement
  static addNewMovement(name){
    let action = new Action(ResistanceAction.ADD_NEW_MOVEMENT, {name:name});
    ResistanceDispatcher.dispatch(action);
  }

  // modifies a protest
  static modifyProtest(oldProtestName, newProtestName, newProtestTime){
    let action = new Action(ResistanceAction.MODIFY_PROTEST, {oldProtestName:oldProtestName, newProtestName:newProtestName, newProtestTime:newProtestTime});
    ResistanceDispatcher.dispatch(action);
  }

  // adds protest to a movement
  static addProtestToMovement(movementName, protestName){
    let action = new Action(ResistanceAction.ADD_PROTEST_TO_MOVEMENT, {movementName:movementName, protestName:protestName});
    ResistanceDispatcher.dispatch(action);
  }

  // adds protester to a protest
  static addProtesterToProtest(protestName, protesterName){
    let action = new Action(ResistanceAction.ADD_PROTESTER_TO_PROTEST, {protestName:protestName, protesterName:protesterName});
    ResistanceDispatcher.dispatch(action);
  }

  // gets current protesters that are registered for a protest
  static getProtestProtesters(protestName){
    let action = new Action(ResistanceAction.GET_PROTESTS_MEMBERS, {protestName:protestName});
    ResistanceDispatcher.dispatch(action);
  }

  // get protester near either a zip code or a protest
  static getProtestersNearLocation(location, radius){
    let action;

    if(isNaN(parseInt(location))) {
      action = new Action(ResistanceAction.GET_PROTESTERS_NEAR_PROTEST, {protestName:location, radius:radius});
    } else {
      action = new Action(ResistanceAction.GET_PROTESTS_NEAR_LOCATION, {zipcode:location, radius:radius});
    }
    ResistanceDispatcher.dispatch(action);
  }
}

export {ResistanceAction, Action};

