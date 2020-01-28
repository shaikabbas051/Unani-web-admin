export const commonUtilityParams =(action)=>{
    document.getElementById('loadingIndicator').style.display = 'flex';
    const userObj = {
        opcoNo:action.payload.opco,
        orgLevel: action.payload.role,
        parentOrgLevel:action.payload.role,
        date:action.payload.currentDate,
        pageNum:0,
        pageSize:0,
        "expirationTime": '1800',
      }
    return userObj;
  }